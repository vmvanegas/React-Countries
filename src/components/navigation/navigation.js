import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import './style.css';

function Navigation() {

    const history = useHistory();

    function toggleTheme() {
        const body = document.querySelector(":root")
        body.classList.toggle("dark-mode")
    }

    return (
        <header className="navigation">
            <div className="navigation-content">
                <div className="logo">
                    <button onClick={() => { history.push("/countries-list") }}>
                        <h1>Where in the world?</h1>
                    </button>
                </div>
                <div className="theme-toggle">
                    <button onClick={() => { toggleTheme() }}>
                        <i className="far fa-moon"></i>
                        Dark Mode
                    </button>
                </div>
            </div>
        </header>
    )
}
export default withRouter(Navigation);