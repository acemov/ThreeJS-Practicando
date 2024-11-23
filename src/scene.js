import * as THREE from 'three';

export function createScene() {
  const scene = new THREE.Scene();

  // Añadir un cubo de ejemplo
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Luz (si es necesaria)
  const light = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light);

  return scene;
}
