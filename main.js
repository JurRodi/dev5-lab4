import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function donut() {
  const geometry = new THREE.TorusGeometry(10, 4.5, 16, 100);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);
}

donut();

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 50);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 30;

function animate() {
	requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
}
animate();