import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENT_LINES = [
  'Всё отлично !',
  'В целом всё неплохо. Но не всё.'
];
const DESCRIPTIONS = [
  'Летний чил',
  'Тестим новую камеру'
];
const NAMES = [
  'Клим', 'Эвелина'
];

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(COMMENT_LINES),
). join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const generatePhotoId = createIdGenerator();

const createPicture = (index) =>({
  id: generatePhotoId(),
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment,
  ),
});

const getPictures = () => Array.from(
  { length: PICTURE_COUNT},
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

export {getPictures};
