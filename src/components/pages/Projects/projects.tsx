import { Link, useLocation } from "react-router-dom";
import Message from "../../layout/Message/message";
import './projects.scss'
import Loading from "../../layout/Loading/Loading";
import Container from "../../layout/Container/container";
import Button from "../../layout/ButtonPurple/button";
import ProjectCard from "./ProjectCard/projectCard";
import { useEffect, useState } from "react";

export default function Projects() {
    let [projects, setProjects] = useState<any[]>([])
    let [removeLoading, setRemoveLoading] = useState(false)
    let [projectMessage, setProjectMessage] = useState('')

    let location = useLocation()
    let message = location.state && location.state.message ? location.state.message : ''

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5050/projects', {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data);
                setRemoveLoading(true)
            })
            .catch(err => {throw new Error(err)})
            }, 1000)
    }, [])

    function removeProject(id: string) {
        fetch(`http://localhost:5050/projects/${id}`, {
            method: 'DELETE', 
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
        .then(data => {
            setProjects(projects.filter(project => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch(err => {throw new Error(err)})
    }

    return (
        <div className="project_container">
            <div className="title_container">
                <h1>Meus projetos</h1>
                <Link to={'/newProject'}><Button type="button" text="Novo projeto" id="btnCriaProjeto"/></Link>
            </div>
            {message && <Message msg={message} type="success"/>}
            {projectMessage && <Message msg={projectMessage} type="success"/>}
            <h2 className="title_projects">Projetos</h2>
            <Container customClass="start">
                {projects.length > 0 && projects.map(project => {
                    return <ProjectCard name={project.name} id={project.id} budget={project.budget} category={project.category} handleRemove={removeProject} services={project.services}/>
                })}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (<h2>Não foi possível encontrar nenhum projeto. <Link to={'/newProject'}>Que tal criar uma agora</Link></h2>)}
            </Container>
        </div>
    )
}