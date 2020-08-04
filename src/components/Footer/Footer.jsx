import React from 'react';
import s from './Footer.module.css'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from "../common/BlockHeader/BlockHeader";

function Footer(props) {
    return (
        <footer className={s.Footer}>
            <div className={cs.Container}>
                <div className={s.footerContent}>
                    <BlockHeader blockHeader={'Dmitry Demid'}/>
                    <div className={s.iconsBlock}>
                        <div className={s.icon}>1</div>
                        <div className={s.icon}>2</div>
                        <div className={s.icon}>3</div>
                        <div className={s.icon}>4</div>
                    </div>
                    <span>© 2020 beingeorge, All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;