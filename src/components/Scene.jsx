import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

const Scene = () => {
    const boxRef = useRef()

    const boxControls = useControls({ scale: 1 })

    useFrame((state, delta) => {
        boxRef.current.rotation.x += delta
        boxRef.current.rotation.z += delta
    })

    return (
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault />

            <mesh ref={boxRef} scale={boxControls.scale}>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    )
}

export default Scene
