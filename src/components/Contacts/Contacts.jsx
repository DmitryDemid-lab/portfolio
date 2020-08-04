import React from 'react';
import s from './Contacts.module.css'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from "../common/BlockHeader/BlockHeader";

function Contacts(props) {
    return (
        <div className={s.Contacts}>
            <div className={cs.Container}>
                <div className={s.mainContent}>
                    <BlockHeader blockHeader={'Contacts'}/>
                    <form className={s.contactsForm}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea/>
                    </form>
                    <div>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contacts;