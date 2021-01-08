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
    
    apiService.resertPage();
    refs.loadMoreBtn.classList.add('is-hidden');

    apiService
        .fetchApiSearch()
        .then(hits => {
            markupImages(hits);
            refs.loadMoreBtn.classList.remove('is-hidden');
            window.scrollTo({
                top: 1000000000,
                behavior: 'smooth',
            });
        });
    
    form.reset();
})

refs.loadMoreBtn.addEventListener('click', () => {
    apiService.fetchApiSearch().then(markupImages);
})

