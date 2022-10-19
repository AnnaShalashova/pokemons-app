import React from "react";

import { useDispatch, useSelector } from "react-redux"; 
import { set } from "../../slices/themeSlice";
import sunIcon from "../images/icons8-sun-100.png";
import moonIcon from "../images/icons8-full-moon-100.png";
import "./theme.css"


const Theme = () => {

const theme = useSelector((state) => state.theme.theme);
const dispatch = useDispatch();

const changeTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
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

export default Theme;