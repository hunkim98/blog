// import glsl
import fragmentShader from './shaders/parametricSurface/fragment3.glsl'
import vertexShader from './shaders/parametricSurface/vertex3.glsl'
import { ThreeJsCanvas } from 'lib/threejsCanvas'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ParametricSurface3Props {}

const planeWidth = 100
const planeHeight = 100

const ParametricSurface3: React.FC<ParametricSurface3Props> = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  const threeRef = useRef<ThreeJsCanvas>()

  useEffect(() => {
    //resize
    const onResize = () => {
      threeRef.current?.onResize()
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

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
    const width = planeWidth
    const height = planeHeight
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
    threeRef.current = threeJsCanvas

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

export default ParametricSurface3
