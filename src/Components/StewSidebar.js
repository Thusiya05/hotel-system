import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'
import "../CSS/rcsidebar.css";

export const StewSidebar = [
   
    {
        title: "Task",
        icon: <FaIcons.FaTasks />,
        link:'/steward/assignedRooms/',
    },

    // {
    //     title: "History",
    //     icon: <FaIcons.FaHistory />,
    //     link:'/steward/StewardsHistory/',

    // },

   
    {
        title: "Logout",
        icon: <RiIcons.RiLogoutBoxFill />,
        link:'/Signin',
        onClick: ()=>{
            localStorage.removeItem("firstName");
            localStorage.removeItem("lastName");
            localStorage.removeItem("userId");
        }
    },

] ;


