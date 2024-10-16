import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Octahedron, Icosahedron } from '@react-three/drei'
import RotatingShape from './RotatingShape'
import WireframeCube from './WireframeCube'
import WireframeDodecahedron from './WireframeDodecahedron'

function ShapeCanvas({ children }) {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {children}
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      overflow: 'auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gridAutoRows: '1fr',
        gap: '20px',
        padding: '20px',
        height: '100%',
      }}>
        <div style={{ aspectRatio: '1 / 1' }}>
          <ShapeCanvas>
            <WireframeCube size={1.5} linkText="LINKEDIN" url="https://www.linkedin.com/in/sammi-turner" />
          </ShapeCanvas>
        </div>
        <div style={{ aspectRatio: '1 / 1' }}>
          <ShapeCanvas>
            <RotatingShape ShapeComponent={Octahedron} args={[1]} linkText="DISCORD" url="https://discord.com/users/sammiturner" />
          </ShapeCanvas>
        </div>
        <div style={{ aspectRatio: '1 / 1' }}>
          <ShapeCanvas>
            <WireframeDodecahedron size={1} linkText="CODEWARS" url="https://www.codewars.com/users/sammi-turner" />
          </ShapeCanvas>
        </div>
        <div style={{ aspectRatio: '1 / 1' }}>
          <ShapeCanvas>
            <RotatingShape ShapeComponent={Icosahedron} args={[1, 0]} linkText="GITHUB" url="https://github.com/sammi-turner" />
          </ShapeCanvas>
        </div>
      </div>
    </div>
  )
}

export default App