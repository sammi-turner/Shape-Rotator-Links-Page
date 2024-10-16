import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, OrbitControls, Text } from '@react-three/drei'

function IcosahedronWithLink() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <group>
      <Icosahedron ref={meshRef} args={[1, 0]} position={[0, 0, 0]}>
        <meshBasicMaterial color="white" wireframe />
      </Icosahedron>
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        <meshBasicMaterial color="white" />
        Your Link Text Here
      </Text>
    </group>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <IcosahedronWithLink />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App