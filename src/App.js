import React from "react"
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import AboutUs from "./Pages/AboutUs";
import SingleRooms from "./Pages/SingleRooms";
import Activities from "./Pages/Activities";
import Facilities from "./Pages/Facilities";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Pages/Dashboard";
import Reports from "./Pages/Reports";
import HRManagement from "./Pages/HRManagement";
import BookedRooms from "./Pages/BookedRooms";
import {Route,Switch} from "react-router-dom"
import Footer from "./Components/Footer"
import "./App.css"



function App() {
  return (

   
    <div>
      
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/rooms/" component={Rooms} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path ="/rooms/:slug" component={SingleRooms} />
        <Route exact path ="/activities" component={Activities} />
        <Route exact path ="/facilities" component={Facilities} />
        <Route exact path ="/signIn" component={Login} />
        <Route exact path ="/admin/" component={AdminLogin} />
        <Route exact path = "/admin/reports/" component={Reports} />
        <Route exact path ="/admin/"  component={Dashboard} />
        <Route path ="/admin/hrmanagement/" component={HRManagement} />
        <Route path = "/admin/bookedrooms/" component={BookedRooms} />
        <Route component={Error} />
        
       
      </Switch> 
        <div>
          <Footer />
        </div>
    </div>

    
   
  );
}

export default App;
