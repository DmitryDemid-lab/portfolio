import React from 'react';
import s from './DistanceJob.module.css'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from "../common/BlockHeader/BlockHeader";

function DistanceJob(props) {
    return (
        <div className={s.MainBlock}>
            <div className={cs.Container}>
                <div className={s.mainContent}>
                    <div className={s.contentText}>
                        <BlockHeader blockHeader={'I Am Available For Distance Job'}/>
                    </div>
                    <button className={s.hireBtn}>HIRE ME</button>
                </div>
            </div>
        </div>
    )
};

export default DistanceJob;