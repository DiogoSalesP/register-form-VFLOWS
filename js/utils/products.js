import { createProduct } from "../componentProducts.js";

export let countProduct = 0;

const product = document.getElementById('product');
const btnAddProduct = document.getElementById('btn-add-product');

export function collectProducts() {
  const produtos = [];
  for (let i = 0; i < countProduct; i++) {
    const card = document.querySelector(`[data-index='${i}']`);
    if (card) {
      const form_product = document.getElementById(`product-${i}`).value;
      const undMeasurement = document.getElementById(`unid-measurement-${i}`).value;
      const qtdStockStr = document.getElementById(`qtd-stock-${i}`).value;
      const vlUnitStr = document.getElementById(`vl-unit-${i}`).value;
      const qtdStock = parseFloat(qtdStockStr.replace(',', '.')) || 0;
      const vlUnit = parseFloat(vlUnitStr.replace(',', '.')) || 0;
      const vlTotal = qtdStock * vlUnit;
      document.getElementById(`vl-total-${i}`).value = vlTotal.toFixed(2).toLocaleString('pt-BR');
      produtos.push({ indice: i + 1, form_product, undMeasurement, qtdStock, vlUnit, vlTotal: vlTotal.toFixed(2) });
    }
  }

  return produtos;
}

export function renderInitialProducts() {
  const card = createProduct(countProduct);
  product.appendChild(card);
  countProduct++;
}

export function addProduct() {
  const card = createProduct(countProduct);
  product.appendChild(card);
  countProduct++;
  collectProducts();
}

export function rmProduct(index) {
  const card = product.querySelector(`[data-index='${index}']`);
  if (card) {
    product.removeChild(card);
  }
  collectProducts();
}

product.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-remove-product')) {
    const card = event.target.closest('.card');
    const index = Number(card.dataset.index);
    rmProduct(index);
  }
})

btnAddProduct.addEventListener('click',  addProduct);
renderInitialProducts();