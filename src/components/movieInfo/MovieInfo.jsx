const MovieInfo = ({ movie }) => {
    const {
      title,
      name,
      overview,
      genres,
      release_date,
      first_air_date,
      poster_path,
      vote_average,
    } = movie;
  
    console.log(movie);
    const imgNotFound =
      'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
  
    const imgUrl = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : imgNotFound;
    return (
      <>
        <div>
          <img src={imgUrl} alt={title || name} width="200" />
          <div>
            <h2>
              {title || name} ({(first_air_date || release_date).slice(0, 4)})
            </h2>
  
            <p>User Score: {Math.round(vote_average * 10)}%</p>
  
            <h3>Overview</h3>
            <p>{overview}</p>
  
            <h3>Genres</h3>
            <p>{genres.map(({ name }) => name).join(', ')}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default MovieInfo;