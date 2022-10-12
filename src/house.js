import * as THREE from 'three'

export default class House {
    constructor() {
        const geometry = new THREE.TorusGeometry(10, 4.5, 16, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const torus = new THREE.Mesh(geometry, material);
        return torus;
    }
}