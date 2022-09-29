import React from 'react';
import { Connect } from 'react-redux';


const Movies = () =>{
    const movies = this.props
    return(
        <div>
            <ul>
                {moveis.map((movie,idx) =>{
                    return(
                        <li key={idx}>
                            {movie.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return state
}


export default connect(mapStateToProps)(Movies);