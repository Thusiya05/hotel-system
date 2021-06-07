import React from "react"
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import AboutUs from "./Pages/AboutUs";
import SingleRooms from "./Pages/SingleRooms";
import Error from "./Pages/Error";
import {Route,Switch} from "react-router-dom"
import NavBar from "./Components/NavBar";
// import Background from "./Components/Background"
import "./App.css"



function App() {
  return (

   
    <div>
      <div>
        <NavBar />
      </div>
      
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/rooms/" component={Rooms} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path ="/rooms/:slug" component={SingleRooms} />
        <Route component={Error} />
      </Switch> 

    </div>
    
   
  );
}

export default App;
