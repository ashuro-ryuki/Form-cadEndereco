
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
// verifica se CEP é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);// testa numero infromado com expressão regular
 
//função para preencher fomrulario
const  preencherFormulario = (endereco) => {
   document.getElementById('rua').value = endereco.logadouro
   document.getElementById('bairro').value = endereco.bairro
   document.getElementById('estado').value = endereco.uf
   document.getElementById('cidade').value = endereco.localidade
}