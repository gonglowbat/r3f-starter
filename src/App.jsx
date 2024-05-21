import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import Scene from './Scene'


export default function App() {
    return (
        <>
            <Leva collapsed={false} />

            <Canvas
                camera={{
                    fov: 75,
                    near: 0.1,
                    far: 100,
                    position: [-2, 2, 2],
                }}
            >
                <Scene />
            </Canvas>
        </>
    )
}
