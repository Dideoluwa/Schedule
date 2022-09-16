import React from 'react'
import { useNavigate } from 'react-router'
import styles from './SuccessPage.module.css'

function SuccessPage(props) {
    let navigate = useNavigate()
    let homeNavigateHandler = () =>{
       navigate('/')
    }
    return (
        <div className={styles.body}>
            <div className={styles.svg_wrapper}>
                <div className={styles.svg}>
                    <svg width="48" height="35" viewBox="0 0 48 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5037 6.7984L19.3597 33.7552C17.9677 35.1376 15.7637 35.1376 14.3717 33.7552L1.49566 20.968C0.10366 19.5856 0.10366 17.3968 1.49566 16.0144C2.88766 14.632 5.09166 14.632 6.48366 16.0144L16.8657 26.3248L41.5157 1.8448C42.9077 0.462399 45.1117 0.462399 46.5037 1.8448C47.8957 3.2272 47.8957 5.416 46.5037 6.7984Z" fill="#5793E5" />
                    </svg>
                </div>
            </div>
            <div className={styles.header}>
                <h2>We just scheduled a demo for you.</h2>
            </div>
            <div className={styles.header}>
                <p>A calendar invitation for your upcoming demo session has been sent to your email ({props.email})</p>
            </div>
            <div className={styles.schedule}>
                <div>
                    <p>Date</p>
                    <p>{props.dates}</p>
                </div>
                <div>
                    <p>Time</p>
                    <p>{props.timer}</p>
                </div>
            </div>
            <div className={styles.buttons}>
                <button
                onClick={homeNavigateHandler}
                >Get back home</button>
                <div>
                    <p>Resend Email</p>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage