import { getTemplate } from './util.js';

const COMMENTS_COUNT_SHOW = 5;

const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closePictureButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

const commentsListElement = bigPictureElement.querySelector('.social__comments'); // Находим список
const commentCountElement = bigPictureElement.querySelector('.social__comment-shown-count');
const totalCommentCountElement = bigPictureElement.querySelector('.social__comment-total-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const commentTemplate = getTemplate('comment');

let commentsCountShow = 0;
let comments = [];

const createComment = ({ avatar, message, name }) => {
  const newComment = commentTemplate.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const renderComments = () => {
  const startSlice = commentsCountShow;
  commentsCountShow += COMMENTS_COUNT_SHOW;

  if (commentsCountShow >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsCountShow = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment(); // Создаем фрагмент
  comments.slice(startSlice, commentsCountShow).forEach((comment) => {
    fragment.append(createComment(comment)); // Добавляем комментарий
  });

  commentsListElement.append(fragment);

  commentCountElement.textContent = commentsCountShow;
  totalCommentCountElement.textContent = comments.length;
};

const onCommentsLoaderClick = renderComments;

const hidePicture = () => {
  commentsCountShow = 0;
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown); // Снятие обработчика, после закрытия окна
};
const onClosePictureButtonClick = hidePicture;

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hidePicture();
  }
}

const renderPicture = ({ url, likes, description }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const showPicture = (pictureData) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  renderPicture(pictureData);
  commentsListElement.innerHTML = '';

  comments = pictureData.comments;

  renderComments();
};

closePictureButtonElement.addEventListener('click', onClosePictureButtonClick);
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export { showPicture };
