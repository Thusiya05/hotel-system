import React from 'react'
import BarChart from '../Components/BarChart'
import Title from '../Components/Title'
import Lines from '../Components/Lines'

const Statistics = ()=>{
    return(
       <>
        <div>
            <Title title="S t a t i s t i c s"></Title>
                <div className="row">
                    <div className="col-md-6 col-sm-6" >
                        <div style={{padding:'2rem',boxShadow:'0 6px 6px gray',textAlign:'center',margin:'0 1rem 0,1rem' }}>
                            <h4 style={{fontFamily:'cursive'}}>Number Of Customers</h4>
                            <h5>200</h5>
                        </div>   
                    </div>
                    <div className="col-md-6 col-sm-6" >
                        <div style={{padding:'2rem',boxShadow:'0 6px 6px gray',textAlign:'center',margin:'0 1rem 0,1rem' }}>
                            <h4 style={{fontFamily:'cursive'}}>Total Income</h4>
                            <h5>Rs.100 000.00</h5>
                        </div>   
                    </div>
                </div>
                
                <Lines></Lines>
                <BarChart></BarChart>
        </div>
            
       </>
           
    )
}

export default Statistics;