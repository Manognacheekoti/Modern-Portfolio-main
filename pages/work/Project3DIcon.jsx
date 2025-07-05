import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Project3DIcon = ({ iconHint, isHovered }) => { // Added isHovered prop
  const mountRef = useRef(null);
  const objectRef = useRef(null); // Ref to store the current 3D object
  const animationFrameId = useRef(null); // To store the requestAnimationFrame ID

  useEffect(() => {
    // Debugging: Log the iconHint received
    console.log("Project3DIcon received iconHint:", iconHint, "isHovered:", isHovered);

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x131424); // Match primary background for seamless blend

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight, // Corrected aspect ratio calculation
      0.1,
      1000
    );
    camera.position.z = 2; // Adjust camera position to see the object

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a basic 3D object based on the hint
    let geometry;
    let material;

    // Use different basic shapes based on the icon hint
    switch (iconHint) {
      case 'bus':
        geometry = new THREE.BoxGeometry(1, 0.6, 0.8); // Rectangular shape for a bus
        material = new THREE.MeshStandardMaterial({ color: 0xF13024 }); // Accent color
        break;
      case 'heartbeat':
        geometry = new THREE.SphereGeometry(0.8, 32, 16); // Sphere for health
        material = new THREE.MeshStandardMaterial({ color: 0x00FF00 }); // Green for health
        break;
      case 'money':
        geometry = new THREE.CylinderGeometry(0.6, 0.6, 0.4, 32); // Coin-like shape for money
        material = new THREE.MeshStandardMaterial({ color: 0xFFD700 }); // Gold color
        break;
      default:
        geometry = new THREE.BoxGeometry(1, 1, 1); // Default cube
        material = new THREE.MeshStandardMaterial({ color: 0x888888 }); // Grey color
    }

    const newObject = new THREE.Mesh(geometry, material);
    scene.add(newObject);
    objectRef.current = newObject; // Store the new object in the ref

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);

    // Add directional light for shadows and highlights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      if (objectRef.current) { // Ensure object exists before rotating
        const rotationSpeed = isHovered ? 0.02 : 0.005; // Faster rotation on hover
        objectRef.current.rotation.x += rotationSpeed;
        objectRef.current.rotation.y += rotationSpeed;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount or iconHint/isHovered change
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current); // Cancel the animation frame
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (objectRef.current) {
        scene.remove(objectRef.current); // Remove the object from the scene
        objectRef.current.geometry.dispose();
        objectRef.current.material.dispose();
        objectRef.current = null; // Clear the ref
      }
      geometry.dispose(); // Dispose the geometry from the current effect run
      material.dispose(); // Dispose the material from the current effect run
      renderer.dispose();
    };
  }, [iconHint, isHovered]); // Re-run effect if iconHint or isHovered changes

  return (
    <div
      ref={mountRef}
      className="w-24 h-24 rounded-full flex-shrink-0" // Tailwind classes for sizing and shape
      style={{ overflow: 'hidden' }} // Ensure 3D content stays within bounds
    >
      {/* The 3D canvas will be appended here */}
    </div>
  );
};

export default Project3DIcon;
