import { renderThumbnails } from './thumbnails.js';
import { showPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

let allPictures = [];

container.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');

  if (!thumbnail) {
    return;
  }

  evt.preventDefault();

  const thumbnailId = +thumbnail.dataset.thumbnailId;
  const pictureData = allPictures.find(({id}) => id === thumbnailId);
  showPicture(pictureData);
});

const renderGallery = (pictures) => {
  allPictures = pictures;
  renderThumbnails(pictures, container);
};

export { renderGallery };
