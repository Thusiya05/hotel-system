import React from 'react'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'

export const RecepSideBar = [
   
    {
        title: "Guest",
        icon: <FaIcons.FaUserCheck />,
        link:'/manager',
    },

    {
        title: "Assign Steward",
        icon: <MdIcons.MdAssignmentInd />,
        link:'/Reports',
    },

    {
        title: "Assign Guide",
        icon: <MdIcons.MdAssignmentInd />,
        link:'/HRManagement',
    },

    {
        title: "Logout",
        icon: <RiIcons.RiLogoutBoxFill />,
        link:'/Signin',
    },

] ;


