import { Mensagens } from "../models/Mensagens";

export class MensagemRespostaView {
    private _sectionView: HTMLElement
    private _mensagens: Mensagens
    constructor(seletorElement: string, mensagens: Mensagens) {
        this._sectionView = document.querySelector(seletorElement) as HTMLDivElement
        this._mensagens = mensagens
    }
    template(mensagem: string, data: string, mensagens: Mensagens): string {
        return `
                <div class="alert alert-dark mensagemResposta mt-3 me-4 float-start" role="alert">
                    <p class="text-secondary dataMensagem">${data.replace('"','').replace('"', '')}</p>
                    <p>${mensagem}</p>
                </div>
            `
    }
    update(mensagem: string, data: string): void {
        let template: string = this.template(mensagem, data, this._mensagens)
        this._sectionView.innerHTML += template
    }
}