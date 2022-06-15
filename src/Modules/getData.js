const fetchUrl= "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UFEFOvdlSZM4VGo3r901/scores"

// fetch(fetchUrl, { 
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//     }
// }).then(function(response) {
//     return response.text();
// }).then(function(data) {
//     console.log(data);
// })


const getData = async () => {
    const response = await fetch(fetchUrl)
    const data = await response.json()
}


export default getData