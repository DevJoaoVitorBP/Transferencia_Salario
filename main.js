//Importing functions from the auxiliar.js
const {gets, print} = require('./auxiliar');

//Inserting the variables
const salarioBruto = gets(0);
const beneficioSalario = gets(1);
let porcentualDeImposto = 0;

//Calculating the tax that will be applied
if (salarioBruto <= 1100) {
    porcentualDeImposto = 0.05;
} else if (salarioBruto >= 1100 && salarioBruto <= 2500){
    porcentualDeImposto = 0.10;
} else{
    porcentualDeImposto = 0.15;
} 


//Aplying the tax on the salary
const imposto = salarioBruto * porcentualDeImposto;

//Calculating the salaray that will be transferred
const salarioLiquido = salarioBruto - imposto + beneficioSalario;

print("Salário a ser transferido: " + salarioLiquido.toFixed(2));