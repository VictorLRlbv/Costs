import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../../layout/ButtonPurple/button";
import Input from "../../../layout/InputForm.scss/input";
import Select from "../../../layout/InputForm.scss/select";
import './projectForm.scss'

export default function ProjectForm({handleSubmit, projectData, btnText}: {handleSubmit: any, projectData: any, btnText: string}) {
    let [categories, setCategories] = useState([])
    let [project, setProject] = useState(projectData || {})

    function submit(e: any) {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e: ChangeEvent) {
        let eTarget = e.target as HTMLInputElement
        setProject({...project, [eTarget.name]: eTarget.value})  
    }

    function handleCategory(e: ChangeEvent) {
        let eTarget = e.target as HTMLSelectElement
        setProject({...project, category: {
            id: eTarget.value,
            name: eTarget.options[eTarget.selectedIndex].text
        }})
    }

    useEffect(() => {
        fetch('http://localhost:5050/categories', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
        .catch(() => {throw new Error('Não foi possível se conectar ao servidor para ter acesso as categorias.')})
    }, [])


    return (
        <form className="form" onSubmit={submit}>
            <Input labelText="Nome do projeto" placeholder="Insira o nome do projeto" name="name" type="text" handleOnChange={handleChange} />
            <Input type="number" name="budget" placeholder="Insira o orçamento para o projeto" labelText="Orçamento do projeto" handleOnChange={handleChange} />
            <Select name="category-id" labelText="Categoria do projeto" handleOnChange={handleCategory} options={categories} />
            <Button text={btnText} type="submit" id="btnSubmit"></Button>
        </form>
    )
}