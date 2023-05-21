import { Link } from "react-router-dom";

const ReactTabCard = ({ toy }) => {
  const { _id, name, picture_url, price, rating, description } = toy;

  return (
    <div>
      <div className="card w-96 bg-base-100 border shadow-xl mb-3 mx-5 h-full">
        <figure>
          <img src={picture_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Price:{price}</p>
          <p>Rating: {rating}</p>
        </div>
        <div className="card-actions justify-center mb-4">
          <Link to={`/products/${_id}`} className="btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReactTabCard;
