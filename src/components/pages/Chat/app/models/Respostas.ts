import { Mensagem } from "./Mensagem";

export class Respostas {
    private _respostas: Mensagem[] = []
    adiciona(mensagem: Mensagem): void {
        this._respostas.push(mensagem)
    }
    lista(): ReadonlyArray<Mensagem> {
        return this._respostas
    }
}