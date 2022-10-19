import React from "react";
import "./history-page.css"

const HistoryPage = ({theme}) => {
    return (
        <div className={`history card border-info mb-3 history-${theme}`}>
            <h1 className="card-header">Pokemon History</h1>
            <div className="card-body">
                <p>
                Pokémon (an abbreviation for Pocket Monsters in Japan) is a Japanese media franchise managed by The Pokémon Company, a company founded by Nintendo, Game Freak, and Creatures. The franchise was created by Satoshi Tajiri in 1996, and is centered on fictional creatures called "Pokémon". In Pokémon, humans, known as Pokémon Trainers, catch and train Pokémon to battle other Pokémon for sport. All media works within the franchise are set in the Pokémon universe. The English slogan for the franchise is "Gotta Catch ‘Em All!". There are currently 913 Pokémon species. 
                </p>
                <p>
                The franchise began as Pocket Monsters: Red and Green (later released outside of Japan as Pokémon Red and Blue), a pair of video games for the original Game Boy handheld system that were developed by Game Freak and published by Nintendo in February 1996. It soon became a media mix franchise adapted into various different media. Pokémon is estimated to be the highest-grossing media franchise of all time. The Pokémon video game series is the third best-selling video game franchise of all time with more than 440 million copies sold and one billion mobile downloads. The Pokémon video game series spawned an anime television series that has become the most successful video game adaptation of all time with over 20 seasons and 1,000 episodes in 192 countries. The Pokémon Trading Card Game is the highest-selling trading card game of all time with over 43.2 billion cards sold. In addition, the Pokémon franchise includes the world's top-selling toy brand, an anime film series, a live-action film (Detective Pikachu), books, manga comics, music, merchandise, and a temporary theme park. The franchise is also represented in other Nintendo media, such as the Super Smash Bros. series, where various Pokémon characters are playable.
                </p> 
            </div>
        </div>
    )
}

export default HistoryPage;