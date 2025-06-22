function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImg} alt={title} />
      {summary ? <p>{summary}</p> : <p>Summary not found.</p>}
      {genres ? (
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      ) : null}
      <hr />
    </div>
  );
}

export default Movie;
