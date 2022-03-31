import React, { useState } from "react";
import home from '../../photo/nav-icons/home.svg';
import message from '../../photo/nav-icons/message.svg';
import stat from '../../photo/nav-icons/stat.svg';
import paper from '../../photo/nav-icons/paper.svg';
import friends from '../../photo/nav-icons/friends.svg';
import service from '../../photo/nav-icons/service.svg';
import menu from '../../photo/menu.svg';
import './Nav.scss';

export const Nav = () => {
    const [menuOpener, setMenuOpener] = useState(false);

    const openMenu = () => {
        setMenuOpener(!menuOpener)
    }

    return (
        <div className="menu">
            <div className="menu__links">
                <img
                    src={menu}
                    alt='menu-logo'
                    className='menu__links-open'
                    onClick={openMenu}
                />
                {menuOpener && (
                    <>
                        <ul className="menu__links-items items">
                            <li>
                                <a href="#!" className="items__link">
                                    <img src={home} alt='home' />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <img src={message} alt='message' />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <img src={stat} alt='stat' />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <img src={paper} alt='paper' />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <img src={friends} alt='friends' />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <img src={service} alt='service' />
                                </a>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    )
}