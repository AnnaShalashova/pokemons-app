import "./history-page.css";
import { Theme } from "../../redux/themeSlice";
import { textLibrary } from "../languages";
import { useAppSelector } from "../hooks";

type HistoryPageProps = {
    theme: Theme
}

const HistoryPage = ({theme}: HistoryPageProps) => {

    const currentLng = useAppSelector((state) => state.language.language);
    const pokemonHistory = textLibrary[currentLng].pokemonHistory;
    const historyText = textLibrary[currentLng].historyText;
    const historyText_2 = textLibrary[currentLng].historyText_2;

    return (
        <div className={`history card border-info mb-3 history-${ theme }`}>
            <h1 className="card-header">{ pokemonHistory }</h1>
            <div className="card-body">
                <p>{ historyText }</p>
                <p>{ historyText_2 }</p> 
            </div>
        </div>
    )
}

export default HistoryPage;