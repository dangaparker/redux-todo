import React from 'react';
import { Link } from 'react-router-dom';
import './not_found.css';


export default props => {
    return(
        <div className="not_found">
            <div className="not-found-content">
                <h1>404 Page not found</h1>
            </div>
        </div>
    )
}