import React, { useState } from "react";
import './Heading.scss';
import arrow from '../../photo/arrow.svg';
import search from '../../photo/search.svg';
import bell from '../../photo/bell.svg';
import person from '../../photo/person.svg';
import shield from '../../photo/panel/shield.svg';
import done from '../../photo/panel/done.svg';
import warning from '../../photo/panel/warning.svg';
import money from '../../photo/panel/money.svg';
import classnames from "classnames";

export const Heading = ({ isDark, setIsDark }) => {
    const [input, setInput] = useState(false);
    const [closeHead, setCloseHead] = useState(true);

    const headClick = () => {
        setCloseHead(!closeHead);
    }

    const searchChange = () => {
        setInput(true);
    }

    const blur = () => {
        setInput(false);
    }

    return (
        <>
            <div className={classnames({
                'heading': true,
                'dark': isDark,
            })}
            >
                <div className='heading__logo'>
                    <p>LOGO LOGO</p>
                    <button
                        onClick={headClick}
                    >PROFILE<img src={arrow} alt='down-arrow' /></button>
                </div>
                <div className='heading__icons'>
                    {input ? (
                        <input
                            onBlur={blur}
                            placeholder='Search'
                            id='input'
                            className='heading__icons-inp'
                            autoFocus
                        />
                    ) : (
                        <img src={search} alt='search' onClick={searchChange} />
                    )}
                    <img src={bell} alt='bell' />
                    <img src={person} alt='person' />
                </div>
            </div>
            {closeHead && (<section className="panel">
                <div className="panel__box box">
                    <div className="box__item">
                        <img src={shield} alt='shield' />
                        <p>Lorem Disrupp</p>
                    </div>
                    <div className="box__txt">
                        <p>49%<span>C</span></p>
                    </div>
                </div>
                <div className="panel__box box">
                    <div className="box__item">
                        <img src={done} alt='done' />
                        <p>Lorem Disrupp</p>
                    </div>
                    <p>13/<span>100</span></p>
                </div>
                <div className="panel__box box">
                    <div className="box__item">
                        <img src={warning} alt='warning' />
                        <p>Lorem Disrupp</p>
                    </div>
                    <p>0</p>
                </div>
                <div className="panel__box box">
                    <div className="box__item">
                        <img src={money} alt='money' />
                        <p>Lorem Disrupp</p>
                    </div>
                    <p>34 820.55€</p>
                </div>
                <div className="buttons__box">
                    <div className="button__box-switch switch">
                        <p>DARK MODE</p>
                        <label className="switch__label">
                            <input
                                className="inp1"
                                type="checkbox"
                                checked={isDark}
                                onChange={(event) => {
                                    setIsDark(event.target.checked)
                                }}
                            />
                            <span className="slider1 round"></span>
                        </label>
                    </div>
                    <div className="button__box-switch switch">
                        <p>VIEW MODE</p>
                        <label className="switch__label">
                            <input className='inp2' type="checkbox" />
                            <span className="slider2 round"></span>
                        </label>
                    </div>
                </div>
            </section>)}
        </>
    )
}