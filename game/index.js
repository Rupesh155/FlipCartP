// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Snake settings
const snakeSegments = [];
const segmentSize = 1;
const snakeLength = 5;
let direction = 'right';

// Create the snake body segments
for (let i = 0; i < snakeLength; i++) {
    const geometry = new THREE.BoxGeometry(segmentSize, segmentSize, segmentSize);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const segment = new THREE.Mesh(geometry, material);
    segment.position.set(-i * segmentSize, 0, 0);
    snakeSegments.push(segment);
    scene.add(segment);
}

// Create the snake head (as a sphere)
const headGeometry = new THREE.SphereGeometry(segmentSize / 2, 32, 32);
const headMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const head = new THREE.Mesh(headGeometry, headMaterial);
snakeSegments.push(head);
scene.add(head);

// Camera position
camera.position.z = 10;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    // Move the snake based on the direction
    for (let i = snakeSegments.length - 1; i > 0; i--) {
        snakeSegments[i].position.copy(snakeSegments[i - 1].position);
    }

    // Move the head
    const head = snakeSegments[snakeSegments.length - 1];
    if (direction === 'right') {
        head.position.x += segmentSize;
    } else if (direction === 'left') {
        head.position.x -= segmentSize;
    } else if (direction === 'up') {
        head.position.y += segmentSize;
    } else if (direction === 'down') {
        head.position.y -= segmentSize;
    }
}

// Listen for keyboard inputs to change direction
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && direction !== 'left') direction = 'right';
    if (event.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
    if (event.key === 'ArrowUp' && direction !== 'down') direction = 'up';
    if (event.key === 'ArrowDown' && direction !== 'up') direction = 'down';
});

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation loop
animate();
