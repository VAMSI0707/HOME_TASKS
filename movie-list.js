import Movie from './movie';

function MovieList(props) {
  const { movies } = props;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
