const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');
const closeButton = bigPicture.querySelector('#picture-cancel');

const commentCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const COMMENTS_STEP = 5;
let renderedCommentsCount = 0;
let currentComments = [];

const createCommentElement = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  commentElement.innerHTML = `
    <img
        class="social__picture"
        src="${comment.avatar}"
        alt="${comment.name}"
        width="35" height="35">
    <p class="social__text">${comment.message}</p>
  `;

  return commentElement;
};

const updateCommentCount = () => {
  commentCountBlock.innerHTML = `${renderedCommentsCount} из <span class="comments-count">${currentComments.length}</span> комментариев`;
};

const renderCommentsPortion = () => {
  const fragment = document.createDocumentFragment();

  const nextComments = currentComments.slice(renderedCommentsCount, renderedCommentsCount + COMMENTS_STEP);

  nextComments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    fragment.append(commentElement);
  });

  socialComments.append(fragment);
  renderedCommentsCount += nextComments.length;

  updateCommentCount();


  if (renderedCommentsCount >= currentComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

commentsLoader.addEventListener('click', renderCommentsPortion);

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

closeButton.addEventListener('click', closeBigPicture);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
    closeBigPicture();
  }
});

export const openBigPicture = (photo) => {
  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;
  likesCount.textContent = photo.likes;
  socialCaption.textContent = photo.description;

  socialComments.innerHTML = '';
  currentComments = photo.comments;
  renderedCommentsCount = 0;

  commentCountBlock.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  renderCommentsPortion();

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};
