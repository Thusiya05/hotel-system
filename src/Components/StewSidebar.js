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

    {
        title: "History",
        icon: <FaIcons.FaHistory />,
        link:'/receptionist/AssignStewards/',

    },

   
    {
        title: "Logout",
        icon: <RiIcons.RiLogoutBoxFill />,
        link:'/Signin',
    },

] ;


