import { Mensagem } from "./Mensagem";

export class Mensagens {
    private _mensagens: Mensagem[] = []
    adiciona(mensagem: Mensagem): void {
        this._mensagens.push(mensagem)
    }
    lista(): ReadonlyArray<Mensagem> {
        return this._mensagens
    }
}
