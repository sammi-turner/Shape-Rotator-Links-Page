// RotatingShape.jsx
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

function RotatingShape({ ShapeComponent, args, linkText }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <group>
      <ShapeComponent ref={meshRef} args={args}>
        <meshBasicMaterial color="white" wireframe />
      </ShapeComponent>
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {linkText}
      </Text>
    </group>
  )
}

export default RotatingShape