import { RiHomeFill } from "react-icons/ri";
import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";

export function Footer() {
    return(
        <div className="footer">
            <RiHomeFill className="homeIcon"/>
            <div className="links">
                <span>Projets</span>
                <span>A propos</span>
            </div>
            <div className="profesionnal">
                <PiGithubLogo className="githubIcon"/>
                <PiLinkedinLogo className="linkedinIcon"/>
            </div>
            <div className="credits">
                <span>Inspired by <a href="https://spot-light.framer.website/">this</a> Framer template</span>
            </div>
        </div>
    )
}