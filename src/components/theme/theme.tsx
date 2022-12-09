import { useAppDispatch, useAppSelector } from "../hooks";
import { set } from "../../redux/themeSlice";
import sunIcon from "../images/icons8-sun-100.png";
import moonIcon from "../images/icons8-full-moon-100.png";
import {Theme} from "../../redux/themeSlice";
import "./theme.css"

const ThemeButton = () => {
    const theme = useAppSelector((state) => state.theme.theme);
    const dispatch = useAppDispatch();

    const changeTheme = () => {
        const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        localStorage.setItem("theme", nextTheme);
        dispatch(set(nextTheme));
    }
    const  icon = theme === "light" ? moonIcon : sunIcon;

    return (
        <div className={`${theme} theme`} onClick={changeTheme}>
            <img src={icon} alt="theme-icon" width="50px"/>
        </div>
    )
}

export default ThemeButton;