import React, { useState } from 'react'
import './Time.css'

function Time(props) {
    let [active, setActive] = useState(null)
    return (
        <div className="calendar-container__time">
            <h3>Time:</h3>
            <div className="calendar-container__time__inner">
                {props.time.map((list) => (
                    <h1
                        key={list}
                        onClick={() => {
                            props.setTimer(list)
                            setActive(list)
                            props.setIsActive(true)
                            props.setShow(true)
                        }}
                        className={`${active === list && 'activeButton'}`}
                    >{list}</h1>
                ))}
            </div>
        </div>
    )
}

export default Time