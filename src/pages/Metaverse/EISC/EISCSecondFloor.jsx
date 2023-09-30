import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const EISCSecondFloor = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/EISCSecondFloor.glb");

  return (
    <group {...props} dispose={null}>
      {/* Second Floor */}
      <RigidBody type="fixed" colliders={"trimesh"}>
        <mesh
          geometry={nodes.SecondFloor.geometry}
          material={materials.floor}
        />
      </RigidBody>
      {/* SctructureSecondFloor */}
      <RigidBody type="fixed" colliders={"trimesh"} name="EISCBody">
        <group>
          <mesh
            geometry={nodes.StructureSecondFloor_1.geometry}
            material={materials.wall}
          />
          <mesh
            geometry={nodes.StructureSecondFloor_2.geometry}
            material={materials.rack}
          />
          <mesh
            geometry={nodes.StructureSecondFloor_3.geometry}
            material={materials.alu}
          />
          <mesh
            geometry={nodes.StructureSecondFloor_4.geometry}
            material={materials.glass}
          />
          <mesh
            geometry={nodes.StructureSecondFloor_5.geometry}
            material={materials.brown}
          />
        </group>
        {/* Doors */}
        <group>
          <mesh geometry={nodes.Door2002_1.geometry} material={materials.alu} />
          <mesh
            geometry={nodes.Door2002_2.geometry}
            material={materials.glass}
          />
        </group>
        <group>
          <mesh geometry={nodes.Door2008_1.geometry} material={materials.alu} />
          <mesh
            geometry={nodes.Door2008_2.geometry}
            material={materials.glass}
          />
        </group>
        <group position={[0, 0, -0.1]}>
          <mesh
            geometry={nodes.DoorCenesis_1.geometry}
            material={materials.alu}
          />
          <mesh
            geometry={nodes.DoorCenesis_2.geometry}
            material={materials.glass}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.DoorComputerRoom1R_1.geometry}
            material={materials.alu}
          />
          <mesh
            geometry={nodes.DoorComputerRoom1R_2.geometry}
            material={materials.glass}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.DoorComputerRoom1L_1.geometry}
            material={materials.alu}
          />
          <mesh
            geometry={nodes.DoorComputerRoom1L_2.geometry}
            material={materials.glass}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.DoorComputerRoom2R_1.geometry}
            material={materials.alu}
          />
          <mesh
            geometry={nodes.DoorComputerRoom2R_2.geometry}
            material={materials.glass}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.DoorComputerRoom2L_1.geometry}
            material={materials.alu}
          />
          <mesh
            geometry={nodes.DoorComputerRoom2L_2.geometry}
            material={materials.glass}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.DoorComputerRoom4_1.geometry}
            material={materials.alu}
          />
          <mesh
            geometry={nodes.DoorComputerRoom4_2.geometry}
            material={materials.glass}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.DoorComputerRoom5R_1.geometry}
            material={materials.alu}
          />
          <mesh
            geometry={nodes.DoorComputerRoom5R_2.geometry}
            material={materials.glass}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.DoorComputerRoom5L_1.geometry}
            material={materials.rack}
          />
          <mesh
            geometry={nodes.DoorComputerRoom5L_2.geometry}
            material={materials.alu}
          />
          <mesh
            geometry={nodes.DoorComputerRoom5L_3.geometry}
            material={materials.glass}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.DoorComputerRoom3L_1.geometry}
            material={materials.alu}
          />
          <mesh
            geometry={nodes.DoorComputerRoom3L_2.geometry}
            material={materials.glass}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.DoorComputerRoom3R_1.geometry}
            material={materials.alu}
          />
          <mesh
            geometry={nodes.DoorComputerRoom3R_2.geometry}
            material={materials.glass}
          />
        </group>
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders={"cuboid"}
        name="EISCBody"
        friction={0.7}
        restitution={0}
      >
        {/* Top Second Floor */}
        <mesh
          geometry={nodes.TopSecondFloor.geometry}
          material={materials.wall}
        />
        {/* Chairs */}
        <group>
          <mesh
            geometry={nodes.Chairs2002_1.geometry}
            material={materials.grayChair}
          />
          <mesh
            geometry={nodes.Chairs2002_2.geometry}
            material={materials.blackChair}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.Chairs2008_1.geometry}
            material={materials.grayChair}
          />
          <mesh
            geometry={nodes.Chairs2008_2.geometry}
            material={materials.blackChair}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ChairsComputerRoom1_1.geometry}
            material={materials.redChairBR}
          />
          <mesh
            geometry={nodes.ChairsComputerRoom1_2.geometry}
            material={materials.blackChairBR}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ChairsComputerRoom2_1.geometry}
            material={materials.redChairBR}
          />
          <mesh
            geometry={nodes.ChairsComputerRoom2_2.geometry}
            material={materials.blackChairBR}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ChairsComputerRoom3_1.geometry}
            material={materials.redChairBR}
          />
          <mesh
            geometry={nodes.ChairsComputerRoom3_2.geometry}
            material={materials.blackChairBR}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ChairsComputerRoom4_1.geometry}
            material={materials.redChairBR}
          />
          <mesh
            geometry={nodes.ChairsComputerRoom4_2.geometry}
            material={materials.blackChairBR}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ChairsComputerRoom5_1.geometry}
            material={materials.redChairBR}
          />
          <mesh
            geometry={nodes.ChairsComputerRoom5_2.geometry}
            material={materials.blackChairBR}
          />
        </group>
        {/* Desks */}
        <mesh
          geometry={nodes.DesksComputerRoom1.geometry}
          material={materials.desk}
        />
        <mesh
          geometry={nodes.DesksComputerRoom2.geometry}
          material={materials.desk}
        />
        <mesh
          geometry={nodes.DesksComputerRoom4.geometry}
          material={materials.desk}

        />
        <mesh
          geometry={nodes.DesksComputerRoom5.geometry}
          material={materials.desk}
        />
        <mesh
          geometry={nodes.DesksComputerRoom3.geometry}
          material={materials.desk}
        />
        {/* Whiteboards */}
        <group>
          <mesh
            geometry={nodes.Whiteboard2002_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.Whiteboard2002_2.geometry}
            material={materials.board}
          />

        </group>
        <group>
          <mesh
            geometry={nodes.Whiteboard2008_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.Whiteboard2008_2.geometry}
            material={materials.board}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.WhiteboardComputerRoom1_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardComputerRoom1_2.geometry}
            material={materials.board}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.WhiteboardComputerRoom2_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardComputerRoom2_2.geometry}
            material={materials.board}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.WhiteboardComputerRoom4_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardComputerRoom4_2.geometry}
            material={materials.board}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.WhiteboardComputerRoom5_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardComputerRoom5_2.geometry}
            material={materials.board}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.WhiteboardComputerRoom3_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardComputerRoom3_2.geometry}
            material={materials.board}
          />
        </group>
      </RigidBody>
    </group>
  );
};
export default EISCSecondFloor;

useGLTF.preload("/assets/models/EISCSecondFloor.glb");
