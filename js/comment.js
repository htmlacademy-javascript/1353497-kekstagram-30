const bigPictureElement = document.querySelector('.big-picture');

const commentsListElement = bigPictureElement.querySelector('.social__comments'); // Находим список
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const totalCommentCountElement = bigPictureElement.querySelector('.social__comment-total-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');

const commentElement = document
  .querySelector('#comment')
  .content
  .querySelector('.social__comment'); // Находим элемент в списке

const createComment = ({ avatar, message, name }) => {
  const newComment = commentElement.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const renderComments = (comments) => {
  commentsListElement.innerHTML = ''; // Очищаем список комментариев
  const fragment = document.createDocumentFragment(); // Создаем фрагмент
  comments.forEach((item) => { // Проходим по элементам массива
    const comment = createComment(item); // Передаем в функцию createComment элемент массива item
    fragment.append(comment); // Добавляем комментарий
  });

  commentsListElement.append(fragment);
};

const initCommentList = () => {
  commentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
};

export { renderComments, initCommentList };
