import React from "react";
import "./Header.css"

export default function Header() {

    return(
        <div>
            <nav className='head' >
                <h1 style={{width: '400px', color:"#264d6d", fontSize:"30px"}}>Kami no Memory</h1>
                <input type="checkbox" id="sidebar-active"/>
                <label for="sidebar-active" className="open-sidebar-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </label>
                
                <label id="overlay" for="sidebar-active"></label>
                <div className="links-container">
                    <label for="sidebar-active" className="close-sidebar-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </label>
                    <a href="#" className="score-page-link">Scores</a>
                    <a href="#" className="social-links">Socials</a>
                </div>
            </nav>
        </div>
    )
}

