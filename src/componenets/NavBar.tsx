import React, { useContext, useState } from 'react';
import './NavBar.css' // Import the CSS file
import { CoinContext } from '../context/CoinContext'; 
import './Home.css'
import Login from './LoginSignUp/Login';

function NavBar() {

    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{marginTop: "10px" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CryptoTrading</a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle" 
                                    href="#" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input 
                                className="form-control me-2 custom-search" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success custom-btn custom-button" type="submit" >Search</button>
                        </form>
                        <div className="btn-group ms-3" role="group" aria-label="Auth buttons" style={{marginRight: "23px", marginBottom: "2px"}}>
                            <button type="button" className="btn btn-outline-success custom-btn custom-button" onClick={() => setShowLogin(true)}>Login</button>
                            <button type="button" className="btn btn-outline-success custom-btn custom-button">Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Black line under the Navbar */}
            <hr style={{marginTop: "10px" }}/>

            {/* Custom Login Modal */}
            {showLogin && (
                <div className="custom-modal">
                    <span className="close-btn" onClick={() => setShowLogin(false)}>&times;</span>
                    <Login />
                </div>
            )}
        </>
    );
}

export default NavBar;
