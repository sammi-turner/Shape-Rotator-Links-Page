// WireframeDodecahedron.jsx
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

function WireframeDodecahedron({ size = 1, linkText }) {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.2
      groupRef.current.rotation.y += delta * 0.3
    }
  })

  const dodecahedronGeometry = new THREE.DodecahedronGeometry(size)
  const edges = new THREE.EdgesGeometry(dodecahedronGeometry)

  return (
    <group>
      <group ref={groupRef}>
        <lineSegments geometry={edges}>
          <lineBasicMaterial color="white" />
        </lineSegments>
      </group>
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

export default WireframeDodecahedron