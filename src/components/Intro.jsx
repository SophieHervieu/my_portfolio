import { useEffect, useState } from 'react';
import PhotoPro from '../assets/images/PhotoPro.png';
import reactLogo from '../assets/images/reactLogo.png';
import angularLogo from '../assets/images/angularLogo.png';
import mysqlLogo from '../assets/images/mysqlLogo.png';
import ExpressLogo from '../assets/images/ExpressLogo.png';
import typescriptLogo from '../assets/images/typescriptLogo.png';
import cypressLogo from '../assets/images/cypressLogo.png';
import phpLogo from '../assets/images/phpLogo.png';
import symfonyLogo from '../assets/images/symfonyLogo.png';
import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";

export function Intro () {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.introParagraph');
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    setAnimate(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Vérifie immédiatement
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="intro">
            <div className="presentation">
                <div className={`introParagraph ${animate ? 'visible' : ''}`}>
                    <span className="vignette">
                        <span className="circle"></span>Disponible pour un stage
                    </span>
                    <h1 className="firstParagraphOne">{`Moi, c'est Sophie`}<span className="period">.</span></h1>
                    <h1 className="firstParagraphTwo">Conceptrice développeuse <span className="period">* </span>Passionnée<span className="period">.</span></h1>
                    <p className="secondParagraph">{`Gestion de projets et conception de sites, du cahier des charges aux tests end to end`}</p>
                    <div className="buttons">
                        <button className="btn">Voir mes projets</button>
                        <button className="aboutBtn">À propos</button>
                    </div>
                </div>
                <div className="profilePicture">
                    <img src={PhotoPro}/>
                    <div className="icons">
                        <PiGithubLogo className="githubIcon"/>
                        <PiLinkedinLogo className="linkedinIcon"/>
                    </div>
                </div>
            </div>
            <div className="technoListWrapper">
                <div className="technoList">
                    <img src={reactLogo} className="smallLogo" alt="Logo de React"/>
                    <img src={angularLogo} className="smallLogo" alt="Logo d'Angular"/>
                    <img src={mysqlLogo} className="tallLogo" alt="Logo de MySQL"/>
                    <img src={ExpressLogo} className="smallLogo" alt="Logo d'Express"/>
                    <img src={typescriptLogo} className="smallLogo" alt="Logo de Typescript"/>
                    <img src={phpLogo} className="smallLogo" alt="Logo de PHP"/>
                    <img src={symfonyLogo} className="tallLogo" alt="Logo de Symfony"/>
                    <img src={cypressLogo} className="mediumLogo" alt="Logo de Cypress"/>
                    {/* Duplication des images */}
                    <img src={reactLogo} className="smallLogo" alt="Logo de React"/>
                    <img src={angularLogo} className="smallLogo" alt="Logo d'Angular"/>
                    <img src={mysqlLogo} className="tallLogo" alt="Logo de MySQL"/>
                    <img src={ExpressLogo} className="smallLogo" alt="Logo d'Express"/>
                    <img src={typescriptLogo} className="smallLogo" alt="Logo de Typescript"/>
                    <img src={phpLogo} className="smallLogo" alt="Logo de PHP"/>
                    <img src={symfonyLogo} className="tallLogo" alt="Logo de Symfony"/>
                    <img src={cypressLogo} className="mediumLogo" alt="Logo de Cypress"/>
                </div>
            </div>
        </div>
    )
}