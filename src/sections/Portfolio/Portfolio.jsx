import "./portfolio.css";

const projects = [
    {
        title: "Sistema Financeiro",
        category: "Web App",
        description: "Controle de receitas, despesas e relatórios mensais.",
    },
    {
        title: "Landing Page Serviços",
        category: "Landing Page",
        description: "Página otimizada para conversão.",
    },
    {
        title: "App de Questionário",
        category: "Mobile App",
        description: "Análise de estado mental.",
    },
];

export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2>Portfólio</h2>

            <div className="portfolio__grid">
                {projects.map((project, index) => (
                    <div className="portfolio__card" key={index}>
                        <div className="portfolio__image" />

                        <div className="portfolio__content">
                            <h3>{project.title}</h3>
                            <span>{project.category}</span>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
