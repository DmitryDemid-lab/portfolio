import React from 'react';
import s from './Footer.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from "../common/BlockHeader/BlockHeader";

function Footer(props) {
    return (
        <footer className={s.Footer}>
            <div className={cs.Container}>
                <div className={s.footerContent}>
                    <a href={'#'} className={s.footerLogo}>
                        <h2>Dmitry Demid</h2>
                    </a>
                    <div className={s.iconsBlock}>
                        <div className={s.icon}>1</div>
                        <div className={s.icon}>2</div>
                        <div className={s.icon}>3</div>
                        <div className={s.icon}>4</div>
                    </div>
                    <p className={s.copyright}>© 2020 beingeorge, All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;