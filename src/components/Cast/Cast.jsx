import { fetchMoreInfoByMovieId } from 'api/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nothing from '../../images/NoImage.jpeg';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w500';

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

  return casts ? (
    <div>
      <h3>Cast</h3>
      <ul>
        {casts?.cast.map(item => (
          <li key={item.credit_id}>
            <img
              width="250"
              src={
                item.profile_path
                  ? `${BASE_IMAGE_URL}${POSTER_SIZE}${item.profile_path}`
                  : `${Nothing}`
              }
              alt="cast member"
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
              src={
                item.profile_path
                  ? `${BASE_IMAGE_URL}${POSTER_SIZE}${item.profile_path}`
                  : `${Nothing}`
              }
              alt="crew member"
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
