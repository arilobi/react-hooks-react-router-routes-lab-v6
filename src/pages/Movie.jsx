import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movieData = [ 
  { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Adventure", "Fantasy"] }, 
  { id: 2, title: "Trolls", time: 92, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"] }, 
  { id: 3, title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"] } 
];

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => { 
    const fetchedMovie = movieData.find(movie => movie.id === parseInt(id)); 
    if (fetchedMovie) { 
      setMovie(fetchedMovie); 
    } 
  }, [id]);

  if (!movie) return <div>Loading...</div>

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
};

export default Movie;
