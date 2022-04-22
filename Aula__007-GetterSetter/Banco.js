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
contaCorrente.cliente = cliente1;
contaCorrente.depositar(100);
contaCorrente.depositar(200);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1212;

let valor = 200;
contaCorrente.transferir(valor, conta2);
console.log("valor: " + valor);
console.log(conta2.saldo);