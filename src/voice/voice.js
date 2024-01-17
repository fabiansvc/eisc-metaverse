import Peer from "simple-peer";
import io from "socket.io-client";

let socket = null
let peers = {};
let localMediaStream = null;

const init = async () => {
  if (Peer.WEBRTC_SUPPORT) {
    localMediaStream = await getMedia();
    initSocketConnection();
  } else {
    return
  }
};

async function getMedia() {
  let stream = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (err) {
    console.log("Failed to get user media!");
    console.warn(err);
  }
  return stream;
}

function initSocketConnection() {
  socket = io("https://eisc-metaverse-web-rtc.onrender.com");

  socket.on("introduction", (otherClientIds) => {

    for (let i = 0; i < otherClientIds.length; i++) {
      if (otherClientIds[i] != socket.id) {
        let theirId = otherClientIds[i];
        peers[theirId] = {};

        let pc = createPeerConnection(theirId, true);
        peers[theirId].peerConnection = pc;

        createClientMediaElements(theirId);
      }
    }
  });

  socket.on("newUserConnected", (theirId) => {
    if (theirId != socket.id && !(theirId in peers)) {
      peers[theirId] = {};
      createClientMediaElements(theirId);
    }
  });

  socket.on("userDisconnected", (_id) => {
    if (_id != socket.id) {
      removeClientAudioElementAndCanvas(_id);
      delete peers[_id];
    }
  });

  socket.on("signal", (to, from, data) => {
    if (to != socket.id) {
      return
    }
    let peer = peers[from];
    if (peer && peer.peerConnection) {
      peer.peerConnection.signal(data);
    } else {
      let peerConnection = createPeerConnection(from, false);
      peers[from].peerConnection = peerConnection;
      peerConnection.signal(data);
    }
  });
}

function createPeerConnection(theirSocketId, isInitiator = false) {
  let peerConnection = new Peer({
    initiator: isInitiator,
    config: {
      iceServers: [
        {
          urls: "turn:relay1.expressturn.com:3478",
          username: "efMCFG8FWIU8XA35YT",
          credential: "kuqyn53U4MNoPLhc"
        }
      ]
    }
  })

  peerConnection.on("signal", (data) => {
    socket.emit("signal", theirSocketId, socket.id, data);
  });

  peerConnection.on("connect", () => {
    peerConnection.addStream(localMediaStream);
  });

  peerConnection.on("stream", (stream) => {
    updateClientMediaElements(theirSocketId, stream);
  });

  // peerConnection.on("close", () => {
  // });

  // peerConnection.on("error", (err) => {
  // });

  return peerConnection;
}

function disableOutgoingStream() {
  localMediaStream.getTracks().forEach((track) => {
    track.enabled = false;
  });
}

function enableOutgoingStream() {
  localMediaStream.getTracks().forEach((track) => {
    track.enabled = true;
  });
}

function createClientMediaElements(_id) {
  let audioEl = document.createElement("audio");
  audioEl.setAttribute("id", _id + "_audio");
  audioEl.controls = false;
  audioEl.volume = 1;
  document.body.appendChild(audioEl);

  audioEl.addEventListener("loadeddata", () => {
    audioEl.play();
  });
}

function updateClientMediaElements(_id, stream) {
  let audioStream = new MediaStream([stream.getAudioTracks()[0]]);
  let audioEl = document.getElementById(_id + "_audio");
  audioEl.srcObject = audioStream;
}

function removeClientAudioElementAndCanvas(_id) {
  let audioEl = document.getElementById(_id + "_audio");
  if (audioEl != null) {
    audioEl.remove();
  }
}

export { init, disableOutgoingStream, enableOutgoingStream }
