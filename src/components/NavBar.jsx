import { RiHomeFill } from "react-icons/ri";

export function NavBar() {
    return (
        <div className="nav">
            <RiHomeFill />
            <span>Projets</span>
            <span>A propos</span>
            <span>Contactez-moi !</span>
        </div>
    );
}