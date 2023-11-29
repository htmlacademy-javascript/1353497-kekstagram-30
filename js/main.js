import {renderGallery} from './gallery.js';
import './form.js';
import './big-picture.js';
import './scale.js';
import './effect.js';
import { loadPictures } from './api.js';
import { showErrorMessage as showAlert } from './util.js';
import { initFilter } from './filter.js';

const bootstrap = async () => {
  try {
    const pictures = await loadPictures();
    initFilter(pictures);
    renderGallery(pictures);
  } catch {
    showAlert();
  }
};

bootstrap();
