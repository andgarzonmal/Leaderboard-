// this module was created just to show how the id was obtained this module has no othe use in the app 

let headersList = {
  "Accept": "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  "Content-Type": "application/json"
 }
 
 let bodyContent = JSON.stringify({ 
   "name": "My cool new game" 
 });
 
 fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games", { 
   method: "POST",
   body: bodyContent,
   headers: headersList
 }).then(function(response) {
   return response.text();
 }).then(function(data) {
   console.log(data);
 })

 // id received oeMwIfz4iX4Uqc9HOtgF