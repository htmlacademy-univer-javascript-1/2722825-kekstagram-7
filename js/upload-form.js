const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFileInput = document.querySelector('.img-upload__input');
const uploadCancelButton = document.querySelector('.img-upload__cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const validateHashtag = (value) => {
  if (!value) return true;
  const hashtags = value.toLowerCase().split(' ').filter(Boolean);
  const regex = /^#[a-zа-яё0-9]{1,19}$/i;
  return hashtags.every((tag) => regex.test(tag));
};

const validateHashtagCount = (value) => {
  if (!value) return true;
  const hashtags = value.split(' ').filter(Boolean);
  return hashtags.length <= 5;
};

const validateHashtagUnique = (value) => {
  if (!value) return true;
  const hashtags = value.toLowerCase().split(' ').filter(Boolean);
  return new Set(hashtags).size === hashtags.length;
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

pristine.addValidator(textHashtags, validateHashtag, 'Неверный формат хэштега');
pristine.addValidator(textHashtags, validateHashtagCount, 'Нельзя больше 5 хэштегов');
pristine.addValidator(textHashtags, validateHashtagUnique, 'Хэштеги не должны повторяться');

uploadForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  
  if (!isValid) {
    evt.preventDefault(); 
  }
});

const closeUploadForm = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  
  uploadFileInput.value = '';
  textHashtags.value = '';
  textDescription.value = '';
  pristine.reset();
};

const openUploadForm = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && document.activeElement !== textHashtags && document.activeElement !== textDescription) {
    evt.preventDefault();
    closeUploadForm();
    document.removeEventListener('keydown', onEscKeyDown);
  }
}

uploadCancelButton.addEventListener('click', () => {
  closeUploadForm();
  document.removeEventListener('keydown', onEscKeyDown);
});

uploadFileInput.addEventListener('change', () => {
  openUploadForm();
});