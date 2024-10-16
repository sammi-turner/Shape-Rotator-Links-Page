// WireframeDodecahedron.jsx
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

function WireframeDodecahedron({ size = 1, linkText, url }) {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.2
      groupRef.current.rotation.y += delta * 0.3
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

  const dodecahedronGeometry = new THREE.DodecahedronGeometry(size)
  const edges = new THREE.EdgesGeometry(dodecahedronGeometry)

  return (
    <group>
      <group 
        ref={groupRef}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <lineSegments geometry={edges}>
          <lineBasicMaterial color={hovered ? "yellow" : "white"} />
        </lineSegments>
      </group>
      <Text
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

export default WireframeDodecahedron