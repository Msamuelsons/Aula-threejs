// Scene Object Camera Renderer

// Scene
const scene = new THREE.Scene()

// Group
const group = new THREE.Group()

//Mesh - Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'purple' })
const mesh = new THREE.Mesh(geometry, material)

mesh.position.z = 1
mesh.rotation.y = (Math.PI * 2) / 1.2

// MathTwo
const geometryT = new THREE.BoxGeometry(1, 1, 1)
const materialT = new THREE.MeshBasicMaterial({ color: 'red' })
const meshT = new THREE.Mesh(geometryT, materialT)

meshT.position.y = 2
meshT.rotation.x = Math.PI * 1.3

group.add(mesh, meshT)
group.position.x = 3
scene.add(group)

// Axes Helper
const axesHelper = new THREE.AxesHelper(4)
scene.add(axesHelper)

//Camera
const { width, height } = {
  width: window.innerWidth,
  height: window.innerHeight,
}

console.log(`width: ${width}px and height: ${height}px`)
// Campo de visão, aspecto, próximo, distante
const camera = new THREE.PerspectiveCamera(75, width / height)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 5

scene.add(camera)

// Renderer
const canvas = document.querySelector('.draw')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(width, height)
renderer.render(scene, camera)
