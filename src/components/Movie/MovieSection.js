import React from 'react';
import Movie from './Movie'

const MovieSection = (props) => {
    return (
      <div className='row'>
          {
              props.movies.map(movie =>
                  <Movie
                      image={movie.medium_cover_image}
                      language={movie.language}
                      year={movie.year}
                      title={movie.title}
                      description={movie.summary}
                      movieLink={movie.url}
                      key={movie.id}
                      id={movie.id}
                  />)
          }
      </div>
    );
}

export default MovieSection;
