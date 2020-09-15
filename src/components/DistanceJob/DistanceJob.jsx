import React from 'react';
import s from './DistanceJob.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from "../common/BlockHeader/BlockHeader";

function DistanceJob(props) {
    return (
        <div className={s.MainBlock}>
            <div className={cs.Container}>
                <div className={s.mainContent}>
                    <BlockHeader blockHeader={'I Am Available For Distance Job'}/>
                    <a className={s.customBtn} href={'#'}>HIRE ME</a>
                </div>
            </div>
        </div>
    )
};

export default DistanceJob;