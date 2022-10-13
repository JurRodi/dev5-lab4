import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class Tree {
    constructor(x, z) {
        this.group = new THREE.Group();
        this.createTree(x, z);
    }

    createTree(x, z) {
        const loader = new GLTFLoader();
        loader.load('models/stylized_tree/scene.gltf', (gltf) => {
            const tree = gltf.scene;
            tree.scale.set(20, 20, 20);
            tree.position.x = x;
            tree.position.z = z;
            this.group.add(tree);
        });
    }
}