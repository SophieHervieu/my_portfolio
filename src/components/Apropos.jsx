import { PiGithubLogo } from "react-icons/pi";
import PhotoPro from '../assets/images/PhotoPro.png';

export function Apropos() {
    return (
        <div className="about">
            <h2>A propos</h2>
            <div className="gridContainer">
                <div className="leftContainer">
                    <div className="cursus">
                        <div className="step">
                            <div className="date">
                                <p>{`2024-Aujourd'hui`}</p>
                            </div>
                            <div className="details">
                                <p className="title">Adrar Pôle Numérique</p>
                                <p className="description">{`Formation Concepteur développeur d'applications (bac +3/4)`}</p>
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
                                <p className="description">{`Formation Développeur web et web mobile (bac +2)`}</p>
                            </div>
                        </div>
                        {/* <div className="step">
                            <div className="date">
                                <p>{`2014-2022`}</p>
                            </div>
                            <div className="details">
                                <p className="title">Picard Surgelés</p>
                                <p className="description">{`Vente, conseil clients, gestion de marchandises`}</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="lowerLeftContainer">
                        <div className="experience">
                            <p className="titre">Expérience</p>
                            <p className="paragraphe">2 Ans</p>
                        </div>
                        <div className="projects">
                            <p className="titre">Projets</p>
                            <p className="paragraphe">6 projets</p>
                        </div>
                    </div>
                </div>
                <div className="upperRightContainer">
                    <div className="githubLink">
                        <PiGithubLogo className="githubIcon"/>
                    </div>
                    <div className="introduction">
                        <div className="image">
                            <img src={PhotoPro}/>
                        </div>
                        <div className="text">
                            <p className="titre">Sophie Hervieu</p>
                            <p className="paragraphe">{`Conceptrice développeuse d'applications junior ayant travaillé sur des projets visuellement efficaces.`}</p>
                        </div>
                    </div>
                </div>
                <div className="lowerContainer">
                    <div className="stack">
                        <p className="titre">Compétences techniques</p>
                        <div className="firstRange"></div>
                        <div className="secondRange"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}