import Movie from './movie';

function MovieList(props) {
  const { movies } = props;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
