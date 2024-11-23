import * as THREE from 'three';

export function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    75, // Campo de visión
    window.innerWidth / window.innerHeight, // Relación de aspecto
    0.1, // Plano cercano
    1000 // Plano lejano
  );
  camera.position.z = 5; // Posicionar la cámara
  return camera;
}
