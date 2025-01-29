export function Apropos() {
    return (
        <div className="about">
            <h2>A propos</h2>
            <div className="cursus">
                <div className="step">
                    <div className="date">
                        <p>{`2024-Aujourd'hui`}</p>
                    </div>
                    <div className="details">
                        <p className="title">Adrar Pôle Numérique</p>
                        <p className="description">{`Formation Concepteur développeur d'applications`}</p>
                    </div>
                </div>
                <div className="step">
                    <div className="date">
                        <p>{`Eté 2023`}</p>
                    </div>
                    <div className="details">
                        <p className="title">CHU de Toulouse</p>
                        <p className="description">{`Stage développeuse web et web mobile`}</p>
                    </div>
                </div>
                <div className="step">
                    <div className="date">
                        <p>{`2022-2023`}</p>
                    </div>
                    <div className="details">
                        <p className="title">Wild Code School</p>
                        <p className="description">{`Formation Développeur web et web mobile`}</p>
                    </div>
                </div>
                <div className="step">
                    <div className="date">
                        <p>{`2014-2022`}</p>
                    </div>
                    <div className="details">
                        <p className="title">Picard Surgelés</p>
                        <p className="description">{`Vente, conseil clients, gestion de marchandises`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}