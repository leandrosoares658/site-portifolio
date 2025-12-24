export default function Projects() {
  return (
    <section id="projects" className="section">
      <h3>Projetos</h3>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-header">
            <h4>Finance Control App</h4>
            <span className="badge">React</span>
          </div>

          <p>
            Aplicação web para controle financeiro pessoal,
            com dashboard, relatórios e organização de dados.
          </p>

          <ul className="tech-list">
            <li>Context API</li>
            <li>Chart.js</li>
            <li>CSS puro</li>
            <li>Vite</li>
          </ul>

          <div className="project-links">
            <a href="https://sistema-controle-financeiro1.vercel.app/"
              target="_blank"
              className="btn small">
              https://sistema-controle-financeiro1.vercel.app/
            </a>

            <a href="https://github.com/leandrosoares658/sistema-controle-financeiro1"
              target="_blank"
              className="btn outline small">
              https://github.com/leandrosoares658/sistema-controle-financeiro1
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h4>Landing page para produto digital</h4>
            <span className="badge">React</span>
          </div>

          <p>
            Landing page desenvolvida e hospedada na URL https://sozinhanuncamais.com/ usando Wordpress
            <br />

            O link abaixo foi uma reprodução da mesma landing page usando React.
          </p>

          <ul className="tech-list">
            <li>Wordpress</li>
            <li>CSS puro</li>
            <li>Java Script</li>
          </ul>

          <div className="project-links">
            <a href="https://lp-sozinha-nunca-mais.vercel.app/"
              target="_blank"
              className="btn small">
              https://lp-sozinha-nunca-mais.vercel.app/
            </a>

            <a href="https://github.com/leandrosoares658/sistema-controle-financeiro1"
              target="_blank"
              className="btn outline small">
              https://github.com/leandrosoares658/sistema-controle-financeiro1
            </a>
          </div>
        </div>


      </div>
    </section>
  )
}
