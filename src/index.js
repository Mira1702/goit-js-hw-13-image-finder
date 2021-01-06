import './styles.css';
import refs from './js/refs';
import fetchApiSearch from './js/apiService';
import markupImages from './tamplate/markupImages.hbs';
import debounce from 'lodash.debounce';
import 'handlebars';
import '@pnotify/core';
import { error, info, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

refs.searchFormInput.addEventListener('input', debounce(searchImage, 500));  ///при вводе данных в инпут идет задержка передачи 500милисекунд
refs.searchForm.addEventListener('keypress', inputEnter);   ///при нажатии Enter нет перезагрузки страницы

function inputEnter(event) {
  if(event.keyCode == 13){
        event.preventDefault()
    }
}

function searchImage() {   
    fetchApiSearch.query = refs.searchForm.value;

}
