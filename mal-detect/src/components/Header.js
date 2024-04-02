import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {SITE_NAME} from "../config";
import changeTheme from './changeTheme';
import {ReactComponent as Logo} from "../icons/logo.svg";
import {ReactComponent as AppIcon} from "../icons/appIcon.svg";
import {ReactComponent as Notification} from "../icons/notification.svg";
import {ReactComponent as DarkThemeIcon} from "../icons/DarkThemeIcon.svg";
import {ReactComponent as LightThemeIcon} from "../icons/LightThemeIcon.svg";

const Header = () => {
    
    // Retrieve the theme preference from localStorage on component mount
    const storedTheme = localStorage.getItem('darkTheme');
    const initialTheme = storedTheme ? JSON.parse(storedTheme) : false;

    const [darkTheme, setDarkTheme] = useState(initialTheme);

    const handleThemeChange = (e) => {
        e.preventDefault();
        setDarkTheme((prevTheme) => !prevTheme);
    };

    useEffect(() => {
        // Call the changeTheme function
        changeTheme(darkTheme, setDarkTheme);

        // Save the current theme preference to localStorage
        localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
    }, [darkTheme]);
    
    return (
        <div className={`header ${darkTheme ? 'dark-theme' : ''}`}>
            <div className="leftSide">
                <ul>
                    <li>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="websiteName">
                            {SITE_NAME}
                        </Link>
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                </ul>
            </div>
            <div className="rightSide">
                <ul>
                    <li><Link to="/"><AppIcon /></Link></li>
                    <li><Link to="/"><Notification /></Link></li>
                    <li><Link to="/" onClick={handleThemeChange}>{darkTheme ? <LightThemeIcon /> : <DarkThemeIcon />}</Link></li>
                    <li>
                        <Link to="/login">
                            Sign in
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className='rounded-pill'>
                            Sign Up
                        </Link>
                    </li>
                </ul> 
            </div>
        </div>
    );
};

export default Header;