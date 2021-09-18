import React from 'react'
import food from "../images/food.jpg"

import '../CSS/basket.css'
import '../CSS/foodstyle.css'

const FoodItem = () => {
    return (
        
        <div className="col-sm-6 col-md-4 col-lg-3 item">
            <div className="box">
            <br/>
                <img className="rounded img-fluid pizza-img" src={food}/>
                <h3 className="name">BBQ</h3>
            
                <div className="d-flex justify-content-around align-items-center">
                    <button className="btn btn-success" >
                        Add to basket
                    </button>
                    <span className="badge rounded-pill bg-danger price">$100</span>
                </div>
                <br/>
                <br />
            </div>
        </div>
    );
};

export default FoodItem;

                
        