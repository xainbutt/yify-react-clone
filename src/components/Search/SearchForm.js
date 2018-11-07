import React, { Component } from 'react';
import {
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Input,
    TextField,
    Button

} from '@material-ui/core';

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            genre: 'action',
            rating: '7'
        }

    }

    handleChange = e => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        // const arr = []
        // for (var prop in this.state) {
        //     if (this.state.hasOwnProperty(prop)) {
        //         arr.push(this.state[prop])
        //     }
        // }
        this.props.onSubmit(this.state)
        console.log('form submitted')
    }

    handleGenre = e => {
        this.setState({genre: e.target.value})
        // console.log(e.target.value)
    }

    handleRating = e => {
        this.setState({rating: e.target.value})
        // console.log(e.target.value)
    }

    render() {
        return (
            <div style={{marginTop: '50px'}}>
                <div className="row">
                    <div className="col s12">
                        <div className="search-terms">
                            {
                                this.state.searchTerm &&
                                <div>
                                    <div className="chip">
                                        {this.state.searchTerm} <i className="close material-icons">close</i>
                                    </div>

                                    <div className="chip">
                                        {this.state.genre} <i className="close material-icons">close</i>
                                    </div>

                                    <div className="chip">
                                        {this.state.rating} <i className="close material-icons">close</i>
                                    </div>
                                </div>

                            }

                        </div>
                    </div>
                </div>
                <form onSubmit={ this.handleSubmit }>
                    <div className="row">
                        <div className={'col s12 m10 center-align'}>
                            <div className="input-field">
                                <i className="material-icons prefix">search</i>
                                <input type="text" autoComplete={"false"} autoFocus value={this.state.searchTerm} onChange={this.handleChange} name="tag" placeholder='Star Wars' />
                                <label htmlFor="tag">Search Term</label>
                            </div>
                        </div>

                        <div className={'col s12 m1 center-align'}>
                            <div className="input-field ">
                                <FormControl>
                                    <InputLabel shrink htmlFor="genre">
                                        Genre
                                    </InputLabel>
                                    <Select value={this.state.genre}
                                            onChange={this.handleGenre}
                                            input={<Input name="genre" id="genre" />}
                                            name="genre"
                                    >
                                        <MenuItem value="comedy"> Comedy</MenuItem>
                                        <MenuItem value="action"> Action</MenuItem>
                                        <MenuItem value="crime"> Crime</MenuItem>
                                        <MenuItem value="drama"> Drama</MenuItem>
                                        <MenuItem value="sci-fi"> Sci-fi</MenuItem>
                                        <MenuItem value="horror"> Horror</MenuItem>
                                        <MenuItem value="sport"> Sport</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>

                        <div className={'col s12 m1 center-align'}>
                            <div className="input-field ">

                                <FormControl className={{minWidth: 120}}>
                                    <InputLabel shrink htmlFor="rating">
                                        Rating
                                    </InputLabel>
                                    <Select value={this.state.rating}
                                            onChange={this.handleRating}
                                            input={<Input name="rating" id="rating" />}
                                            name="rating"
                                    >
                                        <MenuItem value="9"> 9</MenuItem>
                                        <MenuItem value="8"> 8</MenuItem>
                                        <MenuItem value="7"> 7</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="center-align">
                            <button className={'btn-large waves-effect red lighten-3'} type={'submit'}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default SearchForm;
