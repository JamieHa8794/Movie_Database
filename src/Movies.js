import React from 'react';
import { connect } from 'react-redux';


const Movies = ({movies}) =>{
    return(
        <div>
            <ul>
                {movies.map((movie,idx) =>{
                    return(
                        <li key={idx}>
                            {movie.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


const mapStateToProps = ({movies}) =>{
    return {
        movies
    }
}


export default connect(mapStateToProps)(Movies);