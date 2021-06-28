import React from "react";
import s from '../Components/Header.module.css';
import logo from "../Images/logo.png";

const Header = () => {
    return(
        <header className={s.header}>
            <img
                src={logo}
                className={s.logo}
                alt="Logo header"
            />
        </header>
    )
}

export default Header;

