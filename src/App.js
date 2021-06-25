import React from "react"
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import AboutUs from "./Pages/AboutUs";
import SingleRooms from "./Pages/SingleRooms";
import Activities from "./Pages/Activities";
import Facilities from "./Pages/Facilities";
import Login from "./Pages/Login"
import Error from "./Pages/Error";
import {Route,Switch} from "react-router-dom"
import Footer from "./Components/Footer"
// import Background from "./Components/Background"
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
        <Route component={Error} />
      </Switch> 
        <div>
          <Footer />
        </div>
    </div>

    
   
  );
}

export default App;
