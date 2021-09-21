import React from 'react'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'
import "../CSS/rcsidebar.css";

export const RecepSideBar = [
   
    {
        title: "Guest",
        icon: <FaIcons.FaUserCheck />,
        link:'/receptionist/customers/',
    },

    // {
    //     title: "Assign Steward",
    //     icon: <MdIcons.MdAssignmentInd />,
    //     link:'/receptionist/AssignStewards/',

    // },

    // {
    //     title: "Assign Guide",
    //     icon: <MdIcons.MdAssignmentInd />,
    //     link:'/receptionist/AssignGuides/',
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


