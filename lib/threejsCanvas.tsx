import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import React, { useEffect } from 'react'
import * as THREE from 'three'

interface ThreeJSComponent {
  containerRef: React.MutableRefObject<HTMLDivElement>
}

export class ThreeJsCanvas {
  width: number
  height: number
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  fov: number
  nearPlane: number
  farPlane: number
  canvasId: string
  clock: THREE.Clock
  stats: Stats
  controls: OrbitControls
  ambientLight: THREE.AmbientLight
  directionalLight: THREE.DirectionalLight
  canvas: HTMLCanvasElement
  container: HTMLDivElement

  constructor({ canvas, container }: { canvas: HTMLCanvasElement; container: HTMLDivElement }) {
    this.width = 0
    this.height = 0
    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined
    this.camera = undefined
    this.renderer = undefined

    // NOTE: Camera params;
    this.fov = 45
    this.nearPlane = 1
    this.farPlane = 1000

    // NOTE: Additional components.
    this.clock = undefined
    this.stats = undefined
    this.controls = undefined

    // NOTE: Lighting is basically required.
    this.ambientLight = undefined
    this.directionalLight = undefined
    this.canvas = canvas
    this.container = container
    this.initialize()
  }

  initialize() {
    this.scene = new THREE.Scene()
    const width = this.container.clientWidth
    const height = this.container.clientHeight
    this.camera = new THREE.PerspectiveCamera(this.fov, width / height, 1, 1000)
    this.camera.position.z = 48

    // NOTE: Specify a canvas which is already created in the HTML.
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      // NOTE: Anti-aliasing smooths out the edges.
      antialias: true,
    })
    this.renderer.setSize(width, height)
    // this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement)

    this.clock = new THREE.Clock()
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    // this.stats = Stats()
    // this.container.appendChild(this.stats.dom)

    // ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.ambientLight.castShadow = true
    this.scene.add(this.ambientLight)

    // directional light - parallel sun rays
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    // this.directionalLight.castShadow = true;
    this.directionalLight.position.set(0, 32, 64)
    this.scene.add(this.directionalLight)

    // if window resizes
    // window.addEventListener('resize', () => this.onWindowResize(), false)

    // NOTE: Load space background.
    // this.loader = new THREE.TextureLoader();
    // this.scene.background = this.loader.load('./pics/space.jpeg');

    // NOTE: Declare uniforms to pass into glsl shaders.
    // this.uniforms = {
    //   u_time: { type: 'f', value: 1.0 },
    //   colorB: { type: 'vec3', value: new THREE.Color(0xfff000) },
    //   colorA: { type: 'vec3', value: new THREE.Color(0xffffff) },
    // };
  }

  animate() {
    this.controls.update()
    // this.stats.update()
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(() => this.animate())
  }

  render() {
    this.renderer.render(this.scene, this.camera)
  }

  onResize() {
    const width = this.container.clientWidth
    const height = this.container.clientHeight
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  }

  destroy() {
    this.renderer.domElement.remove()
  }
}

const ThreejsCanvas = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const threeJsCanvas = new ThreeJsCanvas({
      canvas: canvasRef.current,
      container: containerRef.current,
    })
    threeJsCanvas.animate()
    return () => {
      threeJsCanvas.destroy()
    }
  }, [])
  return (
    <div ref={containerRef}>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default ThreejsCanvas
