import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Arsenio", 1232715737);
//cliente1.nome = "Arsenio";
//cliente1.bi = 1232715737;

const cliente2 = new Cliente("Junior", 263684763652);
const cliente3 = new Cliente("Junior", 263684763652);
const cliente4 = new Cliente("Junior", 263684763652);
const cliente5 = new Cliente("Junior", 263684763652);
//cliente2.nome = "Junior";
//cliente2.bi = 263684763652;


const contaCorrente = new ContaCorrente(1010, cliente1);
//contaCorrente.agencia = 1010;
//contaCorrente.cliente = cliente1;
contaCorrente.depositar(100);
contaCorrente.depositar(200);

const conta2 = new ContaCorrente(1212, cliente2);
const conta3 = new ContaCorrente(1212, cliente2);
const conta4 = new ContaCorrente(1212, cliente2);
const conta5 = new ContaCorrente(1212, cliente2);
const conta6 = new ContaCorrente(1212, cliente2);
const conta7 = new ContaCorrente(1212, cliente2);
//conta2.cliente = cliente2;
//conta2.agencia = 1212;

let valor = 200;
contaCorrente.transferir(valor, conta2);
console.log("valor: " + valor);
console.log(conta2.saldo);
console.log(cliente2);
console.log(ContaCorrente.numero);
console.log(Cliente.numeroCliente)