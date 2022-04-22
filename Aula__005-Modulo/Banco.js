import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Arsenio";
cliente1.bi = 1232715737;

const cliente2 = new Cliente();
cliente2.nome = "Junior";
cliente2.bi = 263684763652;


const contaCorrente = new ContaCorrente();

contaCorrente.agencia = 1010;

contaCorrente.depositar(100);
contaCorrente.depositar(200);


console.log(contaCorrente);


const valorSacado = contaCorrente.sacar(500);
console.log(valorSacado);

console.log(contaCorrente);