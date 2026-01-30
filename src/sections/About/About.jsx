import "./about.css";
import Button from "../../components/Button/Button";


export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <h2>Sobre mim</h2>


        <p>
          Sou desenvolvedor web com foco em criar soluções simples, eficientes e
          fáceis de manter. Gosto de transformar ideias em produtos digitais que
          realmente funcionam no dia a dia das pessoas e dos negócios.
        </p>


        <p>
          Tenho experiência com desenvolvimento front-end, integração com APIs e
          criação de sistemas web sob medida, sempre buscando performance,
          organização e boa experiência do usuário.
        </p>


        <Button>Contate-me</Button>
      </div>


      <div className="about__skills">
        <div className="skill">
          <span>React</span>
          <div className="skill__bar">
            <div className="skill__progress" style={{ width: "95%" }} />
          </div>
        </div>


        <div className="skill">
          <span>JavaScript</span>
          <div className="skill__bar">
            <div className="skill__progress" style={{ width: "80%" }} />
          </div>
        </div>


        <div className="skill">
          <span>HTML & CSS</span>
          <div className="skill__bar">
            <div className="skill__progress" style={{ width: "90%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}