import React from 'react'
import Sidebar from '../Components/Sidebar';
import "../CSS/Sidebar.css";
import Calendar from 'react-calendar';
import {useState} from 'react'
import 'react-calendar/dist/Calendar.css';

function ManCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };


    return (
        <div className='ManCalendar'>
            <Sidebar/>
            <div>
            <Calendar onChange={onChange} date={date}/>
            </div>
            
        </div>
    )
}

export default ManCalendar
