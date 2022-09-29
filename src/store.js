import {createStore} from 'redux';



//action constants
const LOADED = 'LOADED';
const LOAD_MOVIES = 'LOAD_MOVIES';


const initialState = {
    movies: [],
    loading: true
}


const store = createStore((state = initialState, action)=>{
    if(action.type === LOADED){
        return({...state, loading: false})
    }
    if(action.type === LOAD_MOVIES){
        return({...state, movies: action.movies})
    }
    return state;
})


//action creators
const load = () =>{
    return{
        type: LOADED
    }
}
const loadMovies = (moies) =>{
    return{
        type: LOAD_MOVIES,
        movies : movies
    }
}


export default store
export {load, loadMovies}