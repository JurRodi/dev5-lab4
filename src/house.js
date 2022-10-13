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

    createRoof() {
        const roof = new THREE.Mesh(
            new THREE.ConeGeometry(7, 3, 4),
            new THREE.MeshStandardMaterial({ color: 0x333333 })
        );
        roof.rotation.y = Math.PI / 4;
        roof.position.y = 6.5;
        this.group.add(roof);
    }

    createDoor() {
        const door = new THREE.Mesh(
            new THREE.BoxGeometry(1, 2, 0.1),
            new THREE.MeshStandardMaterial({ color: 0x823c08 })
        );
        door.position.z = 3.7;
        door.position.y = 1;
        this.group.add(door);
    }
    
    createWindows() {
        const windows = new THREE.Group();
        const window = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 1.5),
            new THREE.MeshStandardMaterial({ color: 0x156289 })
        );
        const windowFrame = new THREE.Mesh(
            new THREE.PlaneGeometry(1.6, 1.6),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        windowFrame.position.z = 0.05;
        window.position.z = 0.1;
        windows.add(windowFrame);
        windows.add(window);
        windows.position.x = -1.5;
        windows.position.z = 3.7;
        windows.position.y = 1.5;
        this.group.add(windows);
    }
}