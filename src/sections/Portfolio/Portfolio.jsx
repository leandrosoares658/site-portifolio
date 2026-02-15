import "./portfolio.css";
import financeiroImg from "../../assets/controle-financeiro.png";
import sozinhaImg from "../../assets/sozinhanuncamais.png";
import clinicaImg from "../../assets/institutoaudioclini.png";

const projects = [
    {
        title: "Landing Page Serviços",
        category: "Landing Page",
        description: "Página de vendas feita em React otimizada para conversão.",
        link: "https://sozinhanuncamais.com/",
        image: sozinhaImg
    },
    {
        title: "Web Site para Clinica",
        category: "Website",
        description: "Site para a apresentação de uma clinica de fonoaudiológia",
        link: "https://institutoaudioclini.com.br/",
        image: clinicaImg
    },
    {
        title: "Sistema Web Financeiro",
        category: "Web App",
        description: "Controle de receitas, despesas e relatórios mensais.",
        link: "https://sistema-controle-financeiro1.vercel.app/",
        image: financeiroImg
    },
];

export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2>Portfólio</h2>

            <div className="portfolio__grid">
                {projects.map((project, index) => (
                    <div className="portfolio__card" key={index}>
                        <div className="portfolio__image">
                            <img src={project.image} alt={project.title} />
                        </div>

                        <div className="portfolio__content">
                            <h3>{project.title}</h3>
                            <span>{project.category}</span>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
