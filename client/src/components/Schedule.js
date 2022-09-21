import React from 'react'
import Calendar from 'react-calendar/dist/umd/Calendar'
import Time from './Time'
import DateInfo from './DateInfo'

function Schedule(props) {
    return (
        <div>
            <div className='container'>
                <div>
                    <div className="calendar-container__inner">
                        <div className="calendar-container__header">
                            <DateInfo date={props.date} />
                        </div>
                        <Calendar minDate={new Date()} onChange={props.onChange} value={props.date} />
                    </div>
                </div>
                <div>
                    <Time setShow={props.setShow} setTimer={props.setTimer} setIsActive={props.setIsActive} time={props.time} />
                </div>
            </div>
        </div>
    )
}

export default Schedule