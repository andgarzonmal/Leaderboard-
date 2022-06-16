import getData from './getData.js';

const scoreList = document.querySelector('.scores-list');

export const addhtml = ({ user, score }) => `
  <li class="list-item"> 
    ${user}:${score}
  </li>
`;

export const deployData = async () => {
  const { result } = await getData();
  scoreList.innerHTML = '';
  let sorted = result.sort((a, b) => b.score - a.score)
  sorted.forEach((element) => {
    scoreList.insertAdjacentHTML('beforeend', addhtml(element));
  });
};
