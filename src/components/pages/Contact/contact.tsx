import { Link } from "react-router-dom";
import Button from "../../layout/ButtonPurple/button";
import Container from "../../layout/Container/container";
import CompanyDescription from "../Company/CompanyDesciption/companyDesciption";
import  './contact.scss'

export default function Contact() {
    return (
        <Container customClass="start container">
            <CompanyDescription className="descriptionContainer">
                <h1>
                    Converse conosco!
                </h1>
                <p>Use nosso chat interativo para falar com nossos funcionários, para te ajudarem pro que der e vier!</p>
                <Link to='/chat'><Button text="Vamos conversar!" type="button" id="btnLetsTalk"/></Link>
            </CompanyDescription>
            <img src="https://www.pmvc.ba.gov.br/wp-content/uploads/telefone-pessoa-ligando.jpg" alt="FOto de uma pessoa atendendo um telefone" className="chatImage"/>
        </Container>
    )
}
