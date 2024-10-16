// App.jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Octahedron, Icosahedron } from '@react-three/drei'
import RotatingShape from './RotatingShape'
import WireframeCube from './WireframeCube'
import WireframeDodecahedron from './WireframeDodecahedron'

function App() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: 'black',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '10px',
      padding: '10px',
    }}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <WireframeCube size={1.5} linkText="Cube Link" url="https://en.wikipedia.org/wiki/Cube" />
          <OrbitControls />
        </Canvas>
      </div>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingShape ShapeComponent={Octahedron} args={[1]} linkText="Octahedron Link" url="https://en.wikipedia.org/wiki/Octahedron" />
          <OrbitControls />
        </Canvas>
      </div>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <WireframeDodecahedron size={1} linkText="Dodecahedron Link" url="https://en.wikipedia.org/wiki/Dodecahedron" />
          <OrbitControls />
        </Canvas>
      </div>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingShape ShapeComponent={Icosahedron} args={[1, 0]} linkText="Icosahedron Link" url="https://en.wikipedia.org/wiki/Icosahedron" />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  )
}

export default App