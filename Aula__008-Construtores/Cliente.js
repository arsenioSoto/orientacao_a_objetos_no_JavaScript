export class Cliente {
    nome;
    _bi;

    get bi() {
        return this._bi;
    }


    constructor(nome, bi) {
        this.nome = nome;
        this._bi = bi;
    }


}