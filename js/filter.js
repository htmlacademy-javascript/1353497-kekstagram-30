import { renderGallery } from './gallery.js';
import { debounce } from './util.js';

const MAX_RANDOM_FILTER = 10;
const ACTIVE_CLASS = 'img-filters__button--active';

const FilterEnum = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed'
};

const filtersEl = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultBtn = filterForm.querySelector('#filter-default');
const randomBtn = filterForm.querySelector('#filter-random');
const discussedBtn = filterForm.querySelector('#filter-discussed');

const getRandomIndex = (min, max) =>
  Math.floor(Math.random() * (max - min));

let activeButton = defaultBtn;

const filterHandlers = {
  [FilterEnum.DEFAULT]: (pictures) => pictures,
  [FilterEnum.RANDOM]: (pictures) => {
    const randomIndexList = [];
    const max = Math.min(MAX_RANDOM_FILTER, pictures.length);
    while(randomIndexList.length < max) {
      const index = getRandomIndex(0, pictures.length);
      if(!randomIndexList.includes(index)){
        randomIndexList.push(index);
      }
    }
    return randomIndexList.map((index) => pictures[index]);
  },
  [FilterEnum.DISCUSSED]: (pictures) =>
    pictures.toSorted((firstPic, secondPic) =>
      secondPic.comments.length - firstPic.comments.length),
};

const clearPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((item) => item.remove());
};

const toggleClasses = (button) => {
  activeButton.classList.remove(ACTIVE_CLASS);
  button.classList.add(ACTIVE_CLASS);

  activeButton = button;
};

let currentFilter = FilterEnum.DEFAULT;

const repaint = (filter, pictures) => {
  if(currentFilter !== filter){
    const filteredData = filterHandlers[filter](pictures);
    clearPictures();
    renderGallery(filteredData);
    currentFilter = filter;
  }

};

const debounceRepaint = debounce(repaint);

const initFilter = (pictures) => {
  filtersEl.classList.remove('img-filters--inactive');

  defaultBtn.addEventListener('click', () => {
    toggleClasses(defaultBtn);
    debounceRepaint(FilterEnum.DEFAULT, pictures);
  });
  randomBtn.addEventListener('click', () => {
    toggleClasses(randomBtn);
    debounceRepaint(FilterEnum.RANDOM, pictures);
  });
  discussedBtn.addEventListener('click', () => {
    toggleClasses(discussedBtn);
    debounceRepaint(FilterEnum.DISCUSSED, pictures);
  });
};
export { initFilter, debounceRepaint };

