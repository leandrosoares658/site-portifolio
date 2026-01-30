import "./portfolio.css";

const projects = [
    {
        title: "Sistema Web Financeiro",
        category: "Web App",
        description: "Controle de receitas, despesas e relatórios mensais.",
        link: "https://sistema-controle-financeiro1.vercel.app/"
    },
    {
        title: "Landing Page Serviços",
        category: "Landing Page",
        description: "Página de vendas feita em React otimizada para conversão.",
        link: "https://lp-sozinha-nunca-mais.vercel.app/"
    },
    {
        title: "Aplicativo Finanças Pessoais",
        category: "Mobile App",
        description: "Aplicativo de finanças pessoais para organização de fluxo de caixa pessoal.",
        link: ""
    },
    {
        title: "Aplicativo Health Tracker",
        category: "Mobile App",
        description: "Aplicativo com um questionário interativo para usuários com o objetivo de coletar feedback.",
        link: ""
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
                            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
