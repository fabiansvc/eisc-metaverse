import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

/**
 * Component representing the fifth floor of the Escuela de Ingeniería de Sistemas y Computación (EISC) building.
 * @param {Object} props - The props passed to the component.
 * @returns {JSX.Element} The JSX.Element containing the fifth floor model.
 */
export default function EISCFifthFloor (props) {
  const { nodes, materials } = useGLTF("/assets/models/EISCFifthFloor.glb");

  return (
    <group {...props} dispose={null}>
      <group>
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            geometry={nodes.FifthFloor.geometry}
            material={materials.floor}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="trimesh" restitution={0}>
          <group>
            <mesh
              geometry={nodes.StructureFifthFloor_1.geometry}
              material={materials.alu}
            />
            <mesh
              geometry={nodes.StructureFifthFloor_2.geometry}
              material={materials.glass}
            />
            <mesh
              geometry={nodes.StructureFifthFloor_3.geometry}
              material={materials.wall}
            />
            <mesh
              geometry={nodes.StructureFifthFloor_4.geometry}
              material={materials.rack}
            />
            <mesh
              geometry={nodes.StructureFifthFloor_5.geometry}
              material={materials.brown}
            />
          </group>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            geometry={nodes.DeskTeacher17.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher17_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher17_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher17_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher17_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher18.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher18_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher18_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher18_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher18_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher19.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher19_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher19_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher19_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher19_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher20.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher20_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher20_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher20_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher20_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher21.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher21_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher21_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher21_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher21_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher22.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher22_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher22_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher22_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher22_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher23.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher23_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher23_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher23_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher23_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher24.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher24_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher24_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher24_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher24_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher25.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher25_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher25_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher25_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher25_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher26.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher26_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher26_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher26_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher26_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher27_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher27_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher27_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher27_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher27.geometry}
            material={materials.desk}
          />
          <mesh
            geometry={nodes.DeskTeacher28.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher28_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher28_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher28_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher28_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher29.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher29_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher29_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher29_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher29_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher30.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher30_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher30_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher30_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher30_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher31.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher31_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher31_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher31_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher31_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher32.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher32_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher32_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher32_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher32_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher33.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher33_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher33_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher33_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher33_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher34.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher34_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher34_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher34_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher34_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher35.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher35_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher35_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher35_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher35_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher36.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher36_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher36_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher36_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher36_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher37.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher37_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher37_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher37_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher37_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher38.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher38_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher38_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher38_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher38_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher39.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairTeacher39_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher39_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairsTeacher39_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher39_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <mesh
            geometry={nodes.DeskTeacher40.geometry}
            material={materials.desk}
          />
          <group>
            <mesh
              geometry={nodes.ChairsTeacher40_1.geometry}
              material={materials.redChairBR}
            />
            <mesh
              geometry={nodes.ChairsTeacher40_2.geometry}
              material={materials.blackChairBR}
            />
          </group>
          <group>
            <mesh
              geometry={nodes.ChairTeacher40_1.geometry}
              material={materials.MaterialChairBlack}
            />
            <mesh
              geometry={nodes.ChairTeacher40_2.geometry}
              material={materials.MaterialChairRed}
            />
          </group>
        </RigidBody>
        <group>
          <mesh
            geometry={nodes.TopFifthFloor_1.geometry}
            material={materials.wall}
          />
          <mesh
            geometry={nodes.TopFifthFloor_2.geometry}
            material={materials.rack}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher17_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher17_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher18_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher18_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher19_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher19_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher20_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher20_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher21_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher21_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher22_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher22_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher23_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher23_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher24_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher24_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher25_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher25_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher26_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher26_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher27_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher27_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher28_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher28_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher29_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher29_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher30_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher30_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher31_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher31_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher32_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher32_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher33_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher33_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher34_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher34_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher35_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher35_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher36_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher36_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher37_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher37_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher38_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher38_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher39_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher39_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.ComputerTeacher40_1.geometry}
            material={materials.metalBlackComputer}
          />
          <mesh
            geometry={nodes.ComputerTeacher40_2.geometry}
            material={materials.windowComputer}
          />
        </group>
        <mesh
          geometry={nodes.SignMauricioGaona.geometry}
          material={materials.SignMauricioGaona}
        />
        <mesh
          geometry={nodes.SignBeatrizFlorian.geometry}
          material={materials.SignBeatrizFlorian}
        />
        <mesh
          geometry={nodes.SignVictorBucheli.geometry}
          material={materials.SignVictorBucheli}
        />
        <mesh
          geometry={nodes.SignLaura.geometry}
          material={materials.SignLaura}
        />
        <mesh
          geometry={nodes.SignMorales.geometry}
          material={materials.SignMorales}
        />
        <mesh
          geometry={nodes.SignCasas.geometry}
          material={materials.SignCasas}
        />
        <mesh
          geometry={nodes.SignSanabria.geometry}
          material={materials.SignSanabria}
        />
        <mesh
          geometry={nodes.SignPedroMoreno.geometry}
          material={materials.SignPedroMoreno}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/EISCFifthFloor.glb");
