// import glsl
import fragmentShader from './shaders/test3d_fragment.glsl'
import vertexShader from './shaders/test3d_vertex.glsl'
import { ThreeJsCanvas } from 'lib/threejsCanvas'
import React, { useEffect, useRef } from 'react'
import SceneInit from 'lib/threeJsInit'
import * as THREE from 'three'

interface Test3DProps {}

const Test3D: React.FC<Test3DProps> = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const uniformData = {
      u_time: {
        type: 'f',
        value: 0,
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

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16, 16, 16, 16)
    const boxMaterial = new THREE.ShaderMaterial({
      wireframe: true,
      vertexShader: vertexShader,
      uniforms: uniformData,
      fragmentShader: fragmentShader,
    })
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
    threeJsCanvas.scene.add(boxMesh)

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

export default Test3D
