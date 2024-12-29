import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

// scene making
const scene = new THREE.Scene();
scene.background = new THREE.Color(0.5, 0.5, 0.5);

// camera setting
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

// lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 50, 10000);
pointLight.position.set(5, 0, 6);
scene.add(pointLight);

// // buffer Geometry
// const geometry = new THREE.BufferGeometry();
// const vertices = new Float32Array([
//   -1.0, -1.0, 1.0,
//   1.0, -1.0, 1.0,
//   1.0, 1.0, 1.0,

//   1.0, 1.0, 1.0,
//   -1.0, 1.0, 1.0,
//   -1.0, -1.0, 1.0,
// ]);

// // set the vertices with geometry
// geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
// const material = new THREE.MeshStandardMaterial({ vertexColors: true });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh)

// optimized code
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  -1.0, -1.0, 1.0, 
  1.0, -1.0, 1.0, 
  1.0, 1.0, 1.0, 
  -1.0, 1.0, 1.0,
]);

const colors= new Float32Array([
  1.0, 0.0, 0.0,
  0.0, 1.0, 0.0,
  0.0, 0.0, 1.0,
  1.0, 1.0, 1.0,
])

// define the effect of light in this perticular geometry 
const normals = new Float32Array([
  1.0, 1.0, 1.0,
  1.0, 1.0, 1.0,
  1.0, 1.0, 1.0,
  1.0, 1.0, 1.0,
  
])

const indeces = [0, 1, 2, 2, 3, 0];
// set the vertices with geometry
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
geometry.setAttribute('normals', new THREE.BufferAttribute(normals, 3))
geometry.setIndex(indeces)

const material = new THREE.MeshStandardMaterial({ vertexColors: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)


// cube making
const lightGeometry = new THREE.SphereGeometry(1, 32, 16);
// now color the cube material
const lightMaterial = new THREE.MeshBasicMaterial({ color: "white" });

// now takes  geometry, and applies  material to it
const lightSphere = new THREE.Mesh(lightGeometry, lightMaterial);
lightSphere.position.set(5, 0, 6);
scene.add(lightSphere);

// set renderer to render our scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("app").appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

let q = 0;
animate();
function animate() {
  controls.update();
    q+=0.01;
    let qSin = Math.sin(q);
    let qCos = Math.cos(q);

      // cube.position.x = 3*qSin

  // let scaleCos = 30 * qCos
  //     pointLight.position.set(scaleCos, 0 , 2 * qSin);
  //     lightSphere.position.set(scaleCos, 0 , 2 * qSin);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      // cube.rotation.z += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
