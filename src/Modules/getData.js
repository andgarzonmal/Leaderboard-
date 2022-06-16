const fetchUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5KfonS3pOsrGQDeYthts/scores';

const getData = async () => {
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export default getData;