import { OrbitControls } from "@react-three/drei";
import {Avatar} from "./Avatar.jsx";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
        <group position-y={-1}>
        <Avatar/>
        </group>
        {/*없으면 검은색 됨*/}
        <ambientLight intensity={1}/>
    </>
  );
};
