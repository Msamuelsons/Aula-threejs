// Scene Mesh Camera Renderer

// scene
const scene = new THREE.Scene()

//Mesh
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 'purple' })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// Camera
const { width, height } = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const camera = new THREE.PerspectiveCamera(75, width / height)
camera.position.z = 3

// Renderer
const canvas = document.querySelector('.draw')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(width, height)

// clock
// Começa do 0
const clock = new THREE.Clock() // Padroniza o tempo de FPS para todos os dispositivos

function animate() {
  const elapsedTime = clock.getElapsedTime()
  mesh.rotation.y = elapsedTime * Math.PI

  renderer.render(scene, camera)
  window.requestAnimationFrame(animate)
}
animate()
