export function createAnnex(index) {
  const div = document.createElement('div');
  div.className = 'card-annex'
  div.dataset.index = index;
  
  div.innerHTML = `
      <div class="btn-annex">
        <button id="btn-remove-annex" class="btn-remove-annex">
          <span class="material-symbols-outlined">delete</span>
        </button>
        <button id="btn-add-annex" class="btn-add-annex">
          <span class="material-symbols-outlined">
            visibility
          </span>
        </button>
      </div>
      <div class="item-annex">
        <input type="file" id="file-annex-${index}">
      </div>
  `;
  return div;
}

