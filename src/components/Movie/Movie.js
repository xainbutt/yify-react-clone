import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({image, description, title, language, year, movieLink, id}) => {
    return (
        <div className='col s12 m3'>
            <div className="card hoverable">
                <div className="card-image">
                    {/*<img src={image} />*/}
                    <img className="materialboxed" src={image}  />
                    <span className="card-title"> <Link to={`/movies/${id}`}> {title} </Link> </span>
                    <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">add</i>
                    </a>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4"><i
                        className="material-icons right">visibility</i></span>
                    <p className={'truncate'}>{description}</p>

                </div>

                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{title}<i
                        className="material-icons right">close</i></span>
                    <p>{description}</p>
                    <p>Language: {language} </p>
                    <p>Year: {year} </p>
                </div>

                <div className="card-action">
                    <a href={movieLink} target='_blank'>Download<i
                        className="material-icons right">file_download</i></a>
                </div>
            </div>

        </div>
    )
}

export default Movie;
