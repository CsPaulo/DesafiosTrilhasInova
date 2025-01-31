//1
let nome = "Paulo Rafael";
console.log(nome);

//2
let idade = 25,
  altura = 1.75;
console.log(idade + " anos e " + altura + " de altura");

//3
let preco = 50,
  desconto = 0.2;
let precoDesconto = preco - preco * desconto;
console.log(`O preco com desconto é de R$ ${ValorDesconto}`);

//4
let temperatura = 30;
if (temperatura > 25) {
  console.log("Está calor!");
} else {
  console.log("Está fresco!");
}

//5
let idade2 = 18;
if (idade2 >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}

//6
let nota = 6;
if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

//7
let numero1 = 10,
  numero2 = 20;
if (numero1 == numero2) {
  console.log("Os números são iguais");
} else {
  console.log("Os números são diferentes");
}

//8
let nome2 = "Paulo",
  idade3 = 20;
console.log(`Olá, meu nome é ${nome2} e eu tenho ${idade3} anos`);

//9
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//10
for (let numero3; numero3 !== 5; ) {
  numero3 = parseInt(prompt("Digite um número"), 10);
}

//11
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

//12
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//13
function calcularAreaCirculo(raio) {
  return Math.PI * Math.pow(raio, 2);
}
let raio = 5;
let area = calcularAreaCirculo(raio);
console.log(`A área do círculo de raio ${raio} é ${area}`);

//14
//Declara duas variáveis, numero4 e numero5, e atribui os valores 10 e 20 a elas
let numero4 = 10,
  numero5 = 20;

//Declara uma variável soma e atribui a soma de numero4 e numero5 a ela
let soma = numero4 + numero5;

//Mostra um alerta com a mensagem "A soma de 10 e 20 é 30"
console.log(`A soma de ${numero4} e ${numero5} é ${soma}`);

//15
function calcularSoma(x, y) {
  return x + y;
}

function exibirResultado(z) {
  console.log(`O valor de z é ${z}`);
}
let x = 10;
let y = 20;
let z = calcularSoma(x, y);
exibirResultado(z);
