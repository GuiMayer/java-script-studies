// Variáveis
let variavel = 'valor';

// Imprimir
console.log(variavel);

// Operações Matemáticas
let a = 5;
let b = 3;
let soma = a + b;
console.log(soma);

// Função
function exemplo(valor) {
  console.log(`Texto ${valor}!`);
}
exemplo('exemplo');

// Tipos Primitivos
let numeroInteiro = parseInt('5');
let numeroReal = parseFloat('3.14');
let booleano = true;
let texto = 'string';

// Operadores Aritméticos
let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let potencia = a ** b;
let divInteira = Math.floor(a / b);
let restoDivisao = a % b;

// Exponenciação
let raizQuadrada = Math.sqrt(a);
let exponenciacao = Math.pow(a, b);

// Operador Walrus
let condicao = true;
if (condicao) {
  let resultado = 'verdadeiro';
  console.log(resultado);
}
