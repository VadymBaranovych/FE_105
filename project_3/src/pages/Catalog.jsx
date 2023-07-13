import React, {useEffect} from 'react';

import { useParams } from 'react-router-dom';

import PageHeader from '../components/page-header/PageHeader';
import MovieGrid from '../components/movie-grid/MovieGrid';

import { category as cate } from '../api/tmdbApi';

const Catalog = () => {

    useEffect(() => {
        document.title = 'Cinestar | Catalog';
      },[]);

    const { category } = useParams();

    return (
        <>
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'TV Searies'}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category}/>
                </div>
            </div>
        </>
    );
}

export default Catalog;