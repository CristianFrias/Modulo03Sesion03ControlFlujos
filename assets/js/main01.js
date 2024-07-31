// Estandar Ecmascript5
function saludar(nombre, edad, salarioHora, horasTrabajadas){
    var salario = calcularSalario(salarioHora, horasTrabajadas)
    var mensaje = `Hola, ${nombre} tu edad es ${edad} y tu salario es de ${salario}`
    alert(mensaje)
}

// var nombre = prompt("Ingrese su nombre");
// var edad = prompt("Ingrese su edad");

// saludar(nombre, edad)

function calcularSalario(salarioBasicoHora, horasTrabajadas){
    var salario = salarioBasicoHora * horasTrabajadas
    return salario
}

var nom = prompt("Ingrese su nombre");
var ed = prompt("Ingrese su edad");
var salarioHora = prompt("Ingrese su salario por hora");
var horasTrabajadas = prompt("Ingrese sus horas trabajadas");

// saludar(nom, ed)
saludar(nom, ed, salarioHora, horasTrabajadas)

// console.log(calcularSalario(salarioHora, horasTrabajadas));

// var salarioNeto =calcularSalario(salarioHora, horasTrabajadas);
// alert(`Su salario es ${salarioNeto}`)