import {renderGallery} from './gallery.js';
import { loadPictures, sendPicture} from './api.js';
import { showErrorMessage as showAlert, debounce } from './util.js';
import { sendForm, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { initFilter, debounceRepaint } from './filter.js';

sendForm(async (data) => {
  try {
    await sendPicture(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await loadPictures();
  const debounceRenderGallery = debounce(renderGallery);
  initFilter(data, debounceRenderGallery);
  renderGallery(debounceRepaint());
} catch {
  showAlert();
}
