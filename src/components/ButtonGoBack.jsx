import { Link } from 'react-router-dom';

const ButtonGoBack = ({ backLinkHref }) => {
  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
    </div>
  );
};

export default ButtonGoBack;