import { getTemplate } from './util.js';

const thumbnailTemplate = getTemplate('picture');

// Отрисовка и заполнение миниатюры
const createThumbnail = ({url, description, likes, comments, id}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.thumbnailId = id; //В разметке появится дата атрибут data-thumbnail-id="1", значение хранится в виде строки

  return thumbnail;
};

const renderThumbnails = (pictures, container) => { //Приходит массив с данными, которые были сгенерированы
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => { // Перебор массива
    const thumbnail = createThumbnail(picture); //Создается элемент миниатюры(используем шаблон)
    fragment.append(thumbnail); //Добавляем в фрагмент
  });

  container.append(fragment); //Добавляем в контейнер
};

export { renderThumbnails };
