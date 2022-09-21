import React from 'react'
import styles from './Info.module.css'
function Info(props) {

    // let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    // let day = days[props.date.getDay()]
    return (
        <div className={styles.body}>
            <div className={styles.body_header}>
                <h2>Walkthrough</h2>
            </div>
            <div className={styles.body_header}>
                <h1>Schdule a demo</h1>
            </div>
            <div className={props.show ? styles.date_show : styles.date}>
                <div>
                    <h4>Date:</h4>
                    <h3>{props.dates}</h3>
                </div>
                <div>
                    <h4>Time:</h4>
                    <h3>{`Scheduled time: ${props.timer}`}</h3>
                </div>

            </div>
        </div>
    )
}

export default Info