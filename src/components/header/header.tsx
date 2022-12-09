import { Link } from "react-router-dom";
import pokemonLogoImg from "../images/title.png";
import ThemeButtom from "../theme";
import { Theme } from "../../redux/themeSlice";
import LanguageButton from "../language-button";
import { textLibrary } from "../languages";
import { useAppSelector } from "../hooks";
import "./header.css";

type HeaderProps = {
    theme: Theme
}

const Header = ({ theme }: HeaderProps) => {

    const changeColor = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        const pokemonsPage = document.getElementById("pokemonsPage");
        const history = document.getElementById("history");
        if (pokemonsPage && history) {
            pokemonsPage.classList.remove("active");
            history.classList.remove("active");
            const target = e.target as HTMLButtonElement;
            target.classList.add("active")
        }
    }

    const currentLng = useAppSelector((state) => state.language.language);
    const pokemonsBtn = textLibrary[currentLng].btnPok;
    const historyBtn = textLibrary[currentLng].btnHis;


    return (
        <div className={`header navbar navbar-expand-lg navbar-dark bg-primary header-${theme}`}>
            <ThemeButtom />
            <Link to="/pokemons" id="pokemonsPage" className={`btn btn-primary mybtn-${theme}`} onClick={changeColor}>{pokemonsBtn}</Link>
            <Link to="/">
                <img className="pokemon-logo" src={pokemonLogoImg} alt="pokemon-logo" />
            </Link> 
            <Link to="history" id="history" className={`btn btn-primary mybtn-${theme}`} onClick={changeColor}>{historyBtn}</Link>
            <LanguageButton />
        </div>
    )
}

export default Header;