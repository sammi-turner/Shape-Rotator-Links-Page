import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Octahedron, Icosahedron } from '@react-three/drei'
import RotatingShape from './RotatingShape'
import WireframeCube from './WireframeCube'
import WireframeDodecahedron from './WireframeDodecahedron'
import '../styles/App.css'

const ShapeCanvas = ({ children }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {children}
      <OrbitControls 
        enableRotate={false} 
        enableZoom={false} 
        enablePan={false}
      />
    </Canvas>
  )
}

function App() {
  return (
    <div className="app-container">
      <div className="grid-container">
        <div className="grid-item">
          <ShapeCanvas>
            <WireframeCube size={1.5} linkText="LINKEDIN" url="https://www.linkedin.com/in/sammi-turner" />
          </ShapeCanvas>
        </div>
        <div className="grid-item">
          <ShapeCanvas>
            <RotatingShape ShapeComponent={Octahedron} args={[1]} linkText="DISCORD" url="https://discord.com/users/sammiturner" />
          </ShapeCanvas>
        </div>
        <div className="grid-item">
          <ShapeCanvas>
            <WireframeDodecahedron size={1} linkText="CODEWARS" url="https://www.codewars.com/users/sammi-turner" />
          </ShapeCanvas>
        </div>
        <div className="grid-item">
          <ShapeCanvas>
            <RotatingShape ShapeComponent={Icosahedron} args={[1, 0]} linkText="GITHUB" url="https://github.com/sammi-turner" />
          </ShapeCanvas>
        </div>
      </div>
    </div>
  )
}

export default App
