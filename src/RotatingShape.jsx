import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const RotatingShape = ({ ShapeComponent, args, linkText, url }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'default'
  }, [hovered])

  const handleClick = () => {
    window.open(url, '_blank')
  }

  return (
    <group>
      <ShapeComponent 
        ref={meshRef} 
        args={args}
        onClick={handleClick}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshBasicMaterial color={hovered ? "yellow" : "white"} wireframe />
      </ShapeComponent>
      <Text
        position={[0, -2.1, 0]}
        fontSize={0.4}
        color={hovered ? "yellow" : "white"}
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        textAlign="center"
      >
        {linkText}
      </Text>
    </group>
  )
}

export default RotatingShape