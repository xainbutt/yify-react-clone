import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../components/Shared/Spinner';
import MovieSection from '../components/Movie/MovieSection';

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            page: 2,
            isFetching: true
        }
    }

    componentDidMount() {
        this.fetchMovies(this.state.page)
    }

    fetchMovies = (page, limit = 12) => {
        this.setState({
            isFetching: true
        })
        axios.get(`https://yts.am/api/v2/list_movies.json?limit=${limit}&page=${page}`)
            .then( ({data}) => {
                this.setState({
                    movies: data.data.movies,
                    page: page,
                    isFetching: false
                })
            })
            .catch( err => {
                console.log(err)
            })
    }

    handlePagination = (type) => {
        if(type === 'Prev'){
            this.fetchMovies(this.state.page - 1)
        } else {
            this.fetchMovies(this.state.page + 1)
        }
    }

    render() {
        return (
          <div>

              {
                  this.state.isFetching ? <Spinner/>  :
                      <div style={{marginTop: '20px'}}>
                          <div className={'row center-align'}>
                              <button style={{marginRight: '10px'}} onClick={ () => this.handlePagination('Prev')} className={`${this.state.page === 1 ? 'disabled' : ''} red lighten-3 waves-effect btn`}>Prev</button>
                              <button onClick={ () => this.handlePagination('Next')} className="waves-effect btn red lighten-3">Next</button>
                          </div>
                          <MovieSection movies={this.state.movies} />
                          <div className={'row center-align'}>
                              <button style={{marginRight: '10px'}} onClick={ () => this.handlePagination('Prev')} className={`${this.state.page === 1 ? 'disabled' : ''} red lighten-3 waves-effect btn`}>Prev</button>
                              <button onClick={ () => this.handlePagination('Next')} className="waves-effect btn red lighten-3">Next</button>
                          </div>
                      </div>
              }


          </div>
        );
    }
}

export default Movie;