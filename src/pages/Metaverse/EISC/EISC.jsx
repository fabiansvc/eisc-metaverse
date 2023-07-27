import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const EISC = (props) => {
    const { nodes, materials } = useGLTF("/models/EISCModel.glb");

    return (
        <group {...props} dispose={null}>
            <group>
                <RigidBody colliders="trimesh" type='fixed'>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FirstFloor_1.geometry}
                        material={materials.wall}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FirstFloor_2.geometry}
                        material={materials.rack}
                    />
                </RigidBody>
            </group>
            <group>
                <RigidBody colliders="cuboid" type='fixed'>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0.geometry}
                        material={materials.chairGray}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0_1.geometry}
                        material={materials.chairRed}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0001.geometry}
                        material={materials.chairGray}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0001_1.geometry}
                        material={materials.chairRed}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0002.geometry}
                        material={materials.chairGray}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0002_1.geometry}
                        material={materials.chairRed}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0003.geometry}
                        material={materials.chairGray}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0003_1.geometry}
                        material={materials.chairRed}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0005.geometry}
                        material={materials.chairGray}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0005_1.geometry}
                        material={materials.chairRed}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0006.geometry}
                        material={materials.chairGray}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0006_1.geometry}
                        material={materials.chairRed}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0007.geometry}
                        material={materials.chairGray}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0007_1.geometry}
                        material={materials.chairRed}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0008.geometry}
                        material={materials.chairGray}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0008_1.geometry}
                        material={materials.chairRed}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0009.geometry}
                        material={materials.chairGray}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0009_1.geometry}
                        material={materials.chairRed}
                    />
                </RigidBody>
            </group>
        </group>
    );
}
export default EISC;

useGLTF.preload("/models/EISCModel.glb");
