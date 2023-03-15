// Scene Object Camera Renderer

// Scene
const scene = new THREE.Scene()

//Mesh - Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'purple' })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

//Camera
const { width, height } = {
  width: window.innerWidth,
  height: window.innerHeight,
}

console.log(width, height)
// Campo de visão, aspecto, próximo, distante
const camera = new THREE.PerspectiveCamera(75, width / height)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
scene.add(camera)

// Renderer
const canvas = document.querySelector('.draw')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(width, height)
renderer.render(scene, camera)
