// Funções de string

let texto = String(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque minima non perspiciatis optio minus voluptatem veniam maiores, ipsam numquam quisquam cupiditate quae, ullam modi sed laudantium. Fuga repudiandae autem necessitatibus."
);

// nr de caracteres
console.log("Tamanho: " + texto.length);

console.log("Maiúsculo: " + texto.toUpperCase());
console.log("Minúsculo: " + texto.toLowerCase());
console.log("Caracter na posição: " + texto.charAt(2));


// Funções de numeros
let num = 10;
console.log("Binário: " + num.toString);

//Biblioteca Math
console.log("PI redondo: " + Math.round(Math.PI));
console.log("PI com 4 números depois da virgula: " + Math.PI.toFixed(4));

// Decisão
let idade = 16;

if (idade >= 18) 
{
    console.log("Você pode apostar no  tigrinho");} else 
{
    console.log("Você NÃO pode apostar no tigrinho");}

let textinho = "";

if (textinho) {
    console.log("Tem algo definido");
} else if (textinho == " ") {
    console.log("Espaço em branco");
} else {
    console.log("Tem muita coisa escrita lá. Conteúdo: " + textinho);
}

let opcao = 2024;

switch (opcao) {
    case 0:
        console.log("0");
        break;
    case 1:
        console.log("1");
    default:
        console.log("Diferente");
        break;
}

let idade2 = 18;

let msg = idade2 >= 18 ? "Maior de 18" : "Menor de 18";

console.log(msg);

//  Laços
for(let i=0;i<10;i++) {
    console.log(i=1);
}

let x = 0;

while(true) {
    console.log(x);
    x++;

    if (x >= 10) break;
}