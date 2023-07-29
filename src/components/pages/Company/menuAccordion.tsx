import './menuAccordion.scss'

export default function MenuAccordion() {
    return (
        <ul className="menu">
            <li className="item" id="mn1">
            <a className="btn" href="#mn1">
                Organize tarefas
            </a>
            <div className="submenu">
            Com nossos Planos de Gerenciamento de Projetos, sua empresa estará altamente organizada. Centralize informações, estime prazos, atribua tarefas e colabore de forma eficiente. Mais produtividade, menos retrabalho. Experimente agora mesmo e alcance o sucesso!
            </div>
            </li>
            <li className="item" id="mn2">
            <a className="btn" href="#mn2">
                Estime prazos
            </a>
            <div className="submenu">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat expedita ut perspiciatis tenetur rem reprehenderit quam quas quia, a repellendus libero dolore illo harum fugit qui quibusdam molestias ad?
            </div>
            </li>
            <li className="item" id="mn3">
            <a className="btn" href="#mn3">
                Colabore eficientemente
            </a>
            <div className="submenu">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe totam ducimus nam iure reiciendis nihil sed reprehenderit error, fugiat libero, adipisci ad esse ut? Autem ipsam ex distinctio quidem.
            </div>
            </li>
        </ul>
    )
}