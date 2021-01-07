import refs from '../js/refs';
import markupImages from '../tamplate/markupImages.hbs';

function fetchApiSearch(searchQuery) {  
    const key = '19787930-3152e5d62708cea03366e4b32';
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&per_page=12&key=${key}`;
        
    return fetch(url)
        .then(response => response.json())
        .then(({ hits }) => {
            const markup = markupImages(hits);
            refs.galleryList.insertAdjacentHTML('beforeend', markup);
        })
        .catch(error => console.log(error));    
}

export default fetchApiSearch