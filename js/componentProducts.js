export function createProduct(index) {
  const div = document.createElement('div');
  div.className = 'card'
  
  div.dataset.index = index;
  
  div.innerHTML = `
      <button id="btn-remove-product" class="btn-remove-product">
        <span class="material-symbols-outlined">delete</span>
      </button>
    <fieldset>
      <legend>Produto - ${index + 1}</legend>
      <div class="produtositem">
        <div>
          <img class="img-produtc" src="../assets/box_product.svg" alt="image">
        </div>
        <div>
          <div>
            <label for="product">Produto
              <input type="text" id="product-${index}">
            </label>
          </div>
          <div  class="produtosund">
            <label>UND. Medida
              <select id="unid-measurement-${index}">
                <option value=""></option>
                <option value="unidade">UND</option>
                <option value="quilograma">KG</option>
                <option value="pacote">PCT</option>
                <option value="fardo">FD</option>
                <option value="caixa">CX</option>
              </select>
            </label>
            <label for="qtd-medida">QDTDE. em Estoque
              <input type="text" name="qtd-medida" id="qtd-stock-${index}">
            </label>
            <label for="vl-unitario">Valor Unitário
              <input type="text" name="vl-unitario" id="vl-unit-${index}">
            </label>
            <label for="vl-total">Valor Total
              <input type="text" name="vl-total" class="vl-total" id="vl-total-${index}" disabled>
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  `;
  return div;
}

