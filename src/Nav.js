import React from "react";

const Nav = () =>{
    return(
        <nav>
            <h2 className="nav-title">Le Movie Database</h2>
            <div className="nav-links">
            <a href='/'>Home</a>
            <a href='/'>Movies</a>
            <a href='/'>Directors</a>
            <a href='/'>Actors/Actresses</a>
            </div>

        </nav>
    )
}

export default Nav