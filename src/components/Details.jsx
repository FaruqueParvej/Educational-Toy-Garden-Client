import { useLoaderData } from "react-router-dom";

const Details = () => {
  const singleToyDetails = useLoaderData();
  const { _id, name, picture_url, price, rating, description } =
    singleToyDetails;
  // console.log(details);
  return (
    <div>
      <div className="card w-96 bg-base-100 border shadow-xl mb-3 mx-auto h-full">
        <figure>
          <img src={picture_url} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
