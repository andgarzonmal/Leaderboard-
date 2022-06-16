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
  result.sort((a, b) => b.id - a.id);
  result.forEach((element) => {
    scoreList.insertAdjacentHTML('beforeend', addhtml(element));
  });
};
