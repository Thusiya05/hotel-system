import React from 'react'
import BarChart from '../../Components/BarChart'
import Lines from '../../Components/Lines'
import Sidebar from '../../Components/Sidebar'
import StatServices from '../../Components/StatServices'

const Statistics = ()=>{
    return(
       <>
        <div className="statistics">
                <Sidebar></Sidebar>
        
                <StatServices />
                
                <Lines></Lines>
                <BarChart></BarChart>
            
            
        </div>
            
       </>
           
    )
}

export default Statistics;