import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

/**
 * Component representing the fourth floor of the Escuela de Ingeniería de Sistemas y Computación (EISC) building.
 * @param {Object} props - The props passed to the component.
 * @returns {JSX.Element} The JSX.Element containing the fourth floor model.
 */
const EISCFourthFloor = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/EISCFourthFloor.glb");

  return (
    <group {...props} dispose={null}>
      <group>
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            geometry={nodes.FourthFloor.geometry}
            material={materials.floor}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="trimesh">
          <group>
            <mesh
              geometry={nodes.StructureFourthFloor_1.geometry}
              material={materials.wall}
            />
            <mesh
              geometry={nodes.StructureFourthFloor_2.geometry}
              material={materials.glass}
            />
            <mesh
              geometry={nodes.StructureFourthFloor_3.geometry}
              material={materials.rack}
            />
            <mesh
              geometry={nodes.StructureFourthFloor_4.geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes.StructureFourthFloor_5.geometry}
              material={materials.alu}
            />
            <mesh
              geometry={nodes.StructureFourthFloor_6.geometry}
              material={materials.camaleonDoorInvert}
            />
          </group>
        </RigidBody>
        <RigidBody type="fixed">
          <group>
            <mesh
              geometry={nodes.ChairsPosgrade1Back_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsPosgrade1Back_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskPosgrade1Back.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsPosgrade1Front_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairsPosgrade1Front_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.DesksPosgrade1Front_1.geometry}
              material={materials.desk}
            />
            <mesh
              geometry={nodes.DesksPosgrade1Front_2.geometry}
              material={materials.deskPizarra}
            />
          </group>

          <mesh
            geometry={nodes.DeskPosgrade2.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsPosgrade2_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairsPosgrade2_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>

          <mesh
            geometry={nodes.DeskPosgrade3.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsPosgrade3_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairsPosgrade3_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>

          <group>
            <mesh
              geometry={nodes.ChairPosgrades4_1.geometry}
              material={materials.redChairAuditorio}
            />
            <mesh
              geometry={nodes.ChairPosgrades4_2.geometry}
              material={materials.BlackChairAuditorio}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsComitePosgrades_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsComitePosgrades_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DesksComitePosgrades.geometry}
            material={materials.desk}
          />
          <mesh
            geometry={nodes.DeskTeacher1.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher1_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher1_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher1_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher1_2.geometry}
              material={materials.blackChairBR}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher2.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher2_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher2_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher2_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher2_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher3.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher3_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher3_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher3_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher3_2.geometry}
              material={materials.blackChairBR}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher4.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher4_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher4_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher4_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher4_2.geometry}
              material={materials.blackChairBR}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher5.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher5_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher5_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher5_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher5_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher6.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher6_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher6_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher6_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher6_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher7.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher7_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher7_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher7_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher7_2.geometry}
              material={materials.blackChairBR}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher8.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher8_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher8_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher8_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher8_2.geometry}
              material={materials.blackChairBR}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher9.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher9_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher9_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher9_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher9_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher10.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher10_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher10_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher10_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher10_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher11.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairDirectionPosgrades006.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairDirectionPosgrades006_1.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher11_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher11_2.geometry}
              material={materials.blackChairBR}
            />
          </group>

          <group>
            <mesh
              geometry={nodes.ChairsTeacher12_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher12_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher12_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher12_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher12.geometry}
            material={materials.desk}
          />
          <mesh
            geometry={nodes.DeskTeacher13.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher13_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher13_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher13_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher13_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher14.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher14_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher14_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher14_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher14_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher15.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher15_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher15_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher15_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher15_2.geometry}
              material={materials.blackChairBR}
            />
          </group>

          <mesh
            geometry={nodes.DeskTeacher16.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher16_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher16_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher16_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher16_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
        </RigidBody>
        <mesh
          geometry={nodes.TopFourthFloor.geometry}
          material={materials.wall}
        />
        <group>
          <mesh
            geometry={nodes.ComputerTeacher1_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher1_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher2_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher2_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher3_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher3_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher4_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher4_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher5_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher5_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher6_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher6_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher11_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher11_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher7_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher7_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher8_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher8_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher9_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher9_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher10_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher10_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher12_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher12_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher13_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher13_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher16_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher16_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher15_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher15_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher14_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher14_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.WhiteboardPosgrades1_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardPosgrades1_2.geometry}
            material={materials.board}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.WhiteboardPosgrades2_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardPosgrades2_2.geometry}
            material={materials.board}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.WhiteboardPosgrades3_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardPosgrades3_2.geometry}
            material={materials.board}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.WhiteboardPosgrades4_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardPosgrades4_2.geometry}
            material={materials.board}
          />
        </group>
        <mesh
          geometry={nodes.SignPosgrades1.geometry}
          material={materials.SignPosgrades1}
        />
        <mesh
          geometry={nodes.SignPosgrades2.geometry}
          material={materials.SignPosgrades2}
        />
        <mesh
          geometry={nodes.SignPosgrades3.geometry}
          material={materials.SignPosgrades3}
        />
        <mesh
          geometry={nodes.SignPosgrades4.geometry}
          material={materials.SignPosgrades4}
        />
        <mesh
          geometry={nodes.SignPaola.geometry}
          material={materials.SignPaola}
        />
        <mesh
          geometry={nodes.SignPatricia.geometry}
          material={materials.SignPatricia}
        />
        <mesh
          geometry={nodes.SignLiliana.geometry}
          material={materials.SignLiliana}
        />
        <mesh
          geometry={nodes.SignRobinson.geometry}
          material={materials.SignRobinson}
        />
        <mesh
          geometry={nodes.SignCastillo.geometry}
          material={materials.SignCastillo}
        />
        <mesh
          geometry={nodes.SignAranda.geometry}
          material={materials.SignAranda}
        />
        <mesh
          geometry={nodes.SignRaul.geometry}
          material={materials.SignRaul}
        />
        <mesh
          geometry={nodes.SignBedoya.geometry}
          material={materials.SignBedoya}
        />
        <mesh
          geometry={nodes.SignJuan.geometry}
          material={materials.SignJuan}
        />
        <mesh
          geometry={nodes.SignOswaldo.geometry}
          material={materials.SignOswaldo}
        />
        <mesh
          geometry={nodes.SignMauricio.geometry}
          material={materials.SignMauricio}
        />
        <mesh
          geometry={nodes.SignAngel.geometry}
          material={materials.SignAngel}
        />
      </group>
    </group>
  );
};
export default EISCFourthFloor;
