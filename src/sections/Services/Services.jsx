import { useEffect, useRef } from "react";
import "./services.css";

const services = [
  { title: "Sites Institucionais", description: "Sites rápidos, responsivos e profissionais." },
  { title: "Landing Pages", description: "Páginas focadas em conversão." },
  { title: "Sistemas Web", description: "Automação e escala para negócios." },
  { title: "APIs & Back-end", description: "Integrações seguras e performáticas." },
  { title: "Manutenção", description: "Suporte contínuo e melhorias." },
  { title: "Consultoria Técnica", description: "Decisões técnicas bem orientadas." },
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="services">
      <header className="services__header">
        <h2>Serviços</h2>
        <p>Soluções digitais pensadas para gerar resultado.</p>
      </header>

      <div className="services__grid">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="services__card fade-up"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
