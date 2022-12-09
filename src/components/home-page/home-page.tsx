import "./home-page.css";
import homeImg from "../images/Pokemon-PNG-HD.png";
import { useAppSelector } from "../hooks";
import { textLibrary } from "../languages";

const HomePage = () => {

    const currentLng = useAppSelector((state) => state.language.language);
    const welcome = textLibrary[currentLng].welcome;
    const welcomeText = textLibrary[currentLng].welcomeText;

    return (
        <div className="home-page">
            <p className="home-header"> {welcome}</p>
            <p className="home-body">{welcomeText}</p>
            <img className="home-img" alt="Happy pokemon" width="200px" 
                src={homeImg}>
            </img>
        </div>
    )
}

export default HomePage;
   

