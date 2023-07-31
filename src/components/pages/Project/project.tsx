import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../layout/Loading/Loading";
import Container from "../../layout/Container/container";
import Button from "../../layout/ButtonPurple/button";
import { BsPencil } from "react-icons/bs";
import "./project.scss";
import { FaBookOpen, FaCheck, FaMoneyBill, FaSearch } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import ProjectForm from "../Projects/ProjectForm/ProjectForm";
import Message from "../../layout/Message/message";
import ServiceForm from "../Projects/ServicesForm/ServicesForm";
import ServiceCard from "../Projects/ServiceCard/ServiceCard";
import {v4 as uuidv4} from "uuid"

export default function Project() {
  let [project, setProject] = useState<any>({});
  let [services, setServices] = useState<any>({});
  let [showProjectForm, setShowProjectForm] = useState(false);
  let [showServiceForm, setShowServiceForm] = useState(false);
  let [message, setMessage] = useState("");
  let [messageType, setMessageType] = useState<"info" | "success" | "error">(
    "info"
  );
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5050/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setServices(data.services);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id]);

  function createService() {
    setMessage("");
    let lastService = project.services[project.services.length - 1];
    let newCost = parseFloat(project.cost) + parseFloat(lastService.cost);
    lastService.id = uuidv4()
    if (newCost > project.budget) {
      setMessage(
        "Orçamento do projeto ultrapassado! Cheque os valores dos serviços."
      );
      setMessageType("error");
      console.log(project.services);
      project.services.pop();
      return false;
    }

    project.cost = newCost;
    fetch(`http://localhost:5050/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        setShowServiceForm(false)
      })
      .catch(err => {throw new Error(err)})
  }

  function removeService(id: string, cost: string) {
    setMessage('')
    let servicesUpdated = project.services.filter((service: any) => service.id !== id)
    let updatedProject = project
    updatedProject.services = servicesUpdated
    setServices(servicesUpdated)
    project.cost = parseFloat(updatedProject.cost) - parseFloat(cost)
    fetch(`http://localhost:5050/projects/${updatedProject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProject)
    })
    .then(res => res.json())
    .then(data => {
      setMessage('Serviço excluído com sucesso!')
      setMessageType('success')
    })
    .catch(err => {
      setMessage(JSON.stringify(err))
      setMessageType('error')
      throw new Error(err)
    })

  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  function editPost(project: any) {
    setMessage("");

    if (project.budget < project.cost) {
      // Verificação de orçamento
      setMessage("O orçamento não pode ser menor que o custo do projeto");
      setMessageType("error");
      return false;
    }
    fetch(`http://localhost:5050/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage("Projeto editado com sucesso!");
        setMessageType("success");
        setProject(data);
        setShowProjectForm(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  return (
    <>
      {project.name ? (
        <div className="container_project_details">
            {message && <Message type={messageType} msg={message} />}
            <section className="project_details">
              <div className="project_head">
                <h1>Projeto: {project.name}</h1>
                <button
                  className="button_container"
                  onClick={toggleProjectForm}
                >
                  {!showProjectForm ? (
                    <>
                      <Button
                        text={"Editar projeto"}
                        type="button"
                        id="editProject"
                      />
                      <BsPencil />
                    </>
                  ) : (
                    <>
                      <Button text={"Fechar"} type="button" id="editProject" />
                      <FaCheck />
                    </>
                  )}
                </button>
              </div>
              {!showProjectForm ? (
                <section className="project_info">
                  <p className="description_p">
                    <FaBookOpen className="icon" />
                    <span>Categoria: </span> {project.category.name}
                  </p>
                  <p className="description_p">
                    <TbMoneybag className="icon" />
                    <span>Total de orçamento: </span> {project.budget}
                  </p>
                  <p className="description_p">
                    <FaMoneyBill className="icon" />
                    <span>Total utilizado: </span> {project.cost}
                  </p>
                </section>
              ) : (
                <section className="project_info">
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Salvar edição"
                    projectData={project}
                  />
                </section>
              )}
              <section className="services">
                <section className="services_head">
                  <h2>Adicione um serviço</h2>
                  <button
                    className="button_container"
                    onClick={toggleServiceForm}
                  >
                    {!showServiceForm ? (
                      <>
                        <Button
                          text={"Adicionar serviços"}
                          type="button"
                          id="editProject"
                        />
                        <BsPencil />
                      </>
                    ) : (
                      <>
                        <Button
                          text={"Fechar"}
                          type="button"
                          id="editProject"
                        />
                        <FaCheck />
                      </>
                    )}
                  </button>
                </section>
                {!showServiceForm ? (
                  <section className="project_info">
                    <Container customClass="start service_containers">
                      {services.length > 0 && (
                        <div className="cards">
                          {services.map((service: any) => {
                            return (
                              <ServiceCard
                                id={service.id}
                                name={service.name}
                                cost={service.cost}
                                key={service.id}
                                description={service.description}
                                handleRemove={removeService}
                              />
                            );
                          })}
                        </div>
                      )}
                      {services.length === 0 && (
                        <div>
                          <h1>
                            Não foi possível encontrar serviços{" "}
                            <FaSearch className="searchIcon" />
                          </h1>
                          <p onClick={toggleServiceForm} className="service_containers_p">
                            Quer criar um agora?
                          </p>
                        </div>
                      )}
                    </Container>
                  </section>
                ) : (
                  <section className="project_info">
                    <ServiceForm
                      btnText="Adicionar serviço"
                      handleSubmit={createService}
                      projectData={project}
                    />
                  </section>
                )}
              </section>
            </section>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
