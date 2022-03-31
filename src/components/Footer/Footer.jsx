import React from "react";
import classNames from "classnames";
import './Footer.scss';

export const Footer = ({ isDark }) => {
    const date = new Date().getFullYear();

    return (
        <div className={classNames({
            "bottom": true,
            "dark": isDark,
        })}
        >
            <p>Corporation © {date} | All Rights Reserved.</p>
        </div>
    )
}
