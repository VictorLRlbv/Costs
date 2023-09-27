import "./chat.scss";
import { MensagemController } from "./app/controllers/MensagemController";
import { useState } from "react";

export default function Chat() {
  let [msg, setMsg] = useState("")
  let novaData = new Date();
  let novaDataCaracteristicas = novaData.toString().split(" ");
  let dia = novaDataCaracteristicas[2];
  let mes = novaData.getMonth();
  let hora = `${novaDataCaracteristicas[4].split(":", 2)}`;
  let date = `${dia}/${mes + 1} ${hora.replace(",", ":")}`;
  let controller = new MensagemController(date, "#textField");

  return (
    <main>
      <section id="chat"></section>
      <section className="bg-secondary-subtle main-chat">
        <section className="chatSection align-items-end" id="chat"></section>
        <div
          className={`input-group fixed-bottom w-100 pb-3 campo-text`}
          id="campo-fill-text"
        >
          <input
            onChange={(e) =>{
                setMsg(e.target.value)
            }}
            id="textField"
            className="form-control text_field"
            placeholder="Converse com nossos agentes"
          ></input>
          <button
            className="container-send border border-0"
            id="btnMensagem"
            onClick={(event) => {
              if (msg === "") {
                throw new Error("Digite algo antes de mandar!");
              }
              controller.cria();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-send aviaozinho-de-papel"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
}
