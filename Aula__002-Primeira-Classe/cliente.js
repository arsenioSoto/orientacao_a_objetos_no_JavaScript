class Cliente {
    nome;
    bi;
    agencia;
    saldo;
}

const cliente = new Cliente();
const cliente1 = new Cliente();

cliente.nome = "Arsenio";
cliente.bi = 123444444;
cliente.agencia = 123;
cliente.saldo = 0;

cliente1.nome = "Arsenio";
cliente1.bi = 123444444;
cliente1.agencia = 123;
cliente1.saldo = 0;

console.log(cliente, cliente1);