import { renderThumbnails } from './thumbnails.js';
import { showPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

// Обработчик кликов
const renderGallery = (pictures) => { // Принимает массив с данными
  container.addEventListener('click', (evt) => { // Отслеживаем события в контейнере, в evt подставляется объект события
    const thumbnail = evt.target.closest('[data-thumbnail-id]'); // Проверка у элемента наличие дата атрибута, closest ищет ближайший родительский элемент

    if (! thumbnail) {
      return; // Если не находит, то выход
    }

    evt.preventDefault();
    const thumbnailId = +thumbnail.dataset.thumbnailId; // Получаем значение атрибута из разметки, + это перевод строки в число
    const pictureData = pictures.find(({id}) => id === thumbnailId); // Находим id в контейнере, который соответствует thumbnailId. Объект, по которому кликнули

    showPicture(pictureData);
  });

  renderThumbnails(pictures, container);
};
export { renderGallery };
