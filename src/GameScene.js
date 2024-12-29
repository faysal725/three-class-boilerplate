import * as THREE from "three";
import { OrbitControls, TransformControls } from "three/examples/jsm/Addons.js";
import dat from 'dat.gui'

export default class GameScene {
  constructor(canvas) {
    this.canvas = canvas;

    this.init();
    this.render();
  }

  init() {
    console.log(this);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 30, 50);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });


    this.setUpLights();
    
    this.setUpGui()

    this.resize();

    this.setUpEvents();

    this.setUpControls();

    this.setup();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
    this.update();

    requestAnimationFrame(() => this.render());
  }

  resize() {
    // console.log(window.innerWidth, window.innerHeight)
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setUpEvents() {
    window.addEventListener("resize", () => this.resize());
  }

  setUpControls() {
    this.orbitControls = new OrbitControls(
      this.camera,
      this.renderer.domElement
    );
  }

  setUpLights() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    this.scene.add(this.ambientLight);

    this.pointLight = new THREE.PointLight(0xffffff, 1);
    this.pointLight.position.y = 5;
    this.scene.add(this.pointLight);

    // give pointlight a visible shape 
    this.pointLightTransformControl = new TransformControls(
      this.camera,
      this.renderer.domElement
    );
    this.pointLightTransformControl.addEventListener('dragging-changed', () => {
      this.orbitControls.enabled = !this.orbitControls.enabled
    })
    this.pointLightTransformControl.attach(this.pointLight);
    this.scene.add(this.pointLightTransformControl)
  }

  setUpGui(){
    this.gui = new dat.GUI()

    // adding ambient light controller 
    let ambientFolder = this.gui.addFolder('Ambient Light')
    ambientFolder.add(this.ambientLight, 'intensity', 0, 3)

    // adding point light controller
    let pointFolder = this.gui.addFolder('Point Light')
    pointFolder.add(this.pointLight, 'intensity', 0 , 3)


    pointFolder.add(this.pointLightTransformControl, 'visible')
    .onChange((e) => {
      this.pointLightTransformControl.enabled = e
    })

  }
}
