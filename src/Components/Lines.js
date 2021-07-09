import React from 'react'
import { Line } from 'react-chartjs-2'

export default function Lines(){
    return (
        <>
           
            <div style={{padding:'2rem'}}>
                 <Line
                    data={{
                        labels:['sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday', 'Saturday'],
                        datasets:[{
                            label:'Customers',
                            backgroundColor:'darkblue',
                            
                            data:[5,4,7,8,10,15,9]
                        }]
                    }}

                        height={90}
                        options={{
                            maintainAcceptRatio:false,
                            legend:{display:false},
                            scales:{
                                yAxes:[
                                    {
                                        ticks:{
                                            beginAtZero:true,
                                        }
                                    }
                                ]
                            }
                        }}
                    />
            </div>
                   
        </>
        
    )
}