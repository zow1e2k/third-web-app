import React from "react";
import "./Header.css";
import Clock from "react-live-clock";

function Header() {
    return (
        <header className="navbar">
            Составление списка дел онлайн
            <div className={"mainClock"}>
                <Clock format={'HH:mm:ss'} ticking={false} timezone={'Europe/Samara'} />
            </div>
        </header>
    );
}


export default Header
