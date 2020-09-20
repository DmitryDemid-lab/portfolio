import React, {useState} from 'react';
import s from './Contacts.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from "../common/BlockHeader/BlockHeader";
import axios from 'axios'
import Fade from "react-reveal/Fade";

function Contacts(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [disabled, setDisabled] = useState(false)

    const onNameChangeHandler = (e) => {
        setName(e.currentTarget.value)
    }
    const onEmailChangeHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onMessageChangeHandler = (e) => {
        setMessage(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setDisabled(true)
        axios.post('https://smtp-nodejs-server-1.herokuapp.com/sendMessage', {name, email, message})
            .then(() => {
                setDisabled(false)
                alert('Your message sent')
            })
        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <div className={s.Contacts} id={'contactsForm'}>
            <Fade bottom cascade>
                <div className={cs.Container}>
                    <div className={s.mainContent}>
                        <BlockHeader blockHeader={'Contact me'}/>
                        <form className={s.contactsForm} id={'contactForm'} onSubmit={onSubmitHandler}>
                            <div className={s.formGroup}>
                                <input type="text" placeholder={'Name'} name={'name'} id={'name'}
                                       className={s.formControl} onChange={onNameChangeHandler} value={name} required/>
                            </div>
                            <div className={s.formGroup}>
                                <input type="email" placeholder={'E-mail'} name={'email'} className={s.formControl}
                                       onChange={onEmailChangeHandler} value={email} required/>
                            </div>
                            <div className={s.formGroup}>
                                <textarea placeholder={'Your message'} name={'message'} className={s.formControl}
                                          onChange={onMessageChangeHandler} value={message} required/>
                            </div>
                            <button type={'submit'} className={s.customBtn} disabled={disabled}>Send Message</button>
                        </form>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default Contacts;