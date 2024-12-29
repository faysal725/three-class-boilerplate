import GameScene from "./GameScene";
import * as THREE from "three";

export default class GroundScene extends GameScene{

    setup(){
        const groundGeometry = new THREE.PlaneGeometry(100,100)
        const groundMaterial = new THREE.MeshStandardMaterial({
            side: THREE.DoubleSide
        })
        const ground = new THREE.Mesh(groundGeometry, groundMaterial)
        
        ground.rotateX(Math.PI * 0.2);
        
        this.scene.add(ground)
    }

    update(){
        
    }
}