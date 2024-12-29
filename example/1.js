import * as THREE from "three";

// scene making
const scene = new THREE.Scene();

// camera setting
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 7;

// cube making
const geometry = new THREE.BoxGeometry(1, 1, 1);
// now color the cube material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// now takes  geometry, and applies  material to it
const cube = new THREE.Mesh(geometry, material);



// cube making
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
// now color the cube material
const material2 = new THREE.MeshBasicMaterial({ color: 0x00fff2 });

// now takes  geometry, and applies  material to it
const cube2 = new THREE.Mesh(geometry2, material2);


// insert the cube to the scene
scene.add(cube);
scene.add(cube2)

// set renderer to render our scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// now loop the renderer to animate
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cube2.rotation.x -= 0.01;
  cube2.rotation.y -= 0.01;

  renderer.render(scene, camera);
}
animate();
