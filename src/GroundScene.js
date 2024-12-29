import { FBXLoader, GLTFLoader } from "three/examples/jsm/Addons.js";
import GameScene from "./GameScene";
import * as THREE from "three";

export default class GroundScene extends GameScene{

    setup(){

        // ground 
        // const groundGeometry = new THREE.PlaneGeometry(100,100)
        // const groundMaterial = new THREE.MeshStandardMaterial({
        //     side: THREE.DoubleSide
        // })
        // const ground = new THREE.Mesh(groundGeometry, groundMaterial)
        
        // ground.rotateX(Math.PI * 0.2);
        
        // this.scene.add(ground)


        // load model inside gltf 
        this.gltfLoader = new GLTFLoader()
        this.gltfLoader.load("/model/scene.gltf", (obj) => {
            console.log(obj)
            // this.scene.add(obj.scene)
        })

        // load model inside fbx 
        // this.scene.background = new THREE.Color(1,1,1)
        // this.fbxLoader = new FBXLoader()
        // this.fbxLoader.load("/model/cube2.fbx", (obj) =>   {
        //     this.scene.add(obj)
        //     console.log(obj)
        // })
    }

    update(){
        
    }
}