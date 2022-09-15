import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav(props) {
    let navigate = useNavigate()
    let navigateBackHAndler = () => {
        navigate('/')
    }
    return (
        <div className={styles.body}>
            <div className={styles.body_inner}>
                <div
                    onClick={navigateBackHAndler}
                    className={styles.back}
                >
                    <h3>&larr; Back</h3>
                </div>
                <div className={styles.next}>
                    <Link to='/form'><button disabled={!props.isActive}>Next</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav