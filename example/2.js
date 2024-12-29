// page 40 
import * as THREE from "three";

// scene making
var scene = new THREE.Scene();


// camera setting
var camera = new THREE.PerspectiveCamera(45
    , window.innerWidth / window.innerHeight
    , 0.1, 1000);


var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

var axes = new THREE.AxesHelper( 20 );
scene.add(axes);

// plane material 
var planeGeometry = new THREE.PlaneGeometry(60,20);
var planeMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00});
var plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.receiveShadow = true;
plane.rotation.x = -0.5*Math.PI;
plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;
scene.add(plane);

// cube material 
var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
cube.castShadow = true;
scene.add(cube);

// sphereG material 
var sphereGeometry = new THREE.SphereGeometry(4,20,20);
var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
sphere.castShadow = true;
scene.add(sphere);


var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( -40, 60, -10 );
scene.add( spotLight );


camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);


// set renderer to render our scene
document.body.appendChild(renderer.domElement);


renderer.render(scene, camera);
