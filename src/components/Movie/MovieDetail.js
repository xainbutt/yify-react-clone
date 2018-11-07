import React from 'react';
import axios from 'axios';


class MovieDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        axios.get(`https://yts.am/api/v2/movie_details.json?movie_id=${this.props.match.params.id}`)
            .then(data => {
                this.setState({movie: data.data.data.movie})
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    render() {
        const { medium_cover_image, title, description_full, genres, year, yt_trailer_code, background_image_original, rating, url} = this.state.movie
        return (
            <div>
                {/*<div className="row">*/}
                    {/*<img src={background_image_original} alt=""/>*/}
                {/*</div>*/}

                <div className={'row'} style={{marginTop: 50}}>
                    <div className="col s12 m3">
                        <img className="materialboxed" src={medium_cover_image}  />
                    </div>
                    <div className="col s12 m6">
                        <div>
                            <h3>{title}</h3>
                            <blockquote>
                                {description_full}
                            </blockquote>
                            {
                                this.state.movie &&
                                <div className="center-align">
                                    <a href={`https://www.youtube.com/watch?v=${yt_trailer_code}`} target={'_blank'} className={'btn-large waves-effect red'} style={{marginRight: 10}} ><i
                                        className="material-icons left">play_arrow</i>Watch Youtube Trailer</a>

                                    <a href={url} target={'blank'} className={'btn-large waves-effect waves-light'} >Download <i
                                        className="material-icons left">file_download</i></a>
                                </div>
                            }


                        </div>
                    </div>

                    <div className="col s12 m3">
                        <p className={'chip'}>
                            Year of Release {` ${year}`}

                        </p>

                        <p className={'chip'}>
                            <img src={require('../../assets/images/logo-imdb.svg')} alt=""/> {` ${rating}`}
                        </p>


                        <p className={'chip'} >
                            {genres}
                        </p>
                    </div>

                </div>
            </div>

        );
    }

}

export default MovieDetail;