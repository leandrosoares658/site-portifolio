import "./hero.css";
import Button from "../../components/Button/Button";
import profileImg from "../../assets/images/profile.png";


export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1>
                    Construo sites e sistemas que ajudam seu negócio a crescer
                </h1>


                <p className="hero__intro">Olá, eu sou Leandro Soares</p>


                <p className="hero__description">
                    Sou desenvolvedor e crio sites, landing pages e sistemas
                    eficientes para quem quer vender mais e trabalhar com menos dor de
                    cabeça.
                </p>


                <div className="hero__actions">
                    <Button>Contate-me</Button>
                </div>
            </div>


            <div className="hero__image">
                <img src={profileImg} alt="Leandro Soares" />
            </div>
        </section>
    );
}