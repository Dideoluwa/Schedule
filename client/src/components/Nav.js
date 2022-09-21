import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
// import { Link, useNavigate } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav(props) {
    let [text, setText] = useState('')
    let { pathname } = useLocation()

    useEffect(() => {
        if (pathname === '/form') {
            setText('Submit')
        } else {
            setText('Next')
        }
    }, [pathname])

    return (
        <div className={styles.body}>
            <div className={styles.body_inner}>
                <div
                    onClick={props.onClick}
                    className={styles.back}
                >
                    <h3>&larr; Back</h3>
                </div>
                <div className={styles.next}>
                    <button
                        type='submit'
                        onSubmit={props.onSubmit}
                        onClick={props.onClickFor}
                        disabled={!props.disabled}>{text}</button>
                </div>
            </div>
        </div>
    )
}

export default Nav