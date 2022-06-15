import './style.css';
import getData from './Modules/getData.js';

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
//     method: 'POST',
//     body: JSON.stringify({
//         "name": "the new game name" 
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     })
//     .then((response) => response.json())
//     .then((json) => console.log(json.result));


getData()
