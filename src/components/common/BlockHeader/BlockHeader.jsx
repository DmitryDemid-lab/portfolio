import React from 'react';
import s from './BlockHeader.module.css'

function BlockHeader(props) {
    return (
        <div className={s.BlockHeader}>
            <h2>{props.blockHeader}</h2>
        </div>
    )
};

export default BlockHeader;