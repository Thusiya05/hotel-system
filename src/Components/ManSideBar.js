import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import "../CSS/Sidebar.css";

export const ManSideBar = [
   
    {
        title: "Home",
        icon: <AiIcons.AiFillHome />,
        link:'/manager',

    },

    {
        title: "Reports",
        icon: <HiIcons.HiDocumentReport />,
        link:'/manager/Reports',
    },

    {
        title: "HR Management",
        icon: <AiIcons.AiOutlineAudit />,
        link:'/manager/HRManagement',
    },

    {
        title: "Hotel Configuration",
        icon: <AiIcons.AiOutlineControl />,
        link:'/manager/HotelConfig',
    },

    // {
    //     title: "Guests",
    //     icon: <IoIcons.IoIosPeople />,
    //     link:'/manager/guest/',
    // },

    {
        title: "Calendar",
        icon: <AiIcons.AiFillCalendar />,
        link:'/manager/ManCalendar',
    },

    // {
    //     title: "CMS",
    //     icon: <BiIcons.BiBookContent />,
    //     link:'/cms',
    // },

    // {
    //     title: "Administrative",
    //     icon: <RiIcons.RiAdminFill />,
    //     link:'/Administrative',
    // },

    {
        title: "Archived Bookings",
        icon: <FaIcons.FaFileArchive />,
        link:'/manager/ArchivedBookings',
    },

    {
        title: "Log Out",
        icon: <RiIcons.RiLogoutBoxFill />,
        link:'/Signin',
        onClick: ()=>{
            
        }
    },
] ;


