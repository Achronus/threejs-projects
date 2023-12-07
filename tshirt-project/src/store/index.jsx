import { proxy } from 'valtio';

const state = proxy({
    intro: true,  // Check if on homepage
    colour: '#EFBD48',  // Set default colour
    isLogoTexture: true,  // Check if logo is displayed on shirt
    isFullTexture: false,  // Check if using a texture
    logoDecal: './threejs.png',  // Initial logo decal
    fullDecal: './threejs.png',  // Initial full texture decal
});

export default state;
