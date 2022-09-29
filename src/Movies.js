import React from 'react';
import { connect } from 'react-redux';


const Movies = ({movies}) =>{
    return(
        <div>
            <ul className='movies-ul'>
                {movies.map((movie,idx) =>{
                    return(
                        <li key={idx} className='movies-movieBox'>
                            <img src={movie.posterIMG} className='movies-img'/>
                            <div className='movies-title'>
                            {movie.title}
                            </div>
                            <div>
                                {movie.relasedYear}
                            </div>
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