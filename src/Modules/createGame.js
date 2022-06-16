// this module was created just to show how the id
// was obtained this module has no othe use in the app

const headersList = {
  Accept: '*/*',
  'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
  'Content-Type': 'application/json',
};

const bodyContent = JSON.stringify({
  name: 'My cool new game',
});

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  method: 'POST',
  body: bodyContent,
  headers: headersList,
}).then((response) => response.text()).then((data) => data.result);

// id received oeMwIfz4iX4Uqc9HOtgF