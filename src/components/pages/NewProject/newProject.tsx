import { useNavigate } from 'react-router-dom'
import ProjectForm from '../Projects/ProjectForm/ProjectForm'
import './newProject.scss'

export default function NewProject() {

    const                    history = useNavigate()

    function createPost(project: any) {
        project.cost = 0
        project.services = []
        fetch('http://localhost:5050/projects', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(project)
        }).then(
            res => res.json()
        ).then(res => {
            history('/projects', { state: { message: "Projeto criado com sucesso" } });
        }
        ).catch(err => {throw new Error(err)})
    }

    return (
        <div className="newProjectContainer">
            <h1>Criar projeto</h1>
            <p>Crie seu projeto e depois adicione seus serviços</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar projeto' projectData={''}/>
        </div>
    )
} 