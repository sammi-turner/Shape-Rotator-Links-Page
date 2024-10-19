import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

const WireframeCube = ({ size = 1, linkText, url }) => {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.2
      groupRef.current.rotation.y += delta * 0.3
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
      <group 
        ref={groupRef}
        onClick={handleClick}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(size, size, size)]} />
          <lineBasicMaterial color={hovered ? "yellow" : "white"} />
        </lineSegments>
      </group>
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

export default WireframeCube