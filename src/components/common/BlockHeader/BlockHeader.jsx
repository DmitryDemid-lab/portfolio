import React from 'react';
import s from './BlockHeader.module.scss'

function BlockHeader(props) {
    return (
        <div className={s.BlockHeader}>
            <h2 className={s.title}>{props.blockHeader}</h2>
            <div className={s.moduleLine}></div>
        </div>
    )
};

export default BlockHeader;