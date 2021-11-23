import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import NewsApiService from '../js/news-service.js';
import photoCards from '../templates/gallery_cards.hbs';
import  SimpleLightbox  from  'simplelightbox' ;
import 'simplelightbox/dist/simple-lightbox.min.css' ;
import LoadMoreBtn from './load-more-btn.js';
// console.log(photoCards);


const refs = {
    form: document.querySelector("#search-form"),
    gallery: document.querySelector('.gallery'),
    input: document.querySelector('.search-input'),
};

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});


const newsApiService = new NewsApiService();

refs.form.addEventListener('submit', onFornSubmit);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);


function onFornSubmit(inquiry){
    inquiry.preventDefault();

    newsApiService.query = inquiry.currentTarget.elements.searchQuery.value.trim(); 

    loadMoreBtn.show();
    newsApiService.resetPage();
        clearHitsCards();   
        onLoadMore();
}

function onLoadMore (){
    loadMoreBtn.disable();
    newsApiService.fetchUrl().then(hids => {
        appendHitsMarckup(hids);
        loadMoreBtn.enable();
    });
}

function appendHitsMarckup(hits){
    if (hits.length === 0) {
        Notify.failure(`Sorry, there are no images matching your search query. Please try again.`);
        loadMoreBtn.hide();}
        else{                
        refs.gallery.insertAdjacentHTML('beforeend', photoCards(hits));
        const lightbox = new SimpleLightbox('.gallery a', { captionsData : "alt", captionDelay : 250, navText : ['←','→']});
        lightbox.on("show.simplelightbox");}
    if(hits.length !== 0) {
        Notify.success(`Hooray! We found ${hits.length} images.`);
        loadMoreBtn.show();
        }
    message(hits);
    if (hits.length < 40 && hits.length !== 0) {
        Notify.failure(`We're sorry, but you've reached the end of search results.`);
        loadMoreBtn.hide();}

}

function clearHitsCards(){
    refs.gallery.innerHTML = '';
}

// function message(hits){
//     if (hits.length !== 0) {
//         let totalHits = hits.length;
//         for(let i = 0; i <= 1; i += hits.length){
//         const total = totalHits + i;
//         Notify.success(`Hooray! We found ${total} images.`);
//         loadMoreBtn.show();
//         };
//         console.log(total);
            
//     }
// }
 
      













// function onInput(evt){
//     const message = evt.currentTarget.value;
//     console.log(message);
//     fetchUrl(message);
// }
// // 



// const URL = "https://pixabay.com/api/?key="+BASE_URL+"&q="+encodeURIComponent('red roses');


// export  function fetchCountry(name){
//     const url = `https://pixabay.com/api/?key=`
//     return fetch(`${url}${BASE_URL}&${name}=image_type,orientation,safesearch`)
//     .then(response => {
//      if (!response.ok) {
//        Notify.failure(`"Oops, there is no country with that name"`);
//        throw new Error(response.status);
//      }
//      return response.json();
//    })
//    .catch(error => console.log(error));
//   }


