import React, { useState } from 'react'
import styles from './Form.module.css'

function Form() {
    let [task, setTask] = useState('')
    let [phoneNumber, setPhoneNumber] = useState('')
    let [email, setEmail] = useState('')

    let textChangeHandler = (e) => {
        setTask(e.target.value)
    }

    let numberChangeHandler = (e) => {
        setPhoneNumber(e.target.value)
    }

    let emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }
    let formSubmitHandler = () => {

    }
    return (
        <div className={styles.body}>
            <div className={styles.form}>
                <form onSubmit={formSubmitHandler}>
                    <div>
                        <label>Name of task</label>
                        <input

                            type='text'
                            placeholder='Finishing design'
                            value={task}
                            onChange={textChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input

                            type='number'
                            value={phoneNumber}
                            onChange={numberChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input

                            type='email'
                            value={email}
                            onChange={emailChangeHandler}
                            required
                        />
                    </div>

                    {/* <button>Submit</button> */}
                </form>
            </div>
        </div>
    )
}

export default Form