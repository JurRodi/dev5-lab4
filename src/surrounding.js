import * as THREE from 'three'

export default class Surrounding {
    constructor() {
        this.group = new THREE.Group();
        this.createGround();
        this.createSky();
    }

    createGround() {
        const geometry = new THREE.BoxGeometry(80, 0.1, 80);
        const material = new THREE.MeshStandardMaterial({ color: 0x89c854 });
        const ground = new THREE.Mesh(geometry, material);
        ground.position.y = -0.05;
        this.group.add(ground);
    }

    createSky() {
        const geometry = new THREE.SphereGeometry(100, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0x156289 });
        const sky = new THREE.Mesh(geometry, material);
        sky.material.side = THREE.BackSide;
        this.group.add(sky);
    }
}