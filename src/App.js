import React from "react"
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import AboutUs from "./Pages/AboutUs";
import SingleRooms from "./Pages/SingleRooms";
import Activities from "./Pages/Activities";
import Facilities from "./Pages/Facilities";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import manager from "./Pages/manager";
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Pages/Dashboard";
import Reports from "./Pages/Reports";
import BookedRooms from "./Pages/BookedRooms";
import Schedule from "./Pages/Schedule";
import {Route,Switch} from "react-router-dom";
import Users from "./Pages/Users"
import Statistics from "./Pages/manager";
import ManCalendar from "./Pages/ManCalendar"
import Customers from "./Pages/Customers";
import income from "./Pages/income";
import expenses from "./Pages/expenses";
import guestreport from "./Pages/guestreport";
import guest from "./Pages/guest";
import cms from "./Pages/cms";
import ArchivedBookings from "./Pages/ArchivedBookings";
import Administrative from "./Pages/Administrative";
import HotelConfig from "./Pages/HotelConfig";
import AssignStewards  from "./Pages/AssignStewards";
import "./App.css"




function App() {
  return (

    <div>
      {/* <br></br>
      <br></br>
      <br></br> */}
      {/* <test /> */}
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/rooms/" component={Rooms} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path ="/rooms/:slug" component={SingleRooms} />
        <Route exact path ="/activities" component={Activities} />
        <Route exact path ="/facilities" component={Facilities} />
        <Route exact path ="/signIn" component={Login} />
        <Route exact path ="/admin/" component={AdminLogin} />
        <Route exact path = "/reports/" component={Reports} />
        <Route exact path ="/admin/"  component={Dashboard} />
        {/* <Route path ="/hrmanagement/" component={HRManagement} /> */}
        <Route path = "/admin/bookedrooms/" component={BookedRooms} />
        <Route exact path = "/schedule/" component={Schedule} />
        <Route exact path = "/statistics/" component={Statistics} />
        <Route exact path = "/HRManagement/" component={Users} />
        <Route exact path = "/receptionist/controlPanel/customers/" component={Customers} />
        <Route exact path ="/receptionist/controlPanel/AssignStewards/" component={AssignStewards} />
        <Route exact path = "/manager/" component={Statistics} />
        <Route exact path ="/ManCalendar" component={ManCalendar} />
        <Route path = "/manager/" component={manager} />
        <Route exact path ="/income" component={income} />
        <Route exact path ="/expenses" component={expenses} />
        <Route exact path ="/guestreport" component={guestreport} />
        <Route exact path ="/guest" component={guest} />
        <Route exact path ="/cms" component={cms} />
        <Route exact path ="/HotelConfig" component={HotelConfig} />
        <Route exact path ="/Administrative" component={Administrative} />
        <Route exact path ="/ArchivedBookings" component={ArchivedBookings} />
        
        <Route component={Error} />
        
       
      </Switch> 
    </div>

    
   
  );
}

export default App;
