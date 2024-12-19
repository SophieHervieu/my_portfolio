import { RiHomeFill } from "react-icons/ri";
import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";

export function NavBar() {
    return (
        <div className="nav">
            <div className="leftSection">
                <RiHomeFill className="homeIcon"/>
                <span>Projets</span>
                <span>A propos</span>
            </div>
            <div className="rightSection">
                <PiGithubLogo className="githubIcon"/>
                <PiLinkedinLogo className="linkedinIcon"/>
                <div className="contactBtn">
                    <span>Contactez-moi !</span>
                    <GoArrowUpRight className="arrowIcon"/>
                </div>
            </div>
        </div>
    );
}