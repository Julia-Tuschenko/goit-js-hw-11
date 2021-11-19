import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {fetchUrl} from './fetch';


const refs = {
    form: document.querySelector("#search-form"),
    input: document.querySelector("#search-form  input"),
};

// refs.form.addEventListener('submit', onFornSubmit);
refs.input.addEventListener('input', onInput);


// function onFornSubmit(){

// }


function onInput(evt){
    const message = evt.currentTarget.value;
    console.log(message);
    fetchUrl(message);
}
// 



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


