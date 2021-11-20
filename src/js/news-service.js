import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASE_URL = `https://pixabay.com/api/?key=`;
const KEY = `24399696-8e36fcdd9504681aa333f9a82`;


export default class NewsApiService {
  constryctor(){
    this.searchQuery = '';
    this.page = 1;
    this.totalHits = 40;
  }

  fetchUrl (){
    // console.log('До', this);
    return fetch(`${BASE_URL}${KEY}&q=${this.searchQuery}&image_type=photo&
    orientation=horizontal&safesearch=true&per_page=${this.totalHits}&page=${this.page}`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          this.incrementPage();
          // console.log('После', this);
          return data.hits;
        });
  }

  incrementPage(){
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
}

  get query(){
    return this.searchQuery;
  }

  set query (newQuery){
    this.searchQuery = newQuery;
  }

  emplyArray(){
    if(this.totalHits === 0){
        Notify.info(`Sorry, there are no images matching your search query. Please try again.`);
    }
  }
    
}











// Список параметров строки запроса которые тебе обязательно необходимо указать:

// key - твой уникальный ключ доступа к API.
// q - термин для поиска. То, что будет вводить пользователь.
// image_type - тип изображения. Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии. Задай значение horizontal.
// safesearch - фильтр по возрасту. Задай значение true.

















// export  function fetchCountry(name){
//     return fetch(`${url}${name}?fields=name,capital,population,flags,languages `)
//     .then(response => {
//      if (!response.ok) {
//        Notify.failure(`"Oops, there is no country with that name"`);
//        throw new Error(response.status);
//      }
//      return response.json();
//    })
//    .catch(error => console.log(error));
//   }