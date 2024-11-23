import * as THREE from 'three';
import { createScene } from './scene.js';
import { createCamera } from './camera.js';
import { createRenderer } from './renderer.js';

// Crear escena, cámara y renderer
const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();

// Añadir renderer al DOM
document.body.appendChild(renderer.domElement);

// Animación principal
function animate() {
  requestAnimationFrame(animate);
  // Aquí puedes animar objetos
  renderer.render(scene, camera);
}

animate();
