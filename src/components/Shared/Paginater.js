import React from 'react';
import { Link } from 'react-router-dom';

// total records
// per page records
// records
const Paginater = (props) => {
    return (
        <div className={'row center-align'}>
            <ul className="pagination">
                <li className="waves-effect"><Link to='' >Prev</Link></li>
                <li className="waves-effect"><Link tp='' >Next</Link></li>
            </ul>
        </div>
    );
}