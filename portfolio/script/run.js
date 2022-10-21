import * as THREE from 'three';
import { RoomEnvironment } from 'RoomEnvironment';
import { GLTFLoader } from 'GLTFLoader';
import { OrbitControls } from 'OrbitControls';

    const renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector("#poly"),
    antialias : true,
    });
    renderer.setClearColor( 0xffffff, 0);
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( window.Width, window.Height );
			renderer.outputEncoding = THREE.sRGBEncoding;
			( renderer.domElement );

			const pmremGenerator = new THREE.PMREMGenerator( renderer );

			const scene = new THREE.Scene();

			scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 1 ).texture;

			const camera = new THREE.PerspectiveCamera( 15, innerWidth.Width / innerHeight.Height, 1, 1000 );
			camera.position.set( -0.3, -2.4, 81 );


      const light = new THREE.SpotLight(0xFF0000,5.2,Infinity);
      const light2 = new THREE.SpotLight(0x980000,5.8,Infinity);
      light.position.set( 350, 50 , 120); 
      light2.position.set( -450, -150 , -350); 
      light.castShadow = true;
      scene.add(light);
      // scene.add(light1);
      scene.add(light2);
      
			  let controls = new OrbitControls( camera, renderer.domElement );
        controls.target.set( 0, 0.5, 0 );
        controls.update();
        controls.enablePan = false;
        controls.enableDamping = true;
        controls.enableZoom = false;
       
      const loader = new GLTFLoader();
      loader.load('gltf/polyearth2.glb', function(gltf){
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
       
          gltf.scene.rotation.y -= 0.0011;
          gltf.scene.rotation.x -= 0.001;
          
          controls.update();
      renderer.render(scene, camera);
      if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }
      }

      

        animate()
      });
			