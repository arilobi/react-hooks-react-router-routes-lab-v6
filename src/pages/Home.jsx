import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchedMovies = [
      { id: 1, title: "Doctor Strange" },
      { id: 2, title: "Trolls" },
      { id: 1, title: "Jack Reacher: Never Go Back" },
    ];
    setMovies(fetchedMovies);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <div>
          {movies.map(movie => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
