import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

/**
 * Component representing the first floor of the Escuela de Ingeniería de Sistemas y Computación (EISC) building.
 * @param {Object} props - The props passed to the component.
 * @returns {JSX.Element} The JSX.Element containing the first floor model.
 */
export default function EISCFirstFloor (props) {
  const { nodes, materials } = useGLTF("/assets/models/EISCFirstFloor.glb");

  return (
    <group {...props} dispose={null}>
      <group>
        <RigidBody type="fixed" colliders="trimesh" >
          <mesh
            geometry={nodes.FirstFloor.geometry}
            material={materials.floor}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="trimesh" restitution={0}>
          <group>
            <mesh
              geometry={nodes.StructureFirstFloor_1.geometry}
              material={materials.rack}
            />
            <mesh
              geometry={nodes.StructureFirstFloor_2.geometry}
              material={materials.alu}
            />
            <mesh
              geometry={nodes.StructureFirstFloor_3.geometry}
              material={materials.glass}
            />
            <mesh
              geometry={nodes.StructureFirstFloor_4.geometry}
              material={materials.wall}
            />
            <mesh
              geometry={nodes.StructureFirstFloor_5.geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes.StructureFirstFloor_6.geometry}
              material={materials.blueGlass}
            />
          </group>
        </RigidBody>
        <RigidBody type="fixed">
          <group>
            <mesh
              geometry={nodes.ChairsA1_1.geometry}
              material={materials.grayChair}
            />
            <mesh
              geometry={nodes.ChairsA1_2.geometry}
              material={materials.blackChair}
            />
          </group>
          <mesh geometry={nodes.DesksA2.geometry} material={materials.desk} />
          <group>
            <mesh
              geometry={nodes.ChairsA2_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsA2_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskSecretaryReception.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairSecretaryReception_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairSecretaryReception_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskSecretaryEISC.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsSecreataryEISC_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsSecreataryEISC_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairSecretaryEISC_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairSecretaryEISC_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskSecretaryDirectionEISC.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsSecreataryDirectionEISC_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsSecreataryDirectionEISC_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairSecretaryDirectionEISC_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairSecretaryDirectionEISC_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskDirectionTedesoft.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairDirectionTedesoft_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairDirectionTedesoft_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsDirectionTedesoft_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsDirectionTedesoft_2.geometry}
              material={materials.blackChairBR}
            />
          </group>

          <mesh
            geometry={nodes.DeskDirectionPAIS.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairDirectionPAIS_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairDirectionPAIS_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsDirectionPAIS_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsDirectionPAIS_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskDirectionPosgrades.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairDirectionPosgrades_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairDirectionPosgrades_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsDirectionPosgrades_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsDirectionPosgrades_2.geometry}
              material={materials.blackChairBR}
            />
          </group>

          <mesh
            geometry={nodes.DeskDirectionEISC.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairDirectionEISC_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairDirectionEISC_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsDirectionEISC_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsDirectionEISC_2.geometry}
              material={materials.blackChairBR}
            />
          </group>

          <mesh
            geometry={nodes.DeskMonitors1.geometry}
            material={materials.desk}
          />
          <mesh
            geometry={nodes.DeskMonitors2.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairMonitorsL_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairMonitorsL_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairMonitorsR_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairMonitorsR_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsA3_1.geometry}
              material={materials.grayChair}
            />
            <mesh
              geometry={nodes.ChairsA3_2.geometry}
              material={materials.blackChair}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairAuditorioA4_1.geometry}
              material={materials.redChairAuditorio}
            />
            <mesh
              geometry={nodes.ChairAuditorioA4_2.geometry}
              material={materials.BlackChairAuditorio}
            />
          </group>
        </RigidBody>
        <mesh
          geometry={nodes.TopFirstFloor.geometry}
          material={materials.wall}
        />
        <group>
          <mesh
            geometry={nodes.WhiteboardA1_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardA1_2.geometry}
            material={materials.board}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.WhiteboardA2_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardA2_2.geometry}
            material={materials.board}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.WhiteboardA3_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardA3_2.geometry}
            material={materials.board}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.WhiteboardA4_1.geometry}
            material={materials.mark}
          />
          <mesh
            geometry={nodes.WhiteboardA4_2.geometry}
            material={materials.board}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerReception_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerReception_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerSecretaryEISC_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerSecretaryEISC_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerSecretaryDirectionEISC_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerSecretaryDirectionEISC_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerDirectionTedesoft_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerDirectionTedesoft_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerDirectionPAIS_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerDirectionPAIS_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerDirectionPosgrades_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerDirectionPosgrades_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerDirectionEISC_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerDirectionEISC_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerMonitor1_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerMonitor1_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerMonitor2_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerMonitor2_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <mesh
          geometry={nodes.SignEISC.geometry}
          material={materials.SignEISC}
        />
        <mesh
          geometry={nodes.SignAuditorium1.geometry}
          material={materials.SignAuditorium1}
        />
        <mesh
          geometry={nodes.SignAuditorium2.geometry}
          material={materials.SignAuditorium2}
        />
        <mesh
          geometry={nodes.SignAuditorium3.geometry}
          material={materials.SignAuditorium3}
        />
        <mesh
          geometry={nodes.SignAuditorium4.geometry}
          material={materials.SignAuditorium4}
        />
        <mesh
          geometry={nodes.SignBettyLopez.geometry}
          material={materials.SignBettyLopez}
        />
        <mesh
          geometry={nodes.SignYaneth.geometry}
          material={materials.SignYaneth}
        />
        <mesh
          geometry={nodes.SignNELCY.geometry}
          material={materials.SignNELCY}
        />
        <mesh
          geometry={nodes.SignDirectionTedesoft.geometry}
          material={materials.SignDirectionTedesoft}
        />
        <mesh
          geometry={nodes.SignDirectionPAIS.geometry}
          material={materials.SignDirectionPAIS}
        />
        <mesh
          geometry={nodes.SignDirectionPosgrades.geometry}
          material={materials.SignDirectionPosgrades}
        />
        <mesh
          geometry={nodes.SignDirectionEISC.geometry}
          material={materials.SignDirectionEISC}
        />
        <mesh
          geometry={nodes.SignExit.geometry}
          material={materials.SignExit}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/EISCFirstFloor.glb");
