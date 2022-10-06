import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import {GLTFLoader} from 'GLTFLoader';

const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector("#c8"),
  antialias : true,
  });
  renderer.setClearColor( 0xB2EBF4, 0);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.Width, window.Height );
    renderer.outputEncoding = THREE.sRGBEncoding;
    ( renderer.domElement );
    let scene = new THREE.Scene();

    let light = new THREE.SpotLight(0x050505,50,Infinity);
    light.position.set( 20, 50 , 20); 
    scene.add(light);

    const rectLight = new THREE.AmbientLight( 0xffeeee, 0.1,2,2 );
    rectLight.position.set( 250, 50 , 120); 
    scene.add( rectLight )



    let camera = new THREE.PerspectiveCamera(1.1, innerWidth.Width / innerHeight.Height, 99, 50000 );
    camera.position.set(-3,-1,600,100);

    // let controls = new OrbitControls( camera, renderer.domElement );
    // controls.minDistance = 4;
    // controls.maxDistance = 9;
    // controls.enableZoom = true;
   

    let loader = new GLTFLoader();
    loader.load('pony/anipo1.gltf', function(gltf){
        scene.add(gltf.scene);


function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.innerWidth !== width || canvas.innerHeight !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
function animate(){
  requestAnimationFrame(animate)
 
  gltf.scene.rotation.y += 0.0111;
  gltf.scene.rotation.y += 0.0111;
  scene.rotation.y -= 0.001;
  scene.rotation.x -= 0.0001;
  
  
  renderer.render(scene, camera);
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
}
// controls.update();
renderer.render(scene, camera);

  animate()


      });
      
      const geometry = new THREE.TorusGeometry( 22,4, 23, 15 );
      const material = new THREE.MeshToonMaterial( { color: 0x049ef4} );
      const torus = new THREE.Mesh( geometry, material );
      scene.add( torus );
          
          for (var i = 0; i < 400; i++) {
              var mesh = new THREE.Mesh(geometry, material);
              mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
              mesh.position.multiplyScalar(90 + (Math.random() * 700));
              mesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
              scene.add(mesh);
  
              window.onload = function () {
              }
          }