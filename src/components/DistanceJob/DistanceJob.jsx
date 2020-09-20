import React from 'react';
import s from './DistanceJob.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from "../common/BlockHeader/BlockHeader";
import Fade from "react-reveal/Fade";
import {Link} from "react-scroll";

function DistanceJob(props) {
    return (
        <div className={s.MainBlock} id={'resume'}>
            <Fade bottom cascade>
                <div className={cs.Container}>
                    <div className={s.mainContent}>
                        <BlockHeader blockHeader={'Here you can download my resume'}/>
                        <Link to="contactsForm" className={s.customBtn} spy={true}
                              smooth={true} offset={-50} duration={500}>Resume</Link>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default DistanceJob;