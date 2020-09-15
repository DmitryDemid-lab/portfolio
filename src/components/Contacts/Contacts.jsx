import React from 'react';
import s from './Contacts.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from "../common/BlockHeader/BlockHeader";

function Contacts(props) {
    return (
        <div className={s.Contacts}>
            <div className={cs.Container}>
                <div className={s.mainContent}>
                    <BlockHeader blockHeader={'Contacts'}/>
                    <form className={s.contactsForm}>
                        <div className={s.formGroup}>
                            <input type="text" placeholder={'Name'} name={'name'}  id={'name'} className={s.formControl}/>
                        </div>
                        <div className={s.formGroup}>
                            <input type="text" placeholder={'E-mail'} name={'email'} className={s.formControl}/>
                        </div>
                        <div className={s.formGroup}>
                            <textarea placeholder={'Your message'} className={s.formControl}/>
                        </div>
                        <button type='submit' className={s.customBtn}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contacts;