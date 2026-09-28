/* eslint-disable no-unused-vars */

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const getRandomElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

// Вспомогательные массивы

const names = [
  'Артём',
  'Ира',
  'Настя',
  'Оля',
  'Паша',
  'Маша',
  'Костя',
  'Лена',
  'Дима',
  'Света',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const descriptions = [
  'Красивый закат на море',
  'Прогулка по осеннему парку',
  'Мой кот снова спит на клавиатуре',
  'Утренний кофе и хорошее настроение',
  'Незабываемое путешествие в горы',
];

let commentId = 1;

// Функция создания одного комментария
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

// Функция создания одной фотографии
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

// Функция создания массива из 25 фотографий
const createPhotos = () => {
  const photoList = [];
  for (let i = 1; i <= 25; i++) {
    photoList.push(createPhoto(i));
  }
  return photoList;
};

const photos = createPhotos();
