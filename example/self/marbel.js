import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

// scene making
const scene = new THREE.Scene();
scene.background = new THREE.Color(0.5, 0.5, 0.5)


// camera setting
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 15;


// lights 
const ambientLight = new THREE.AmbientLight(0xffffff, 0.05)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 50, 10000)
pointLight.position.set(6, 0, 5)
scene.add(pointLight)



// cube making
const geometry = new THREE.SphereGeometry(5, 32, 32);
const texture1 = new THREE.TextureLoader().load('/self/marbel.jpg')
const texture2 = new THREE.TextureLoader().load('/self/blw.jpg')

// now color the cube material
const material = new THREE.MeshStandardMaterial({ 
  color:'white',
  map:texture1,
  bumpMap: texture2,
  displacementMap: texture2,
  displacementScale:0.3,
  roughness: 0.6,
  metalness: 0.5
 });

// now takes  geometry, and applies  material to it
const cube = new THREE.Mesh(geometry, material);

// insert the cube to the scene
scene.add(cube);


// light source making
const lightGeometry = new THREE.SphereGeometry(1, 32, 16);
// now color the cube material
const lightMaterial = new THREE.MeshBasicMaterial({ color: 'white' });

// now takes  geometry, and applies  material to it
const lightSphere = new THREE.Mesh(lightGeometry, lightMaterial);
lightSphere.position.set(6, 0, 5)
scene.add(lightSphere)


// set renderer to render our scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app').appendChild(renderer.domElement);




const controls = new OrbitControls(camera, renderer.domElement)

let q = 0;
animate()
function animate() {
  controls.update()
//   q+=0.01;
//   let qSin = Math.sin(q);
//   let qCos = Math.cos(q);


//     cube.position.x = 3*qSin
    
// let scaleCos = 30 * qCos
//     pointLight.position.set(scaleCos, 0 , 20 * qSin);
//     lightSphere.position.set(scaleCos, 0 , 20 * qSin);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     cube.rotation.z += 0.01;
  
  
  
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
