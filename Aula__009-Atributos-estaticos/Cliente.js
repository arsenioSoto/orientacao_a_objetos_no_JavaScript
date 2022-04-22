export class Cliente {
    static numeroCliente = 0;
    nome;
    _bi;

    get bi() {
        return this._bi;
    }


    constructor(nome, bi) {
        this.nome = nome;
        this._bi = bi;

        Cliente.numeroCliente += 1;
    }


}