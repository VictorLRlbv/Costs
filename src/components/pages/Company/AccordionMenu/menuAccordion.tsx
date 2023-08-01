import { useState } from 'react'
import './menuAccordion.scss'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

export default function MenuAccordion() {
    let [section1IsOpen, setSection1IsOpen] = useState(false)
    let [section2IsOpen, setSection2IsOpen] = useState(false)
    let [section3IsOpen, setSection3IsOpen] = useState(false)
    function toggleMenuSection1() {
        if(!section1IsOpen) {
            setSection1IsOpen(!section1IsOpen)
            setSection2IsOpen(false)
            setSection3IsOpen(false)
        }
    }
    function toggleMenuSection2() {
        if(!section2IsOpen) {
            setSection2IsOpen(!section2IsOpen)
            setSection1IsOpen(false)
            setSection3IsOpen(false)
        }
    }
    function toggleMenuSection3() {
        if(!section3IsOpen) {
            setSection3IsOpen(!section3IsOpen)
            setSection2IsOpen(false)
            setSection1IsOpen(false)
        }
    }
    return (
        <ul className="menu">
            <li className="item" id="mn1">
            <a className="btn" href="#mn1" onClick={toggleMenuSection1}>
                Organize tarefas {section1IsOpen ? <IoIosArrowDown/> : <IoIosArrowUp/>}
            </a>
            <div className="submenu">
            Com nossos Planos de Gerenciamento de Projetos, sua empresa estará altamente organizada. Centralize informações, estime prazos, atribua tarefas e colabore de forma eficiente. Mais produtividade, menos retrabalho. Experimente agora mesmo e alcance o sucesso!
            </div>
            </li>
            <li className="item" id="mn2">
            <a className="btn" href="#mn2" onClick={toggleMenuSection2}>
                Estime prazos {section2IsOpen ? <IoIosArrowDown/> : <IoIosArrowUp/>}
            </a>
            <div className="submenu">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat expedita ut perspiciatis tenetur rem reprehenderit quam quas quia, a repellendus libero dolore illo harum fugit qui quibusdam molestias ad?
            </div>
            </li>
            <li className="item" id="mn3">
            <a className="btn" href="#mn3" onClick={toggleMenuSection3}>
                Colabore eficientemente {section3IsOpen ? <IoIosArrowDown/> : <IoIosArrowUp/>}
            </a>
            <div className="submenu">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe totam ducimus nam iure reiciendis nihil sed reprehenderit error, fugiat libero, adipisci ad esse ut? Autem ipsam ex distinctio quidem.
            </div>
            </li>
        </ul>
    )
}
