// RotatingShape.jsx
import React, { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

function RotatingShape({ ShapeComponent, args, linkText, url }) {
  const meshRef = useRef()
  const textRef = useRef()
  const [hovered, setHovered] = useState(false)
  const { camera, raycaster, mouse } = useThree()

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
        ref={textRef}
        position={[0, -1.5, 0]}
        fontSize={0.2}
        color={hovered ? "yellow" : "white"}
        anchorX="center"
        anchorY="middle"
      >
        {linkText}
      </Text>
    </group>
  )
}

export default RotatingShape