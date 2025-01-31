import React, { useState, useEffect } from 'react';
import './Theme.css'; // Import the CSS file for transitions

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkMode]);

    return (
        <div className="form-check form-switch form-check-reverse">
            <span className="mb-1" style={{ fontSize: "0.9rem", marginRight: "15px", marginTop: "5px" }}>
                Theme
            </span>
            <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckReverse"
                style={{ transform: "scale(1.3)", marginRight: "0px" }}
                checked={isDarkMode}
                onChange={handleToggle}
            />
        </div>
    );
}

export default ThemeToggle;
