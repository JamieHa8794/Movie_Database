import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import {load, loadMovies} from './store'

class App extends Component{
    constructor(){
        super();
        this.state = {
           movies : [] 
        }
    }
    async componentDidMount(){
        const movies = (await(axios.get('/api/movies'))).data;
        this.setState({movies : movies})
    }
    render(){
        return(
            <div>
                <h1>Movie Database</h1>
                <Movies movies={movies}/>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return state;
}
const mpaDispatchToProps = (dispatch) =>{

}



export default connect(mapStateToProps, mpaDispatchToProps)(App)