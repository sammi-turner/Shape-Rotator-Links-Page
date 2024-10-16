import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

function RotatingShape({ ShapeComponent, args, linkText, url }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  const handleClick = (event) => {
    event.stopPropagation()
    window.open(url, '_blank')
  }

  const handlePointerOver = (event) => {
    event.stopPropagation()
    setHovered(true)
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = (event) => {
    event.stopPropagation()
    setHovered(false)
    document.body.style.cursor = 'default'
  }

  return (
    <group>
      <ShapeComponent 
        ref={meshRef} 
        args={args}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <meshBasicMaterial color={hovered ? "yellow" : "white"} wireframe />
      </ShapeComponent>
      <Text
        position={[0, -2.1, 0]}
        fontSize={0.4}  // Increased font size
        color={hovered ? "yellow" : "white"}
        anchorX="center"
        anchorY="middle"
        maxWidth={2}  // Added max width to prevent text from extending too far
        textAlign="center"  // Center align text if it wraps
      >
        {linkText}
      </Text>
    </group>
  )
}

export default RotatingShape