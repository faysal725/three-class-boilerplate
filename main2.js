import * as THREE from "three";
import { FirstPersonControls, FlyControls, OrbitControls, TransformControls } from "three/examples/jsm/Addons.js";


// scene making
const scene = new THREE.Scene();

// camera setting
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;




// set renderer to render our scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



// light 
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(0 , 5, 5)
scene.add(pointLight);


// cube making
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial();
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);
scene.add(mesh)





// add orbit control 
const controls = new OrbitControls(camera, renderer.domElement);

// first person control 
const gridHelper = new THREE.GridHelper(100, 10)
scene.add(gridHelper)
const clock = new THREE.Clock();

// FirstPersonControls
// const controls = new FirstPersonControls(camera, renderer.domElement)
// controls.movementSpeed   = 150;
// controls.lookSpeed = 0.1

// FlyControls
// const controls = new FlyControls(camera, renderer.domElement)
// controls.movementSpeed = 1000;
// controls.rollSpeed = Math.PI / 24;

// transform control 
const transformControl = new TransformControls(camera, renderer.domElement);
transformControl.addEventListener('change', animate);
transformControl.addEventListener('dragging-changed', function(event) {
  controls.enabled = !event.value
})
transformControl.attach(mesh)
scene.add(transformControl)


animate();
// now loop the renderer to animate
function animate() {

  controls.update(clock.getDelta())
  requestAnimationFrame(animate);


  renderer.render(scene, camera);
}
