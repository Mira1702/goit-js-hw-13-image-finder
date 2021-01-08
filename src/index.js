import './styles.css';
import refs from './js/refs';
import markupImages from './tamplate/markupImages.hbs';
import fetchApiSearch from './js/apiService';
import debounce from 'lodash.debounce';
import 'handlebars';
// import '@pnotify/core';
// import { error, info, defaultModules } from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

refs.searchFormInput.addEventListener('input', debounce(searchImage, 500));  ///при вводе данных в инпут идет задержка передачи 500милисекунд
refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    const inputValue = form.elements.query.value;    

    refs.galleryList.innerHTML = '';
    form.reset();
    fetchApiSearch(inputValue).then(searchImage);    
})

function searchImage(hits) {
    const markup = markupImages(hits);
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

