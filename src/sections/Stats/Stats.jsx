import "./stats.css";


export default function Stats() {
    const stats = [
        { value: "5+", label: "Experiences" },
        { value: "20+", label: "Project done" },
        { value: "80+", label: "Happy Clients" },
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