import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../../store";


const CameraRig = ({ children }) => {
  const snap = useSnapshot(state);
  const group = useRef();

  useFrame((state, delta) => {
    // Add responsiveness
    const isLaptop = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // Set initial position of shirt
    let targetPosition = [-0.4, 0, 2];

    // If on homepage
    if (snap.intro) {
      if (isLaptop) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      // On customizer page
      isMobile ? targetPosition = [0, 0, 2.5] : targetPosition = [0, 0, 2];
    }

    // Set camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // Set shirt rotation
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  
  return (
    <group ref={group}>
      { children }
    </group>
  )
}

export default CameraRig;