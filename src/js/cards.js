import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const refs={
    form: document.querySelector("#search-form"),
    input: document.querySelector("#search-form  input"),
};

refs.form.addEventListener('submit', onFornSubmit);
refs.input.addEventListener('input', onInput);


function onFornSubmit(){

}


function onInput(evt){
    const message = evt.currentTarget.value;
    console.log(message);
}
// const BASE_URL = (`https://pixabay.com/api/everything?key=`);

// const options = {
//     headers: {
//         Autorizator: `24399696-8e36fcdd9504681aa333f9a82`,
//     }
// };

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


// fetch(`https://pixabay.com/api/everything?key=24399696-8e36fcdd9504681aa333f9a82&q=cat`)
// .then(res => json(res))
// .them(console.log)
// Список параметров строки запроса которые тебе обязательно необходимо указать:

// key - твой уникальный ключ доступа к API.
// q - термин для поиска. То, что будет вводить пользователь.
// image_type - тип изображения. Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии. Задай значение horizontal.
// safesearch - фильтр по возрасту. Задай значение true.