import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import {load, loadMovies} from './store'
import Movies from './Movies'
import Welcome from './Welcome'
import Nav from './Nav'

class _App extends Component{
    constructor(){
        super();
    }
    async componentDidMount(){
        this.props.load()
    }
    render(){
        const {movies} = this.props
        return(
            <div>
                <Nav/>
                <Welcome/>
                <Movies/>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return state;
}
const mpaDispatchToProps = (dispatch) =>{
    return{
        load: async ()=>{
            const movies = (await(axios.get('/api/movies'))).data;
            dispatch(load());
            dispatch(loadMovies(movies))
        }
    }

}


const App = connect(mapStateToProps, mpaDispatchToProps)(_App)


export default App