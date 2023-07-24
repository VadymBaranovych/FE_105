import React, {useEffect} from 'react';
import page404 from '../img/404.png';
import {Link} from 'react-router-dom';

import './not-found-page.scss';

const NotFoundPage = () => {

    useEffect(() => {
        document.title = '404';
    }, []);

    return (
        <div className={'page-404'}>
           <img src={page404} alt="404"/>
            <h2>Sorry page not found </h2>
            <Link to={'/'}>Back to Home</Link>
        </div>
    )
}

export default NotFoundPage;