const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelContainer = document.querySelector('.img-upload__effect-level');
const effectsList = document.querySelector('.effects__list');
const previewImage = document.querySelector('.img-upload__preview img');

const EFFECTS = {
  none: { min: 0, max: 100, step: 1, filter: 'none', unit: '' },
  chrome: { min: 0, max: 1, step: 0.1, filter: 'grayscale', unit: '' },
  sepia: { min: 0, max: 1, step: 0.1, filter: 'sepia', unit: '' },
  marvin: { min: 0, max: 100, step: 1, filter: 'invert', unit: '%' },
  phobos: { min: 0, max: 3, step: 0.1, filter: 'blur', unit: 'px' },
  heat: { min: 1, max: 3, step: 0.1, filter: 'brightness', unit: '' },
};

let currentEffect = 'none';

noUiSlider.create(effectLevelSlider, {
  range: { min: 0, max: 100 },
  start: 100,
  step: 1,
  connect: 'lower',
});

const updateFilter = (value) => {
  effectLevelValue.value = value;

  if (currentEffect === 'none') {
    previewImage.style.filter = '';
  } else {
    const effect = EFFECTS[currentEffect];
    previewImage.style.filter = `${effect.filter}(${value}${effect.unit})`;
  }
};

effectLevelSlider.noUiSlider.on('update', (values) => {
  updateFilter(values[0]);
});

effectsList.addEventListener('change', (evt) => {
  if (evt.target.name !== 'effect') {
    return;
  }

  currentEffect = evt.target.value;
  const effect = EFFECTS[currentEffect];

  if (currentEffect === 'none') {
    effectLevelContainer.classList.add('hidden');
    previewImage.style.filter = '';
    return;
  }

  effectLevelContainer.classList.remove('hidden');

  effectLevelSlider.noUiSlider.updateOptions({
    range: { min: effect.min, max: effect.max },
    start: effect.max,
    step: effect.step,
  });

  updateFilter(effect.max);
});

export const resetEffects = () => {
  currentEffect = 'none';
  document.querySelector('#effect-none').checked = true;
  effectLevelContainer.classList.add('hidden');
  previewImage.style.filter = '';
  effectLevelSlider.noUiSlider.updateOptions({
    range: { min: 0, max: 100 },
    start: 100,
    step: 1,
  });
};
