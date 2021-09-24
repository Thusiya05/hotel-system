import React, { Component } from "react"
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import AboutUs from "./Pages/AboutUs";
import SingleRooms from "./Pages/SingleRooms";
import Activities from "./Pages/Activities";
import Facilities from "./Pages/Facilities";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import manager from "./Pages/Manager/manager";
import AdminLogin from "./Pages/AdminLogin";
import Reports from "./Pages/Manager/Reports";
import BookedRooms from "./Pages/BookedRooms";
import {Route,Switch} from "react-router-dom";
import Users from "./Pages/Manager/Users"
import Statistics from "./Pages/Manager/manager";
import ManCalendar from "./Pages/Manager/ManCalendar"
import Customers from "./Pages/Receptionist/Customers";
import guest from "./Pages/Manager/guest";
import ArchivedBookings from "./Pages/Manager/ArchivedBookings";
import Administrative from "./Pages/Administrative";
import HotelConfig from "./Pages/Manager/HotelConfig";
import AssignStewards  from "./Pages/Receptionist/AssignStewards";
import AssignGuide  from "./Pages/Guide/Guide";
import AssignGuides from "./Pages/Receptionist/assignGuides";
import Activityschedule from "./Pages/activityschedule";
import AssignedRooms from "./Pages/Stewards/AssignedRooms";
import Foodmenu from "./Pages/foodmenu";
import Order from "./Pages/Kitchen/Order";
import deliver from "./Pages/Kitchen/deliver";
import menu from "./Pages/Kitchen/menu";
import inventory from "./Pages/Kitchen/inventory";
import StewardsHistory from "./Pages/Stewards/StewardsHistory"
import EditProfile from "./Pages/EditProfile"
import GuideHistory from "./Pages/Guide/GuideHistory"
import MyBookings from "./Pages/MyBookings"
import Recipe from "./Pages/Kitchen/recipe"
import Cusfoodmenu from "./Pages/Customer/cusfoodmenu"
// import ButtonForOrderFoods from "./Pages/Customer/buttonForOrderFoods";
import GuestRepo from "./Pages/Manager/GuestRepo";
import IncomeRepo from "./Pages/Manager/IncomeRepo";
import InventoryRepo from "./Pages/Manager/InventoryRepo";
import OrderRepo from "./Pages/Manager/orderRepo";
import Payment from "./Pages/Payment";
import axios from "axios";
import "./App.css"
import orderRepo from "./Pages/Manager/orderRepo";
import "react-app-polyfill/stable";






export default class App extends Component {

//   state = {};

//   componentDidMount = () =>{

//     // const config = {
//     //     headers: {
//     //         Authorization: 'Bearer ' + localStorage.getItem('userId')
//     //     }
//     // };

//     axios.get(`http://143.244.133.116:3030/user/${localStorage.getItem('userId')}`)
//         .then(
//             res => {
//                 this.setState({
//                     cus: res.data
//                 });
//                 console.log(this.state.cus.lastName); 
//             },
//             err => {
//                 console.log(err);
//             } 
//         )
// };

  render(){

    // if(localStorage.getItem('userId')!=null){
    //   console.log("hello");
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
            <Route exact path = "/manager/reports/" component={Reports} />
            <Route exact path = "/admin/bookedrooms/" component={BookedRooms} />
            <Route exact path = "/statistics/" component={Statistics} />
            <Route exact path = "/manager/HRManagement/" component={Users} />
            <Route exact path = "/receptionist/customers/" component={Customers} />
            <Route exact path ="/receptionist/AssignStewards/" component={AssignStewards} />
            <Route exact path ="/AssignGuide/" component={AssignGuide} />
            <Route exact path ="/GuideHistory/" component={GuideHistory} />
            <Route exact path ="/receptionist/AssignGuides/" component={AssignGuides} />
            <Route exact path = "/manager/" component={Statistics} />
            <Route exact path ="/manager/ManCalendar" component={ManCalendar} />
            <Route exact path = "/manager/" component={manager} />
            <Route exact path ="/manager/guest/" component={guest} />
            <Route exact path ="/manager/HotelConfig" component={HotelConfig} />
            <Route exact path ="/Administrative" component={Administrative} />
            <Route exact path ="/manager/ArchivedBookings" component={ArchivedBookings} />
            <Route exact path ="/activityschedule" component={Activityschedule} />
            <Route exact path ="/steward/assignedRooms" component={AssignedRooms} />
            {/* <Route exact path ="/steward/StewardsHistory/" component={StewardsHistory} /> */}
            <Route exact path ="/foodmenu" component={Foodmenu} />
            <Route exact path ="/EditProfile" component={EditProfile} />
            <Route exact path ="/kitchen/order" component={Order} />
            <Route exact path ="/kitchen/deliver" component={deliver} />
            <Route exact path ="/kitchen/menu" component={menu} />
            <Route exact path ="/kitchen/recipe" component={Recipe} />
            <Route exact path ="/kitchen/inventory" component={inventory} />
            <Route exact path ="/MyBookings" component={MyBookings} />
            <Route exact path ="/Customer/cusfoodmenu" component={Cusfoodmenu} />
            {/* <Route exact path ="/Customer/buttonForOrderFoods" component={ButtonForOrderFoods} /> */}
            <Route exact path ="/manager/guestrepo" component={GuestRepo} />
            <Route exact path ="/manager/incomerepo" component={IncomeRepo} />
            <Route exact path ="/manager/inventoryrepo" component={InventoryRepo} />
            <Route exact path ="/manager/orderrepo" component={OrderRepo} />
            <Route exact path ="/payment" component={Payment} />
            <Route component={Error} />
            
          </Switch> 
        </div>
      );
    // }else{
    //   return(
    //     <div>
    //       <Route exact path ="/" component={Home} />
    //         <Route exact path ="/rooms/" component={Rooms} />
    //         <Route exact path="/aboutUs" component={AboutUs} />
    //         <Route exact path ="/rooms/:slug" component={SingleRooms} />
    //         <Route exact path ="/activities" component={Activities} />
    //         <Route exact path ="/facilities" component={Facilities} />
    //         <Route exact path ="/signIn" component={Login} />
    //     </div>
    //   )
    // }
  }
}

// export default App;