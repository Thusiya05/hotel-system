import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Button, Form, Col } from 'react-bootstrap';
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Title from '../../Components/Title';
import Sidebar from '../../Components/Sidebar';
import "../../CSS/Sidebar.css";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

function ManCalendar() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className='mancalendar' >
            <Sidebar/>
            <Title title="Calendar"></Title>
            <h5 >Add New Event</h5>
            <div>
                
                <input 
                type="text" 
                placeholder="Add Title" 
                style={{ marginLeft: "-55px", textAlign:'center' }} 
                value={newEvent.title} 
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} 
                />
                <DatePicker 
                placeholderText="Start Date" 
                style={{ marginRight: "10px", textAlign:'center' }} 
                selected={newEvent.start} 
                onChange={(start) => setNewEvent({ ...newEvent, start })} 
                /> 
                <DatePicker 
                placeholderText="End Date" 
                // style={{ marginRight: "10px" }} 
                selected={newEvent.end} 
                onChange={(end) => setNewEvent({ ...newEvent, end })} 
                />
                
                <Button variant="secondary"
                stlye={{ marginRight: "10px", textAlign:'center'}} 
                onClick={handleAddEvent}>
                    Add Event
                </Button>
                
            </div>
            <Calendar 
            localizer={localizer} 
            events={allEvents} 
            startAccessor="start" 
            endAccessor="end" 
            style={{ height: 500, margin: "50px" }} 
            />
        </div>
    );
}

export default ManCalendar;
