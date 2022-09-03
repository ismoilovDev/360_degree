const panoImg = document.querySelector('.img-box')

const panorama = new PANOLENS.ImagePanorama( '../assets/abboscar.jpeg' );
const viewer = new PANOLENS.Viewer({
   container: panoImg
});
viewer.add( panorama );