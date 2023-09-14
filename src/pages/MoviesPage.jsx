const MoviesPage = () => {
  const movies = [
    {
      title: "The Shawshank Redemption",
      year: 1994,
      director: "Frank Darabont",
      rate: 9.3,
      id: 1,
    },
    {
      title: "The green elephant",
      year: 1999,
      director: "Svetlana Baskova",
      rate: 6.3,
      id: 2,
    },
  ];
  
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <p>{movie.title}</p>
          <p>{movie.year}</p>
          <p>{movie.director}</p>
          <p>{movie.rate}</p>
        </li>
      ))}
    </ul>
  )
}
export default MoviesPage