const inputScore = document.getElementById('score-input');
const inputName = document.getElementById('name-input');

const uploadedData = () => {
  const typedData = {
    user: inputName.value,
    score: inputScore.value,
  };
  inputName.value = '';
  inputScore.value = '';
  return typedData;
};

const updateData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5KfonS3pOsrGQDeYthts/scores', {
    method: 'POST',
    body: JSON.stringify(uploadedData()),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export default updateData;
