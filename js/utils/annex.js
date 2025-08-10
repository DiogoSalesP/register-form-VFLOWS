import { createAnnex } from "../componentAnnex.js";

const annex = document.getElementById('annex')
const btnAddAnnex = document.getElementById('bnt-add-annex');

let countAnnex = 0;

export function renderInitialAnnex() {
  const card = createAnnex(countAnnex);
  annex.appendChild(card);
}

export function collectAnnex() {
  const annex = [];
  for (let i = 0; i < countAnnex; i++) {
    const card = document.querySelector(`[data-index='${i}']`);
    if (card) {
      const annexItem = document.getElementById(`annex-${i}`).value;
      annex.push(annexItem);
    }
  }
  return annex;
}

export function addAnnex() {
  const card = createAnnex(countAnnex);
  annex.appendChild(card);
  countAnnex++;
  collectAnnex();
}

export function rmAnnex(index) {
  const card = annex.querySelector(`[data-index='${index}']`);
  if (card) {
    annex.removeChild(card);
  }
  collectAnnex();  
}

annex.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-remove-annex')) {
    const card = event.target.closest('.card-annex');
    const index = Number(card.dataset.index);
    rmAnnex(index);
  }
})


btnAddAnnex.addEventListener('click', addAnnex);
renderInitialAnnex();