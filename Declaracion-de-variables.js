//Declaracion de variables

var variable;
let variable_let;

// Declaracion de una constante const constante;
const constante = "Hola soy una constante";

var a = 1;
console.log(a);

a = 4;
console.log(a);

console.log(constante);
// constante = "adios" } Marca error debido a que ya esta definida la constante

let b = 1;
console.log(b);

b=5;
console.log(b);

//Var afecta a todo el codigo y let solo en donde se esta definiendo


var variable = "Hola soy una variable var";

for(var i = 0; i < 3;i++){
    var variable = "Soy la segunda variable"
}

console.log(variable);

//Diferencia entre un valor LET y un valor VAR

let variableLet = "Hola soy una variable LET";

for(let i = 0; i < 3;i++){
    let variableLet = "Soy la segunda variable LET"
}

console.log(variableLet);

//////////////////////////////////
// type of es un interprete

var num = 4

console.log(typeof num)

num = "Hola soy un Num"

console.log(typeof num)