import LaMainLourde from '../assets/images/LaMainLourde.png';
import TheWitcher from '../assets/images/TheWitcher.png';
import ChukoManga from '../assets/images/ChukoMangaDesktop.png';
import WeddingBagEnd from '../assets/images/WeddingBagEnd.png';
import { BsArrowUpRightCircleFill } from "react-icons/bs";


export function Projects() {
    return (
        <div className="projects">
            <h2>Mes projets</h2>
            <div className="projectCards">
                <div className="weddingWrapper">
                    <span>Front End</span>
                    <BsArrowUpRightCircleFill className='arrow'/>
                    <img src={WeddingBagEnd} className="wedding" alt="image de la page d'accueil du site pour mon mariage" />
                    <div className='intro'>
                        <h5>A Wedding in Bag End</h5>
                        <p>Un site simple crée en vue de mon mariage prochain</p>
                    </div>
                </div>
                <div className="chukoMangaWrapper">
                    <span className='spanOne'>Front End</span>
                    <span className='spanTwo'>Back End</span>
                    <BsArrowUpRightCircleFill className='arrow'/>
                    <img src={ChukoManga} className="chuko" alt="image de la page d'accueil du site Chuko Manga" />
                    <div className='intro'>
                        <h5>Chuko Manga</h5>
                        <p>{`Un site de vente de manga d'occasion moderne`}</p>
                    </div>
                </div>
                <div className="witcherWrapper">
                    <span className='spanOne'>Front End</span>
                    <span className='spanTwo'>Back End</span>
                    <BsArrowUpRightCircleFill className='arrow'/>
                    <img src={TheWitcher} className="witcher" alt="image de la page d'accueil du site The Witcher" />
                    <div className='intro'>
                        <h5>The Witcher Worlds</h5>
                        <p>{`Un site immersif sur l'univers de la saga The Witcher`}</p>
                    </div>
                </div>
                <div className="mainLourdeWrapper">
                    <span>HTML/CSS</span>
                    <BsArrowUpRightCircleFill className='arrow'/>
                    <img src={LaMainLourde} className="mainLourde" alt="image du site La Main Lourde" />
                    <div className='intro'>
                        <h5>La Main Lourde</h5>
                        <p>{`Un site humoristique sur la réalisation du Mojito`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
