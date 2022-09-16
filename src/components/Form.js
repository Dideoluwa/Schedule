import React, { useState, useEffect } from 'react'
import styles from './Form.module.css'

function Form(props) {
    let [task, setTask] = useState('')
    let [phoneNumber, setPhoneNumber] = useState('')
    let [email, setEmail] = useState('')
    let [emailNotValid, setEmailNotValid] = useState(false)
    let [phoneNotValid, setPhoneNotValid] = useState(false)
    let [nameNotValid, setNameNotValid] = useState(false)

    useEffect(() => {
        if (task.trim().length >= 1 && phoneNumber.trim().length >= 1 && email.includes('@') && email.includes('.com')) {
            props.setIsActive(true)
        } else {
            props.setIsActive(false)
        }
    }, [props, task, phoneNumber, email])

    useEffect(() => {
        if (email.trim().length >= 1 && email.includes('@') && email.includes('.com')) {
            setEmailNotValid(false)
        }
    }, [email])

    let textChangeHandler = (e) => {
        setTask(e.target.value)
        setNameNotValid(false)
    }

    let numberChangeHandler = (e) => {
        setPhoneNumber(e.target.value)
        setPhoneNotValid(false)
    }

    let emailChangeHandler = (e) => {
        setEmail(e.target.value)
        // setEmailNotValid(false)
    }
    let formSubmitHandler = () => {

    }
    let textBlurHandler = () => {
        if (task.trim().length === 0) {
            setNameNotValid(true)
        } else {
            setNameNotValid(false)
        }
    }
    let emailBlurHandler = () => {
        if (email.trim().length === 0 && !email.includes('@') && !email.includes('.com')) {
            setEmailNotValid(true)
        } else {
            setEmailNotValid(false)
        }
    }
    let phoneBlurHandler = () => {
        if (phoneNumber.trim().length === 0) {
            setPhoneNotValid(true)
        } else {
            setPhoneNotValid(false)
        }
    }
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h4>Enter your information</h4>
            </div>
            <div className={styles.header}>
                <h1>Personal Data</h1>
            </div>
            <div className={styles.form}>
                <form onSubmit={formSubmitHandler}>
                    <div>
                        <label>Name</label>
                        <input

                            type='text'
                            placeholder='Finishing design'
                            value={task}
                            onChange={textChangeHandler}
                            onBlur={textBlurHandler}
                            required
                        />
                        {nameNotValid && <p>Name must be inputed</p>}
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input

                            type='number'
                            value={phoneNumber}
                            onChange={numberChangeHandler}
                            onBlur={phoneBlurHandler}
                            required
                        />
                        {phoneNotValid && <p>Phone number must be inputed</p>}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input

                            type='email'
                            value={email}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                            required
                        />
                        {emailNotValid && <p>Email must be inputed</p>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form