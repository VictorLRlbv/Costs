import { FormEventHandler, useState } from "react";
import Button from "../../../layout/ButtonPurple/button";
import Input from "../../../layout/InputForm/input";
import "../ProjectForm/projectForm.scss";

export default function ServiceForm({handleSubmit, btnText, projectData}: {handleSubmit: any, btnText: string, projectData: any}) {

    let [service, setService] = useState({})

  function submit(e: any) {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }
  function handleChange(e: any) {
    e.target.value = e.target.value
    
    setService({...service, [e.target.name]: e.target.value})
  }

  return (
    <form className="form start" onSubmit={submit}>
      <Input
        labelText="Nome do serviço"
        type="name"
        name="name"
        placeholder="Insira o nome do serviço"
        // value={projectData.services[projectData.services.length - 1]}
        handleOnChange={handleChange}
      />
      <Input
        labelText="Custo do serviço"
        type="number"
        name="cost"
        placeholder="Insira o valor total"
        // value={projectData.services[projectData.services.length - 1]}
        handleOnChange={handleChange}
      />
      <Input
        labelText="Descrição"
        type="text"
        name="description"
        placeholder="Descreva o serviço"
        // value={projectData.services[projectData.services.length - 1]}
        handleOnChange={handleChange}
      />
      <Button text={btnText} type="submit" id="sbmtBtn" />
    </form>
  );
}
