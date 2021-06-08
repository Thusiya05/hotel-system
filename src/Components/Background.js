import React from 'react'
import {Link} from "react-router-dom" 

export default function Background() {
    return (
        <div>
             <div className="animation-area">
             <div className="default-Hero">
                    <div className="jumbotron">
                        <h3>Welcome to Adventure Base Camp,</h3>
                        <h3>Kitulgala</h3>
                        <div></div>
                        <h2>Enjoy the best comforts of an outdoor leisure activity center with a touch of luxury close to nature.
                                    With amazing food, great accommodation and a breath taking location which is one of the largest and best of its kind in South Asia. We have a 
                                    well experienced and friendly adventure team to customize your days with us.</h2>
                        <Link to="/aboutUs" className="btn btn-outline-info" role="button">More Info</Link>            
                    </div>
                    
                {/* </div> */}
             </div>
                <ul className="box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            
        </div>
    )
}

