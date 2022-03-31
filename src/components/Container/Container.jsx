import React, { useState, useRef } from "react";
import classNames from "classnames";
import './Container.scss';
import closearrow from '../../photo/close-arrow.svg';
import openarrow from '../../photo/open-arrow.svg';
import copy from '../../photo/copy.svg';

export const Container = ({ isDark }) => {
    const [arrowOne, setArrowOne] = useState(false);
    const [arrowTwo, setArrowTwo] = useState(false);
    const [arrowThree, setArrowThree] = useState(false);
    const firstTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        + 'V6ta siit mingid teksti read.';
    const secondTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    const copyFirstTxt = () => {
        navigator.clipboard.writeText(firstTxt);
    }

    const copySecondTxt = () => {
        navigator.clipboard.writeText(secondTxt);
    }

    const changeFirstArrow = () => {
        setArrowOne(!arrowOne);
    }

    const changeSecondArrow = () => {
        setArrowTwo(!arrowTwo);
    }

    const changeThirdArrow = () => {
        setArrowThree(!arrowThree);
    }

    function getMonth() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const month = new Date().getMonth();
        return monthNames[month];
    }

    const fullMonth = getMonth();

    return (
        <div className={classNames({
            'info': true,
            'darken': isDark,
        })}
        >
            <section className="table">
                <div className="table__text">
                    <div className="table__text-bookmark">
                        <p>LIST OF DETECTED ISSUES</p>
                    </div>
                    <div className="text">
                        <div className="text__item">
                            <h1>G1</h1>
                            <p>Lorem Disrup</p>
                        </div>
                        <div className="text__item">
                            <h1>GG12</h1>
                            <p>Lorem Disrup</p>
                        </div>
                        <div className="text__item">
                            <h1>Lorem12</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit, sed do eiusmod tempor</span></p>
                        </div>
                        <div className="text__item">
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                        <div className="text__price">
                            <h1>Lorem ipsum</h1>
                            <div className="text__price-own own">
                                <p>448.00 €</p>
                                <img
                                    src={arrowOne ? openarrow : closearrow}
                                    alt='closearrow'
                                    onClick={changeFirstArrow}
                                    className={classNames({
                                        'own__arrow': true,
                                        'short': arrowOne,
                                    })}
                                />
                            </div>
                            {arrowOne && (<div className="text__price-btn">
                                <button>Lorem ips</button>
                                <button>Lorem ipsum</button>
                                <button>Lorem ipsu</button>
                            </div>)}
                        </div>
                    </div>
                    <div className="text__second second">
                        <p className="second__desc">16:35 | 24.February 2021</p>
                        <div className="second__line"></div>
                        <div className="second__note note">
                            <p className="note__item">Lorem Disrup</p>
                            <p className="note__item">Lorem Disrup</p>
                            <p className="note__item">Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit, sed do eiusmod tempor</span></p>
                            <div className="note__item">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreo </p>
                            </div>
                            <div className="note__item">
                                <div className="note__item-cash cash">
                                    <p>3 202.00 €</p>
                                    <img
                                        src={arrowTwo ? openarrow : closearrow}
                                        alt='closearrow'
                                        onClick={changeSecondArrow}
                                        className={classNames({
                                            'cash__arrow': true,
                                            'opener': arrowTwo,
                                        })}
                                    />
                                </div>
                                {arrowTwo && (
                                    <div className="note__item-price price">
                                        <button>Lorem ips</button>
                                        <button>Lorem ipsum</button>
                                        <button>Lorem ipsu</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="second">
                        <p className="second__desc">16:31 | 24.February 2021</p>
                        <div className="second__line"></div>
                        <div className="note">
                            <p className="note__item">Lorem Disrup</p>
                            <p className="note__item">Lorem Disrup</p>
                            <p className="note__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="note__item long">
                                <div className="long__txt spans">
                                    <p className="spans__gen">
                                        <span className="spans__gen-head">Lorem ipsum:</span>
                                        <span className="spans__gen-all">
                                            <span className="spans__gen-red">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <span className="spans__gen-green">ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <span className="spans__gen-green">ex ea commodo consequat.
                                                V6ta siit mingid teksti read.</span>
                                        </span>
                                    </p>
                                    <div href='#!' onClick={copyFirstTxt}>
                                        <img src={copy} alt='copy' />
                                    </div>
                                </div>
                                <div className="long__txt">
                                    <p>
                                        <span className="spans__gen-head">Lorem ipsum:</span>
                                        <span className="spans__gen-all">
                                            <span className="spans__gen-red">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span className="spans__gen-green">Ut enim ad minim veniam</span>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </span>
                                    </p>
                                    <div href="#!" onClick={copySecondTxt}>
                                        <img src={copy} alt='copy' />
                                    </div>
                                </div>
                            </div>
                            <div className="note__item">
                                <div className="note__item-cash cash">
                                    <p>3 202.00 €</p>
                                    <img
                                        src={arrowThree ? openarrow : closearrow}
                                        alt='closearrow'
                                        onClick={changeThirdArrow}
                                        className={classNames({
                                            'cash__arrow': true,
                                            'opener': arrowThree,
                                        })}
                                    />
                                </div>
                                {arrowThree && (
                                    <div className="note__item-price price">
                                        <button>Lorem ips</button>
                                        <button>Lorem ipsum</button>
                                        <button>Lorem ipsu</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table__stats stats">
                    <div className="stats__month month">
                        <div className="month__move">
                            <p>LOREM DISRUP</p>
                        </div>
                        <div className="month__content content">
                            <p className="content__own">{fullMonth}</p>
                            <h2 className="content__price content__price-darken">12 957.90 €</h2>
                            <div className="content__line"></div>
                            <p className="content__desc">Probability of potential <span>clients:</span></p>
                            <h2 className="content__percent">84%</h2>
                            <p className="content__small">*based by our calculated analysis</p>
                        </div>
                    </div>

                    <div className="stats__month month">
                        <div className="month__move">
                            <p>LOREM DISRUP</p>
                        </div>
                        <div className="month__content content">
                            <p className="content__own">{fullMonth}</p>
                            <h2 className="content__price content__price-green">4 329.80 €</h2>
                            <div className="content__line"></div>
                            <p className="content__desc">Probability of potential <span>clients:</span></p>
                            <h2 className="content__euro">8 556.50 €</h2>
                            <p className="content__small">*based by our calculated analysis</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
