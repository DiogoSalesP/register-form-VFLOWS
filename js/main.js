import { collectProducts, countProduct } from "./utils/products.js";
import { searchCEP } from "./viacepAPI.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const address = document.getElementById('address');
const addressNumber = document.getElementById('address-number')
const complement = document.getElementById('complement');
const neighborhood = document.getElementById('neighborhood');
const municipality = document.getElementById('municipality');
const state = document.getElementById('state');
const company = document.getElementById('company');
const cnpj = document.getElementById('cnpj');
const fictitiousName = document.getElementById('fictitious-name');
const stateRegistration = document.getElementById('state-registration');
const municipalRegistration = document.getElementById('municipal-registration');
const contactPerson = document.getElementById('contact-person');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const modal = document.getElementById('modal');
const cep = document.getElementById('cep');
const btnSaveSupplier = document.getElementById('btn-save-supplier');

btnSaveSupplier.addEventListener('click', async (event) => {
  if (
    !company.value || 
    !cnpj.value || 
    !fictitiousName.value || 
    !cep.value || 
    !address.value || 
    !addressNumber.value ||
    !complement.value ||
    !neighborhood.value ||
    !municipality.value ||
    !state.value ||
    !contactPerson.value ||
    !phone.value ||
    !email.value
  ) {
    return alert('DADOS DO FORNECEDOR: campos com * são obrigatórios')
  }
  if (!emailRegex.test(email.value)) {
    return alert('Dados do email inválidos')
  }

  if (countProduct > 0) {
    event.preventDefault();
    const producjs = collectProducts();
    const viewBrowser = {
      razaoSocial: company.value,
      nomeFantasia: fictitiousName.value,
      cnpj: cnpj.value,
      inscricaoEstadual: stateRegistration.value,
      inscricaoMunicipal: municipalRegistration.value,
      nomeContato: contactPerson.value,
      telefoneContato: phone.value,
      emailContato: email.value,
      produtos: producjs
    }
    console.log(JSON.stringify(viewBrowser, null, 2));
    modal.showModal();
  } else {
    alert('Obrigatório a inclusão de pelo menos 1 item')
  }
})

cep.addEventListener('input', async (event) => {
  const eventCep = event.target.value;
  if (eventCep.length === 8) {
    const resultCep = await searchCEP(eventCep);
    neighborhood.value = resultCep.bairro !== undefined ? resultCep.bairro : '';
    municipality.value = resultCep.localidade !== undefined ? resultCep.localidade : '';
    address.value = resultCep.logradouro !== undefined ? resultCep.logradouro : '';
    state.value = resultCep.estado !== undefined ? resultCep.estado : '';
  }
})
