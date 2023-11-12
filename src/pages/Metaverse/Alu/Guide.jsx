import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function Guide({setIsTutorialFinished, ...props}) {
    const { nodes, materials } = useGLTF("./assets/models/Guide.glb");
    const [currentGretting, setCurrentGretting] = useState(0);
    const [currentGuide, setCurrentGuide] = useState(0);
    const [currentEnd, setCurrentEnd] = useState(0);

    const [grettings] = useState(() => {
        return [
            `¡Hola!, soy Alu`,
            `Bienvenido al Metaverso de la\nEscuela de Ingeniería de\nSistemas y Computación`,
            `Mi propósito es enseñarle\ncómo navegar en el metaverso`,
            `¡Vamos a empezar!`
        ];
    });

    const [guide] = useState(() => {
        return [
            `Para ver su alrededor\n manten presionado\nel "clic izquierdo"\n del mouse y muévalo`,
            `Para ir hacia adelante\npresione la tecla "W"\no la flecha "arriba"`,
            `Para ir hacia atrás\npresione la tecla "S"\n o la flecha "abajo"`,
            `Para ir hacia la izquierda\npresione la tecla "A"\n o la flecha "izquierda"`,
            `Para ir hacia la derecha\npresione la tecla "D"\n o la flecha "derecha"`,
            `Para navegar en el metaverso\npresiona en simultaneo\nalguna tecla y el mouse`,
        ]
    });

    const [end] = useState(() => {
        return [
            `¡Felicidades!, ya sabes\ncomo navegar en el metaverso`,
            `Recuerda que puedes volver\na ver este tutorial\nvistandome de nuevo en este lugar`,
            `¡Nos vemos!`
        ]
    });

    useEffect(() => {
        let timeoutId;
    
        if (currentGretting < grettings.length) {
            timeoutId = setTimeout(() => {
                setCurrentGretting(currentGretting + 1);
            }, 4000);
        } else if (currentGuide === guide.length && currentEnd < end.length) {
            timeoutId = setTimeout(() => {
                setCurrentEnd(currentEnd + 1);
            }, 4000);
        }
        console.log(currentGuide, guide.length);
    
        return () => clearTimeout(timeoutId);
    }, [currentGretting, currentGuide, currentEnd, grettings.length, guide.length, end.length]);

    const text = () => {
        if (currentGretting < grettings.length ) {
            return grettings[currentGretting];
        } else if (currentGuide < guide.length) {
            return guide[currentGuide];
        } else if (currentEnd < end.length) {
            return end[currentEnd];
        } else{
            setIsTutorialFinished(true);
            return "";
        }
    };

    return (
        <group {...props} dispose={null}>
            <group>
                <group>
                    <mesh
                        geometry={nodes.Guide_1.geometry}
                        material={materials.boardGray}
                    />
                    <mesh geometry={nodes.Guide_2.geometry} material={materials.board} />
                </group>
                {
                    currentGuide > 0 && currentGuide < guide.length ?
                        <group onClick={() => setCurrentGuide(currentGuide - 1)}>
                            <mesh
                                geometry={nodes.ButtonBack_1.geometry}
                                material={materials.buttonRed}
                            />
                            <mesh
                                geometry={nodes.ButtonBack_2.geometry}
                                material={materials.iconButton}
                            />
                        </group>
                        : null
                }
                {
                    currentGretting === grettings.length && currentGuide < guide.length ?
                        <group onClick={() => setCurrentGuide(currentGuide + 1)}>
                            <mesh
                                geometry={nodes.ButtonNext_1.geometry}
                                material={materials.iconButton}
                            />
                            <mesh
                                geometry={nodes.ButtonNext_2.geometry}
                                material={materials.buttonRed}
                            />
                        </group>
                        : null
                }

            </group>
            <Text
                fontSize={0.1}
                color="black"
                position={[0, 0, 0.05]}
                textAlign="center"
            >
                {text()}

            </Text>
        </group>
    )
}

useGLTF.preload("./assets/models/Guide.glb");