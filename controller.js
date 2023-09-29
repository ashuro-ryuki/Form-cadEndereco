
'use strict'; // Modo restrito
// Consumindo API de CEP, do Viacep
// https://viacep.com.br/

// Função para limpar o formulário
const limparFormulario = () => {
   document.getElementById('rua').value
   document.getElementById('bairro').value
   document.getElementById('estado').value
   document.getElementById('cidade').value
}