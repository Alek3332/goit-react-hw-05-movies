import { Link } from 'react-router-dom';

const AdditionalInfo = ({ location }) => {
  return (
    <div>
      <h4>Addititonal information</h4>
      <ul>
        <li key="cast">
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li key="reviews">
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;