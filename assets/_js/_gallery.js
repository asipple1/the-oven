import baguetteBox from 'baguettebox.js';

function galleryInit() {
  if (!document.querySelector('.gallery-section')) {
    return;
  }
  baguetteBox.run('.gallery-section');
}

export function init() {
  galleryInit();
}