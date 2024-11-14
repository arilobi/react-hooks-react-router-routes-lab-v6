import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const actorsData = [
  { id: 1, name: "Benedict Cumberbatch", movies: ["Doctor Strange", "The Imitation Game", "Black Mass"] },
  { id: 2, name: "Justin Timberlake", movies: ["Trolls", "Friends with Benefits", "The Social Network"] },
  { id: 3, name: "Anna Kendrick", movies: ["Pitch Perfect", "Into The Wood"] }
];

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    setActors(actorsData);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map(actor => (
           <article key={actor.id}>
              <h2>{actor.name}</h2>
                <ul>
                {actor.movies.map(movie => (
                  <li key={movie}>{movie}</li>
              ))}
                </ul>
           </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
