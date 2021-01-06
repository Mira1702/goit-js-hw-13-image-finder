import './styles.css';
import refs from './js/refs';
// import fetchApiSearch from './js/apiService';
import markupImages from './tamplate/markupImages.hbs';
import debounce from 'lodash.debounce';
import 'handlebars';
// import '@pnotify/core';
// import { error, info, defaultModules } from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

// refs.searchFormInput.addEventListener('input', debounce(searchImage, 500));  ///при вводе данных в инпут идет задержка передачи 500милисекунд
refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    const inputValue = form.elements.query.value;
    // console.log(inputValue);
    const key = '19787930-3152e5d62708cea03366e4b32';
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputValue}&page=1&per_page=12&key=${key}`;

    refs.galleryList.innerHTML = '';

    fetch(url)
        .then(response => response.json())
        .then(({ hits }) => {
        const markup = markupImages(hits);
        refs.galleryList.insertAdjacentHTML('beforeend', markup);
        })
        .catch(error => console.log(error))
})


// function searchImage() {   
//     fetchApiSearch.query = refs.searchForm.value;

// }

// const key = '19787930-3152e5d62708cea03366e4b32';
// const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=flower&page=1&per_page=12&key=${key}`;
//  fetch(url)
//             .then(response => response.json())            
//             .then(data => console.log(data));  

