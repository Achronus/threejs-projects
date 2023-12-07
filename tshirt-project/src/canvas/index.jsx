import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import { Backdrop, CameraRig, Shirt } from './components';

const CanvasModel = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
        <CameraRig>
          {/* <Backdrop /> */}
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </>
  )
}

export default CanvasModel;
