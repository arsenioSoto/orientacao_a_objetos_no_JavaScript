class Cliente {
    nome;
    bi;

}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valorSacado) {
        if (this.saldo >= valorSacado) {
            this.saldo -= valorSacado;
        }
    }
}

const cliente = new Cliente();
const cliente1 = new Cliente();

cliente.nome = "Arsenio";
cliente.bi = 1273253;

cliente1.nome = "Soto";
cliente1.bi = 1523213;

const contaCorrente = new ContaCorrente();
contaCorrente.saldo = 0;
contaCorrente.agencia = 123;
console.log(contaCorrente.saldo);

contaCorrente.saldo = 200;

//console.log(contaCorrente.saldo);

//let valorSacado = 300;
//if (contaCorrente.saldo >= valorSacado) {


//}

//console.log(contaCorrente.saldo);

contaCorrente.sacar(201);

console.log(contaCorrente.saldo);