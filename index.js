//Базовые параметры
var renderer = new THREE.WebGL.Renderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

if(window.innerWidth > 800) {
    renderer.shadowMap.enabled = true;
}