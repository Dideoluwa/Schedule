import React from 'react'
import styles from './Info.module.css'
function Info(props) {

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let month = props.date.toLocaleString('en-US', { month: 'long' })
    let day = days[props.date.getDay()]
    let dateNum = props.date.getDate()
    let year = props.date.getFullYear()
    return (
        <div className={styles.body}>
            <div>
                <h2>Walkthrough</h2>
            </div>
            <div>
                <h1>Schdule a demo</h1>
            </div>
            <div>
            {props.show && <h3>{`${day},${dateNum} ${month}, ${year}`}</h3> }
            </div>
            <div>
              {props.show && <h3>{`Scheduled time: ${props.timer}`}</h3> }
            </div>
        </div>
    )
}

export default Info