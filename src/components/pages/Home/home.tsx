import './home.scss'
import { Link } from 'react-router-dom'
import Button from '../../layout/ButtonPurple/button'

export default function Home() {
    return (
        <section className='home-container'>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <Link to='/newProject'><Button text='Criar um novo projeto' type="button" id=''/></Link>
            <img src="https://cdn-icons-png.flaticon.com/512/1986/1986656.png" alt="Imagem figurativa do rendimento da costs" />
        </section>
    )
}