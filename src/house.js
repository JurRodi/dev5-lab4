import * as THREE from 'three'

export default class House {
    constructor() {
        this.group = new THREE.Group();
        this.createWalls();
        this.createRoof();
        this.createDoor();
        this.createWindows();
    }

    createWalls() {
        const wallTexture = new THREE.TextureLoader().load('textures/bakstenen_muur.jpg');
        const walls = new THREE.Group();
        const frontWall = new THREE.Mesh(
            new THREE.BoxGeometry(7, 5, 0.3),
            new THREE.MeshStandardMaterial({ color: 0xffffff })
        );
        frontWall.position.y = 2.5;
        frontWall.position.z = 3.5;
        
        const leftWall = new THREE.Mesh(
            new THREE.BoxGeometry(7, 5, 0.3),
            new THREE.MeshStandardMaterial({ color: 0xffffff })
        );
        leftWall.position.y = 2.5;
        leftWall.position.x = -3.3;
        leftWall.rotation.y = Math.PI / 2;

        const rightWall = new THREE.Mesh(
            new THREE.BoxGeometry(7, 5, 0.3),
            new THREE.MeshStandardMaterial({ color: 0xffffff })
        );
        rightWall.position.y = 2.5;
        rightWall.position.x = 3.3;
        rightWall.rotation.y = Math.PI / 2;

        const backWall = new THREE.Mesh(
            new THREE.BoxGeometry(7, 5, 0.3),
            new THREE.MeshStandardMaterial({ color: 0xffffff })
        );
        backWall.position.y = 2.5;
        backWall.position.z = -3.5;

        walls.add(frontWall, leftWall, rightWall, backWall);
        for (let i = 0; i < walls.children.length; i++) {
            walls.children[i].material.map = wallTexture;
            walls.children[i].material.side = THREE.DoubleSide;
        }
        this.group.add(walls);
    }
}