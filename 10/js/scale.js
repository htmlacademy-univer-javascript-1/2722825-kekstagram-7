const scaleInput = document.querySelector('.scale__control--value');
const smallerBtn = document.querySelector('.scale__control--smaller');
const biggerBtn = document.querySelector('.scale__control--bigger');
const previewImage = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
let currentScale = 100;

const updateScale = (value) => {
  currentScale = value;
  scaleInput.value = `${currentScale}%`;
  previewImage.style.transform = `scale(${currentScale / 100})`;
};

smallerBtn.addEventListener('click', () => {
  if (currentScale > MIN_SCALE) {
    updateScale(currentScale - SCALE_STEP);
  }
});

biggerBtn.addEventListener('click', () => {
  if (currentScale < MAX_SCALE) {
    updateScale(currentScale + SCALE_STEP);
  }
});

export const resetScale = () => {
  updateScale(100);
};

export const initScale = () => {
  updateScale(100);
};
