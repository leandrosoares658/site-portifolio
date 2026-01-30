import "./stats.css";


export default function Stats() {
    const stats = [
        { value: "3+", label: "Experiências" },
        { value: "10+", label: "Projetos finalizados" },
        { value: "20+", label: "Clientes Felizes" },
    ];


    return (
        <section className="stats">
            {stats.map((item, index) => (
                <div className="stat" key={index}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                </div>
            ))}
        </section>
    );
}