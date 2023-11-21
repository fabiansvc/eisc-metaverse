import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const EISCSecondFloor = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/EISCSecondFloor.glb");

  return (
    <group {...props} dispose={null}>
      <group>
        <RigidBody type="fixed" colliders="trimesh" >
          <mesh
            geometry={nodes.SecondFloor.geometry}
            material={materials.floor}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="trimesh" name="EISCBody" >
          <group>
            <mesh
              geometry={nodes.StructureSecondFloor_1.geometry}
              material={materials.wall}
            />
            <mesh
              geometry={nodes.StructureSecondFloor_2.geometry}
              material={materials.glass}
            />
            <mesh
              geometry={nodes.StructureSecondFloor_3.geometry}
              material={materials.rack}
            />
            <mesh
              geometry={nodes.StructureSecondFloor_4.geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes.StructureSecondFloor_5.geometry}
              material={materials.alu}
            />
          </group>
        </RigidBody>
        <mesh
          geometry={nodes.TopSecondFloor.geometry}
          material={materials.wall}
        />
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
            geometry={nodes.ComputersCenesisRight_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputersCenesisRight_2.geometry}
            material={materials.windowComputer}
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
            geometry={nodes.ComputersRoom1_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputersRoom1_2.geometry}
            material={materials.windowComputer}
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
            geometry={nodes.ComputersRoom2_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputersRoom2_2.geometry}
            material={materials.windowComputer}
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
        <group>
          <mesh
            geometry={nodes.ComputersRoom3Front_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputersRoom3Front_2.geometry}
            material={materials.windowComputer}
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
            geometry={nodes.ComputersRoom4_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputersRoom4_2.geometry}
            material={materials.windowComputer}
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
            geometry={nodes.ComputersRoom5_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputersRoom5_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <RigidBody type="fixed" name="EISCBody">
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
              geometry={nodes.ComputersCenesisLeft_1.geometry}
              material={materials.metalBlackComputer}
            />
            <mesh
              geometry={nodes.ComputersCenesisLeft_2.geometry}
              material={materials.windowComputer}
            />
          </group>
          <mesh
            geometry={nodes.DesksCenesisLeft.geometry}
            material={materials.desk}
          />
          <mesh
            geometry={nodes.DesksCenesisRight.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsCenesisRight_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsCenesisRight_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsCenesisLeft_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsCenesisLeft_2.geometry}
              material={materials.blackChairBR}
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
          <mesh
            geometry={nodes.DesksComputerRoom1.geometry}
            material={materials.desk}
          />
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
          <mesh
            geometry={nodes.DesksComputerRoom2.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsComputerRoom3Back_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsComputerRoom3Back_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsComputerRoom3Front_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsComputerRoom3Front_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ComputersRoom3Back_1.geometry}
              material={materials.metalBlackComputer}
            />
            <mesh
              geometry={nodes.ComputersRoom3Back_2.geometry}
              material={materials.windowComputer}
            />
          </group>
          <mesh
            geometry={nodes.DesksComputerRoom3Back.geometry}
            material={materials.desk}
          />
          <mesh
            geometry={nodes.DesksComputerRoom3Front.geometry}
            material={materials.desk}
          />
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
          <mesh
            geometry={nodes.DesksComputerRoom4.geometry}
            material={materials.desk}
          />
          <mesh
            geometry={nodes.DesksComputerRoom5.geometry}
            material={materials.desk}
          />
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

        </RigidBody>
      </group>
    </group>
  );
};
export default EISCSecondFloor;
useGLTF.preload("/assets/models/EISCSecondFloor.glb");
