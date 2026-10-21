import { getRandomInteger, getRandomElement } from './utils.js';
import { names, messages, descriptions } from './data.js';

let commentId = 1;

const createComment = () => {
  const messagesCount = getRandomInteger(1, 2);
  const selectedMessages = [];

  for (let i = 0; i < messagesCount; i++) {
    selectedMessages.push(getRandomElement(messages));
  }

  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: selectedMessages.join(' '),
    name: getRandomElement(names),
  };
};

const createPhoto = (id) => {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(descriptions),
    likes: getRandomInteger(15, 200),
    comments,
  };
};

const createPhotos = () => {
  const photoList = [];
  for (let i = 1; i <= 25; i++) {
    photoList.push(createPhoto(i));
  }
  return photoList;
};

export { createPhotos };
