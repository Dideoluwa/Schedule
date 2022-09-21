import React from 'react'
import styles from './DateInfo.module.css'

function DateInfo(props) {
    // let month = props.date.toLocaleString('en-US', { month: 'long'})
    // let year = props.date.getFullYear()
  return (
    <div className={styles.body}>
        {/* <div>{`${month}, ${year}`}</div> */}
        <div>Select a Date and Time</div>
    </div>
  )
}

export default DateInfo