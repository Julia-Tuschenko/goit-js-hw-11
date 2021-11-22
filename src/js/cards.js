import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import NewsApiService from '../js/news-service.js';
import photoCards from '../templates/gallery_cards.hbs';
// console.log(photoCards);


const refs = {
    form: document.querySelector("#search-form"),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more'),
};

// let searchQuery = '';

const newsApiService = new NewsApiService();

refs.form.addEventListener('submit', onFornSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onFornSubmit(inquiry){
    inquiry.preventDefault();

    newsApiService.query = inquiry.currentTarget.elements.searchQuery.value; 

    newsApiService.resetPage();
    newsApiService.fetchUrl().then(hids => {
        clearHitsCards();
        appendHitsMarckup(hids);
        refs.loadMoreBtn.classList.remove('is-hidden');
    //     Notify.info(`Hooray! We found ${hids.totalHits} images.`);
    //     refs.loadMoreBtn.classList.remove('is-hidden');
    })
    // .catch(() =>
    //   Notify.failure('Sorry, there are no images matching your search query. Please try again.'),
    // );
}

function onLoadMore (){
    newsApiService.fetchUrl().then(appendHitsMarckup);
}

function appendHitsMarckup(hits){
    if (hits.length === 0) {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.');}
    // else if (hits.value === ''){
    //     Notify.failure('Please enter a value to search.')
    // } 
    else {
    refs.gallery.insertAdjacentHTML('beforeend', photoCards(hits));
    }
}

function clearHitsCards(){
    refs.gallery.innerHTML = '';
}

// function loadMore (value){
      
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


