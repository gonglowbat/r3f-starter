import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Leva collapsed={false} />
        <Canvas
            camera={{
                fov: 75,
                near: 0.1,
                far: 100,
                position: [-2, 2, 2]
            }}
        >
            <App />
        </Canvas>
    </>
)
