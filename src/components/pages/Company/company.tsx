import Container from "../../layout/Container/container";
import Card from "../../layout/EnterpriseCard/Card";
import MenuAccordion from "./AccordionMenu/menuAccordion";
import CompanyDescription from "./CompanyDesciption/companyDesciption";

export default function Company() {
    return (
        <Container customClass="column">
            <CompanyDescription />
            <Card url="https://wsltech.com.br/wp-content/uploads/2022/09/empresaria-no-cafe_1157-5421.jpg" fotoLeft={true} 
            text="Alavanque seu sucesso como desenvolvedor web independente! Nosso Plano de Gerenciamento de Projetos é perfeito para você. Organize tarefas, estime prazos e colabore facilmente. Menos estresse, mais eficiência"
            title="ElevateTech: Gerenciamento de Projetos para Desenvolvedores"
            subtitle="Abrindo uma porta para o futuro"
            />
            <Card url="https://img.freepik.com/fotos-gratis/homem-de-negocios-proprietario-da-empresa-no-escritorio_1303-16046.jpg" fotoLeft={false} 
            text="Potencialize seu Sucesso! Plano de Gerenciamento de Projetos Especializado para Desenvolvedores de Software. Organização eficiente e máxima produtividade ao seu alcance. Impulsione seus resultados agora!"
            title="ElevateTech: Gerenciamento de Projetos para Empresas"
            subtitle="Alavanque seu Sucesso!"
            />
            <Card url="https://media.istockphoto.com/id/1217114493/pt/foto/business-woman-hands-stirring-coffee-checking-phone-at-night.jpg?s=612x612&w=0&k=20&c=bxfspoGdGksCnmZji9IZuEyDrmv1wABfxNr8fOQiVvs=" fotoLeft={true} 
            text="Potencialize sua Empresa! Plano de Gerenciamento de Projetos Sob Medida. Organização, Eficiência e Sucesso Garantido. Experimente Agora!"
            title="ElevateTech: Gerenciamento de Projetos para Empresas"
            subtitle="Alavanque seu Sucesso!"
            />
            <MenuAccordion/>
        </Container>
    )
}