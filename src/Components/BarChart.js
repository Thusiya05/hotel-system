import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function BarChart(){
    return (
        <>
           
            <div style={{padding:'2rem'}}>
                 <Bar
                    data={{
                        labels:['Water Rafting','Hiking','Cycling','Swimming','Other'],
                        datasets:[{
                            label:'Customers',
                            backgroundColor:'#343a40',
                            data:[12,38,96,34,40]
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

