import {Link} from 'react-router-dom'
import Container from '../Container/container'
import './navbar.scss'
import Button from '../ButtonPurple/button'
export default function Navbar({imgSrc}: {imgSrc: string}) {
    return  (
        <nav className='navbar'>
            <Container customClass=''>
                <Link to={'/'}><li><h1><img src={imgSrc} alt="Logo da Costs (Uma moeda brilhante dourada)"/></h1></li></Link>
                <ul className='list'>
                    <li className='list-item'><Link to={'/'}><Button type='button' id='homeBtn' text='HOME'></Button></Link></li>
                    <li className='list-item'><Link to={'/contact'}><Button type='button' id='contactBtn' text='CONTATO'></Button></Link></li>
                    <li className='list-item'><Link to={'/projects'}><Button type='button' id='projectsBtn' text='PROJETOS'></Button></Link></li>
                    <li className='list-item'><Link to={'/company'}><Button type='button' id='companyBtn' text='PLANOS'></Button></Link></li>
                </ul>
            </Container>
        </nav>
    )
}