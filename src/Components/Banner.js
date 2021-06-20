import React from 'react'
import {Link} from "react-router-dom"
import {Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Banner({children,title,subtitle,path}) {
    return (
            <Jumbotron>
            <h1>{title}</h1>
            <div></div>
            <h2>{subtitle}</h2>
            <p>
            <Link to={path} className="btn btn-info btn-lg" role="button">{children}</Link>
            </p>
           

        </Jumbotron>
    )
}
