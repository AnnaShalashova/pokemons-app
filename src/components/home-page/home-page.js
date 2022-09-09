import React from "react";
import "./home-page.css"

const HomePage = () => {

    return (
        <div className="home-page">
            <p className="home-header"> Welcome to Pokemon Home!</p>
            <p className="home-body">There is website where you can see all pokemons. Just click on "Pokemons" and you can choose any pokemon!</p>
            <img className="home-img" alt="img-home" width="200px" 
                src="https://www.pngall.com/wp-content/uploads/2016/06/Pokemon-PNG-HD.png">
            </img>
        </div>
    )
}

export default HomePage;
   

