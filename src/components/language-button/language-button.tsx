import { useAppDispatch, useAppSelector } from "../hooks"
import { setLenguage } from "../../redux/languagesSlice";
import { Language } from "../../redux/languagesSlice";
import "./language-button.css";

const LanguageButton = () => {
    const currentLng = useAppSelector((state) => state.language.language);
    const currentTheme = useAppSelector((state) => state.theme.theme);
    const dispatch = useAppDispatch();

    const changeLaguage = (e: React.MouseEvent): void => {
        const chachedLng = currentLng === "EN" ? Language.RU : Language.EN;
        dispatch(setLenguage(chachedLng))
    }

    return (
        <div className={`language-container language-container-${currentTheme}`}>
            <button type="button" className="btn btn-lang" onClick={changeLaguage}>{currentLng}</button>
        </div>
    ) 
}

export default LanguageButton;
