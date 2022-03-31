import React, { useState } from "react";
import { Heading } from "../Heading/Heading";
import classNames from "classnames";
import { Container } from "../Container/Container";
import { Footer } from "../Footer/Footer";
import './General.scss';

export const General = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <header className={classNames({
                'head': true,
                'darken': isDark,
            })}
            >
                <Heading isDark={isDark} setIsDark={setIsDark} />
            </header>
            <main className='container'>
                <Container isDark={isDark} />
            </main>
            <footer>
                <Footer isDark={isDark} />
            </footer>
        </>
    )
}