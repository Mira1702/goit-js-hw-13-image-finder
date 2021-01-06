// export default {
//     tag: '',
//     page: 1,
//     fetchApiSearch() {
//         const key = '19787930-3152e5d62708cea03366e4b32';
//         const url = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.tag}&page=${this.page}&per_page=12&key=${this.key}';
        
//         return fetch(url)
//             .then(response => response.json())
//             .then(({ pages }) => {
//                 this.page += 1;
//                 return pages;
//             })
//             .catch(error => console.log(error));    
//     },
// }

const key = '19787930-3152e5d62708cea03366e4b32';
function fetchApiSearch(searchQuery) {        
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${key}`;
        
        return fetch(url)
            .then(response => response.json())            
            .catch(error => console.log(error));    
}

export default fetchApiSearch