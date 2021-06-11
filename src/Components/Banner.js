import React from 'react'
import {Link} from "react-router-dom"

export default function Banner({children,title,subtitle,path}) {
    return (
         <div className="jumbotron">
            <h1 className="display-4">{title}</h1>
            <div></div>
            <h2 className="lead">{subtitle}</h2>
            <p className="lead">
                <Link to={path} className="btn btn-info btn-lg" role="button">{children}</Link>
            </p>
        </div>
    )
}
