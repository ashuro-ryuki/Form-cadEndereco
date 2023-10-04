'use strict'; // Modo restrito

// Consumindo API de CEP, do Viacep
// https://viacep.com.br/

// Função para limpar o formulário
const limparFormulario = () => {
  document.getElementById('rua').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('estado').value = '';
  document.getElementById('cidade').value = '';
}

// Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero); // Testa número informado com expressão regular
const cepValido = (cep) => cep.length === 8 && eNumero(cep); // Verifica o tamanho do cep digitando e executando sua função de validação do cep eNumero

// Função para preencher formulário
const preencherFormulario = (endereco) => {
  document.getElementById('rua').value = endereco.logradouro;
  document.getElementById('bairro').value = endereco.bairro;
  document.getElementById('cidade').value = endereco.localidade;
  document.getElementById('estado').value = endereco.uf;
}

// Consumo da API da ViaCEP
const pesquisarCep = async() => {
  limparFormulario();
  const url = `https://viacep.com.br/ws/${cep.value}/json/`;
  if (cepValido(cep.value)) {
    const dados = await fetch(url); // Esperar
    const address = await dados.json();
    if (address.hasOwnProperty('erro')) {
      alert('CEP não encontrado');
    } else {
      preencherFormulario(address);
    }
  } else {
    alert('CEP incorreto');
  }
}

// Adiciona evento DOM ao input do CEP para executar função pesquisarCep
document.getElementById('cep').addEventListener('focusout', pesquisarCep);