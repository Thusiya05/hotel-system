import React from 'react'
import Sidebar from '../../Components/Sidebar';
import "../../CSS/Sidebar.css";
import Calendar from 'react-calendar';
import {useState} from 'react'
import 'react-calendar/dist/Calendar.css';


// class ManCalendar extends Component {
//     state = {
//       date: new Date(),
//     }
  
//     onChange = date => this.setState({ date })
  
//     render() {
//       return (
//         <div>
//             <Sidebar/>
//             <div>
//             <Calendar
//             onChange={this.onChange}
//             value={this.state.date}/>
          
//           </div>
//         </div>
//       );
//     }
//   }

function ManCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };


    return (
        <div className='ManCalendar'>
            <Sidebar/>
            <br></br>
            <div>
            <Calendar onChange={onChange} date={date}/>
            </div>
            
        </div>
    )
}

export default ManCalendar
