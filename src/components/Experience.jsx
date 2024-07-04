import {ContactShadows, Environment, OrbitControls, Sky} from "@react-three/drei";
import {Avatar} from "./Avatar.jsx";
import {useControls} from "leva";

export const Experience = () => {
    // animation을 컨트롤할 수 있도록 value, options 설정
    const {animation} = useControls({
        animation: {
            value: "Typing",
            options: ["Typing", "Falling", "Standing"],
        },
    });
    return (
        <>
            <OrbitControls/>
            <Sky/>
            <Environment preset="sunset"/>
            <group position-y={-1}>
                <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
                {/*controls를 props로 내려줌*/}
                <Avatar animation={animation}/>
                {/*없으면 검은색 됨*/}
                <ambientLight intensity={1}/>
                {
                    animation === "Typing" && <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
                        <boxGeometry/>
                        <meshStandardMaterial color={'red'}/>
                    </mesh>
                }
                <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
                    <planeGeometry/>
                    <meshStandardMaterial color={'yellow'}/>
                </mesh>
            </group>
        </>
    );
};
