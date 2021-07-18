import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'
import "../CSS/rcsidebar.css";

export const GuideLinkSidebar = [
   
    {
        title: "Task",
        icon: <FaIcons.FaTasks />,
        link:'/AssignGuide/',
    },

    {
        title: "History",
        icon: <FaIcons.FaHistory />,
        link:'/GuideHistory/',

    },

   
    {
        title: "Logout",
        icon: <RiIcons.RiLogoutBoxFill />,
        link:'/Signin',
    },

] ;


