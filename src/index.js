import './style.css';
import { deployData } from './Modules/updateDom.js';
import updateData from './Modules/updateData.js';

const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.form');
deployData();

refresh.addEventListener('click', () => {
  deployData();
});

submit.addEventListener('submit', (e) => {
  e.preventDefault();
  updateData();
});
