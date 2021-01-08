import './styles.css';
import refs from './js/refs';
import markupImages from './tamplate/markupImages.hbs';
import apiService from './js/apiService';
import 'handlebars';

refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    apiService.query = form.elements.query.value;       

    refs.galleryList.innerHTML = '';
    form.reset();

    apiService.resertPage();

    apiService.fetchApiSearch().then(markupImages);   
})

refs.loadMoreBtn.addEventListener('click', () => {
    apiService.fetchApiSearch().then(markupImages);
})