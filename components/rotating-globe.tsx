"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import * as THREE from "three"

// African continent outline coordinates (simplified)
const AFRICA_COORDINATES = [
  [8.8, 4.6], // West Africa
  [11.3, 13.1], // Central Africa
  [23.4, 13.4], // Northeast Africa
  [30.5, 31.2], // Egypt
  [40.5, 15.0], // Horn of Africa
  [41.9, 3.8], // East Africa
  [39.2, -6.8], // Tanzania
  [35.5, -15.5], // Mozambique
  [25.0, -25.7], // South Africa
  [18.4, -33.9], // Cape of Good Hope
  [14.5, -22.0], // Namibia
  [11.8, -15.0], // Angola
  [8.8, 4.6], // Back to start
]

function latLongToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)

  const x = -radius * Math.sin(phi) * Math.cos(theta)
  const y = radius * Math.cos(phi)
  const z = radius * Math.sin(phi) * Math.sin(theta)

  return new THREE.Vector3(x, y, z)
}

function AfricaContinent({ size = 2.05 }) {
  const points = useMemo(() => {
    return AFRICA_COORDINATES.map(([lon, lat]) => latLongToVector3(lat, lon, size))
  }, [size])

  const lineRef = useRef()

  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#4ADE80" linewidth={2} />
    </line>
  )
}

function AfricaShape({ size = 2.05 }) {
  const points = useMemo(() => {
    return AFRICA_COORDINATES.map(([lon, lat]) => latLongToVector3(lat, lon, size))
  }, [size])

  const shape = useMemo(() => {
    const shape = new THREE.Shape()

    // Convert 3D points to 2D for the shape
    // This is a simplified approach - we're projecting to a plane
    // which works because Africa is mostly on one side of the globe
    const firstPoint = points[0]
    shape.moveTo(firstPoint.x, firstPoint.y)

    for (let i = 1; i < points.length; i++) {
      shape.lineTo(points[i].x, points[i].y)
    }

    return shape
  }, [points])

  const meshRef = useRef()

  return (
    <group>
      {/* Outline of Africa */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#4ADE80" linewidth={3} />
      </line>

      {/* Points at each vertex for better visibility */}
      {points.map((point, i) => (
        <mesh key={i} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial color="#4ADE80" />
        </mesh>
      ))}
    </group>
  )
}

function Globe({ size = 2 }) {
  const meshRef = useRef()
  const [isRotating, setIsRotating] = useState(true)

  useFrame(() => {
    if (meshRef.current && isRotating) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <group onPointerEnter={() => setIsRotating(false)} onPointerLeave={() => setIsRotating(true)}>
      <Sphere ref={meshRef} args={[size, 64, 64]}>
        <meshStandardMaterial
          color="#2D9D5A"
          emissive="#1A5D36"
          emissiveIntensity={0.2}
          roughness={0.8}
          metalness={0.2}
          wireframe={true}
        />
      </Sphere>

      {/* Add Africa to the globe */}
      <group rotation={meshRef.current?.rotation || [0, 0, 0]}>
        <AfricaShape size={size + 0.05} />
      </group>
    </group>
  )
}

function CameraController() {
  const { camera } = useThree()
  const controlsRef = useRef()

  useEffect(() => {
    camera.position.z = 5
  }, [camera])

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={true}
      enablePan={false}
      enableRotate={true}
      minDistance={3}
      maxDistance={8}
      dampingFactor={0.05}
      rotateSpeed={0.5}
      enableDamping={true}
    />
  )
}

export default function RotatingGlobe({ className }) {
  return (
    <div className={`relative ${className || ""}`}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <CameraController />
        <Globe />
      </Canvas>
      <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-green-800 bg-white/50 py-1 rounded-md mx-auto w-fit px-3 pointer-events-none">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  )
}
