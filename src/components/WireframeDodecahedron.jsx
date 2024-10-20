import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

const WireframeDodecahedron = ({ size = 1, linkText, url }) => {
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

  const dodecahedronGeometry = new THREE.DodecahedronGeometry(size)
  const edges = new THREE.EdgesGeometry(dodecahedronGeometry)

  return (
    <group>
      <group 
        ref={groupRef}
        onClick={handleClick}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <lineSegments geometry={edges}>
          <lineBasicMaterial color={hovered ? "yellow" : "#39ff14"} />
        </lineSegments>
      </group>
      <Text
        position={[0, -2.1, 0]}
        fontSize={0.4}
        color={hovered ? "yellow" : "#39ff14"}
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

export default WireframeDodecahedron