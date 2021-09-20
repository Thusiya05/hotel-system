import React from 'react';
import "../CSS/rcsidebar.css";
import { StewSidebar } from "./StewSidebar";

function Stesidebar() {
    
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
           
            {StewSidebar.map((val, key) => {
            return (
                <li key={key} 
                className="SidebarRow"
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                    if(val.onClick) val.onClick();
                    window.location.pathname = val.link;
                    }}
                    > 
                
                <div id="icon">
                    {val.icon}
                </div>

                <div id="title">
                    {val.title}
                </div>
                </li>
            );
            })}
            </ul>
        </div>
            
    );
}

export default Stesidebar;

