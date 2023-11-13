import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useUser } from "../../../context/UserContext";
import { useAvatar } from "../../../context/AvatarContext";
import { socket } from "../../../components/Socket/SocketManager";

let url = ""
const Avatar = () => {
  const { user, setUser } = useUser();
  const { avatar, setAvatar } = useAvatar();
  const avatarRef = useRef();
  url = user.avatarUrl;

  const parametersAvatar = {
    quality: "high", // low, medium, high
    meshLod: 1, // 0 - No triangle count reduction is applied (default), 1 - Retain 50% of the original triangle count, 2 - Retain 25% of the original triangle count.
    textureSizeLimit: 1024, // Min: 256, Max: 1024 (default)
    useDracoMeshCompression: true,
  };

  url = `${url}?${Object.entries(parametersAvatar)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&")}`;

  const { nodes, materials } = useGLTF(url);
  const height = nodes.Wolf3D_Avatar.geometry.boundingBox.max.y;
  const gender = height > 1.8 ? "male" : "female";

  const { animations } = useGLTF(
    gender === "male"
      ? "/assets/animations/manAnimations.glb"
      : "/assets/animations/womanAnimations.glb"
  );

  const { actions } = useAnimations(animations, avatarRef);
  
  useEffect(() => {
    socket.emit("url", url)
  }, [url]);
  
  useEffect(() => {
    if (user.animation !== "") {
        actions[user.animation].reset().fadeIn(0.5).play();
        return () => {
            if (actions[user.animation])
                actions[user.animation].fadeOut(0.5);
        }
    }
  }, [user.animation]);


  useEffect(() => {
    if (avatarRef.current) {
      setUser({
        ...user,
        gender: gender,
      });

      setAvatar({
        ...avatar,
        ref: avatarRef.current,
      });
    }
  }, [avatarRef.current]);

  return (
    <group ref={avatarRef} position-y={0} scale={0.8} rotation-y={-Math.PI} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="Wolf3D_Avatar"
        geometry={nodes.Wolf3D_Avatar.geometry}
        material={materials.Wolf3D_Avatar}
        skeleton={nodes.Wolf3D_Avatar.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
      />
      {nodes.Wolf3D_Avatar_Transparent && (
        <skinnedMesh
          geometry={nodes.Wolf3D_Avatar_Transparent.geometry}
          material={materials.Wolf3D_Avatar_Transparent}
          skeleton={nodes.Wolf3D_Avatar_Transparent.skeleton}
        />
      )}
    </group >
  );
};

export default Avatar;
useGLTF.preload(url);
