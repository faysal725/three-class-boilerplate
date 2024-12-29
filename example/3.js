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
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
// const geometry = new THREE.CircleGeometry(2, 400);
// const geometry = new THREE.ConeGeometry(2, 2, 500);
const geometry = new THREE.CylinderGeometry(2, 1, 2 , 100);
// now color the cube material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// now takes  geometry, and applies  material to it
const cube = new THREE.Line(geometry, material);



// insert the cube to the scene
scene.add(cube);

// set renderer to render our scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// now loop the renderer to animate
// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   cube2.rotation.x -= 0.01;
//   cube2.rotation.y -= 0.01;


//   renderer.render(scene, camera);
// }
// animate();


let q = 0;
animate()
function animate() {
    cube.position.x = 3*Math.sin(q+=0.01);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // cube.rotation.z += 0.01;
  
  
  
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
