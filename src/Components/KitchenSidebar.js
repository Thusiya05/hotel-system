import React from 'react'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'
// import * as IoIcons from 'react-icons/io'
import * as BiIcons from 'react-icons/bi'
// import * as FaIcons from 'react-icons/fa'
import "../CSS/rcsidebar.css";

export const KitchenSideBar = [
   
    {
        title: "Orders",
        icon: <BiIcons.BiWindowAlt />,
        link:'/Kitchen/order/',
    },

    // {
    //     title: "Assign Steward",
    //     icon: <MdIcons.MdAssignmentInd />,
    //     link:'/Kitchen/deliver/',

    // },

    {
        title: "Food Menu",
        icon: <BiIcons.BiFoodMenu />,
        link:'/Kitchen/menu/',
    },

    {
        title: "Inventory",
        icon: <FaIcons.FaShoppingCart />,
        link:'/Kitchen/inventory/',
    },

    {
        title: "Recipe",
        icon: <BiIcons.BiFoodMenu />,
        link:'/Kitchen/recipe/',
    },

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
