import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

export default class House {
    constructor() {
        this.group = new THREE.Group();
        this.createWalls();
        this.createRoof();
        this.createDoor();
        this.createWindows();
        this.createNameBord();
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
        const glassTexture = new THREE.TextureLoader().load('textures/glas.jpg');
        const windows = new THREE.Group();
        const frontWindow = new THREE.Mesh(
            new THREE.PlaneGeometry(1.2, 4.9),
            new THREE.MeshStandardMaterial({ color: 0x6fa8dc })
        );
        const frontWindowFrame = new THREE.Mesh(
            new THREE.PlaneGeometry(1.3, 5),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        frontWindow.position.set(-2, 2.5, 3.75);
        frontWindowFrame.position.set(-2, 2.5, 3.7);

        const rightWindow = new THREE.Mesh(
            new THREE.PlaneGeometry(4.9, 1.2),
            new THREE.MeshStandardMaterial({ color: 0x6fa8dc })
        );
        const rightWindowFrame = new THREE.Mesh(
            new THREE.PlaneGeometry(5, 1.3),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        rightWindow.position.set(3.55, 1.8, 0);
        rightWindowFrame.position.set(3.5, 1.8, 0);
        rightWindow.rotation.y = Math.PI / 2;
        rightWindowFrame.rotation.y = Math.PI / 2;

        const leftWindow = new THREE.Mesh(
            new THREE.PlaneGeometry(3.9, 1.2),
            new THREE.MeshStandardMaterial({ color: 0x6fa8dc })
        );
        const leftWindowFrame = new THREE.Mesh(
            new THREE.PlaneGeometry(4, 1.3),
            new THREE.MeshStandardMaterial({ color: 0x000000 })
        );
        leftWindow.position.set(-3.55, 4, -1.6);
        leftWindowFrame.position.set(-3.5, 4, -1.6);
        leftWindow.rotation.y = -Math.PI / 2;
        leftWindowFrame.rotation.y = -Math.PI / 2;

        windows.add(frontWindow, frontWindowFrame);
        windows.add(rightWindow, rightWindowFrame);
        windows.add(leftWindow, leftWindowFrame);

        for (let i = 0; i < windows.children.length; i++) {
            windows.children[i].material.map = glassTexture;
        }

        this.group.add(windows);
    }

    createNameBord() {
        const nameBord = new THREE.Group();
        const whiteBord = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 1),
            new THREE.MeshStandardMaterial({ color: 0xffffff })
        );
        whiteBord.position.set(0, 2.8, 3.7);
        nameBord.add(whiteBord);

        const loader = new FontLoader();
        loader.load('fonts/helvetiker_regular.typeface.json', (font) => {
            const textGeometry = new TextGeometry('Jur', {
                font: font,
                size: 0.7,
                height: 0.1,
                curveSegments: 12,
                bevelEnabled: false,
            });
            const textMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
            const text = new THREE.Mesh(textGeometry, textMaterial);
            text.position.set(-0.6, 2.5, 3.7);
            nameBord.add(text);
        });

        this.group.add(nameBord);
        console.log(nameBord);
    }
}