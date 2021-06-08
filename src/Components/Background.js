import React from 'react'
import Banner from "./Banner"

export default function Background() {
    return (
        <div>
             <div className="animation-area">
             <div className="default-Hero">
                    <Banner title="Welcome to Adventure Base Camp"
                            subtitle="Enjoy the best comforts of an outdoor leisure activity center with a touch of luxury close to nature.
                                    With amazing food, great accommodation and a breath taking location which is one of the largest and best of its kind in South Asia. We have a 
                                    well experienced and friendly adventure team to customize your days with us."
                            children="Our Rooms" path="/rooms"></Banner>
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

