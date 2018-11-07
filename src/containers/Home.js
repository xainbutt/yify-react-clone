import React, { Component } from 'react';
import axios from "axios/index";
import SearchForm from '../components/Search/SearchForm';
import MovieSection from '../components/Movie/MovieSection';
import Spinner from '../components/Shared/Spinner';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSubmitting: false,
            movieCount: null,
            page: 1,
            movies: [],
        }
    }

    componentDidMount() {

    }

    handleSearch = searchParams => {
        this.setState({isSubmitting: true})
        const { searchTerm, rating, genre } = searchParams

        axios.get(`https://yts.am/api/v2/list_movies.json?page=${this.state.page}&query_term=${searchTerm}&rating=${rating}&genre=${genre}`)
            .then( ({data}) => {
                if(data.data.movies_count === 0){
                    this.setState({
                        movieCount: data.data.movie_count,
                        isSubmitting: false
                    })
                }else {
                    this.setState({
                        movies: data.data.movies,
                        movieCount: data.data.movie_count,
                        isSubmitting: false
                    })
                }

                console.log(data.data.movies)
            })
            .catch( (err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                {this.state.isSubmitting && <Spinner/>}
                <SearchForm onSubmit={this.handleSearch}/>
                {
                    this.state.movies  &&
                        <MovieSection movies={this.state.movies} />
                }
            </div>
        );
    }
}

export default Home;
