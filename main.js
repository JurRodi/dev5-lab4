import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import House from './src/house.js'
import Surrounding from './src/surrounding.js'
import Tree from './src/tree.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 15;
camera.position.y = 2;

const house = new House();
scene.add(house.group);

const surrounding = new Surrounding();
scene.add(surrounding.group);


let trees = [];
for (let i = 0; i < 35; i++) {
  const x = Math.random() * 80 - 40;
  const z = Math.random() * 80 - 40;
  if (x > 10 || x < -10 || z > 10 || z < -10) {
    const tree = new Tree(x, z);
    scene.add(tree.group);
    trees.push(tree);
  }
}

function animate() {
	requestAnimationFrame( animate );
  
  trees.forEach(tree => {
    tree.group.rotation.y += 0.01;
  })

  controls.update();
	renderer.render( scene, camera );
}
animate();