// import glsl
import fragmentShader from './shaders/parametricSurface/fragment1.glsl'
import vertexShader from './shaders/parametricSurface/vertex1.glsl'
import { ThreeJsCanvas } from 'lib/threejsCanvas'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ParametricSurface1Props {}

const planeWidth = 16
const planeHeight = 16

const ParametricSurface1: React.FC<ParametricSurface1Props> = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const uniformData = {
      u_time: {
        type: 'f',
        value: 0,
      },
      planeWidth: {
        type: 'f',
        value: planeWidth,
      },
      planeHeight: {
        type: 'f',
        value: planeHeight,
      },
    }

    const threeJsCanvas = new ThreeJsCanvas({
      canvas: canvasRef.current,
      container: containerRef.current,
      addRenderCallback: (time) => {
        uniformData.u_time.value = time
      },
    })
    threeJsCanvas.animate()

    // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    // // part 1 - boilerplate code
    // const boxGeometry = new THREE.BoxGeometry(16, 16, 16, 16, 16, 16);
    // const boxMaterial = new THREE.MeshStandardMaterial({
    //   color: 0xff0000,
    //   wireframe: true,
    // });
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    // part 2 - re-write boilerplate code with a shadermaterial
    const width = 16
    const height = 16
    const depth = 50
    const planeGeometry = new THREE.PlaneGeometry(width, height, depth, depth)
    const planeMaterial = new THREE.ShaderMaterial({
      wireframe: true,
      vertexShader: vertexShader,
      uniforms: uniformData,
      fragmentShader: fragmentShader,
    })
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
    threeJsCanvas.scene.add(planeMesh)

    return () => {
      // remove the canvas
      // test.renderer.domElement.remove()

      threeJsCanvas.destroy()
    }
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: 500,
      }}
      ref={containerRef}
    >
      <canvas ref={canvasRef} />
    </div>
  )
}

export default ParametricSurface1
