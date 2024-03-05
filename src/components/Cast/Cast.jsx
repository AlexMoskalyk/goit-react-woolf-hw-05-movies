import { fetchMoreInfoByMovieId } from 'api/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  //   const { casts } = useOutletContext();
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    const getCastById = async () => {
      try {
        const data = await fetchMoreInfoByMovieId(movieId, 'credits');
        setCasts(data);
      } catch (error) {
        alert(error.message);
      }
    };
    movieId && getCastById();
  }, [movieId]);

  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
  const POSTER_SIZE = 'w500';

  return casts ? (
    <div>
      <h3>Cast</h3>
      <ul>
        {casts?.cast.map(item => (
          <li key={item.credit_id}>
            <img
              width="250"
              src={`${BASE_IMAGE_URL}${POSTER_SIZE}${item.profile_path}`}
              alt="photo"
            />
            <p>Character:{item.character}</p>
            <p>Real name:{item.name}</p>
          </li>
        ))}
      </ul>
      <h3>Crew</h3>
      <ul>
        {casts?.crew.map(item => (
          <li key={item.credit_id}>
            <img
              width="250"
              src={`${BASE_IMAGE_URL}${POSTER_SIZE}${item.profile_path}`}
              alt="photo"
            />
            <p>Real name:{item.name}</p>
            <p>Job:{item.job}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>No Information</p>
  );
};

export default Cast;
