import React, {useState} from 'react';
import s from './Contacts.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from "../common/BlockHeader/BlockHeader";
import axios from 'axios'

function Contacts(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

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

        axios.post('https://smtp-nodejs-server-1.herokuapp.com/sendMessage', {name, email, message})
            .then(() => {
                alert('Your message sent')
            })
    }
    return (
        <div className={s.Contacts}>
            <div className={cs.Container}>
                <div className={s.mainContent}>
                    <BlockHeader blockHeader={'Contacts'}/>
                    <form className={s.contactsForm} id={'contactForm'} onSubmit={onSubmitHandler}>
                        <div className={s.formGroup}>
                            <input type="text" placeholder={'Name'} name={'name'}  id={'name'} className={s.formControl} onChange={onNameChangeHandler} value={name}/>
                        </div>
                        <div className={s.formGroup}>
                            <input type="text" placeholder={'E-mail'} name={'email'} className={s.formControl} onChange={onEmailChangeHandler} value={email}/>
                        </div>
                        <div className={s.formGroup}>
                            <textarea placeholder={'Your message'} name={'message'} className={s.formControl} onChange={onMessageChangeHandler} value={message}/>
                        </div>
                        <button type={'submit'} className={s.customBtn}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contacts;