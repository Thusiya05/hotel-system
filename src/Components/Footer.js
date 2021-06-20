import React from 'react'
import img1 from "../images/Capture5.png"

function Footer() {
    return (
        <div>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3 col-sm-6">    
                            <img src={img1} alt="logo"></img>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Main Pages</h4>
                            <ul className="list-unstyled">
                                <li>Home</li>
                                <li>Rooms</li>
                                <li>Activities</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Policy</h4>
                            <ul className="list-unstyled">
                                <li>Terms of Usage</li>
                                <li>Privacy Policy</li>
                                <li>Return Policy</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact Us On</h4>
                            <ul className="list-unstyled">
                                <li>lakithkithsara@gmail.com</li>
                                <li>Fax: 011569874</li>
                                <li>0717365756</li>
                            </ul>
                        </div>
                    </div>     
                <div className="underline"></div>
                <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} React App - All Right Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;