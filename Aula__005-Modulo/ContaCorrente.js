export class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }

        console.log("maior");
    }


    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
}