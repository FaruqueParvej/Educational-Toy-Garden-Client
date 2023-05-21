import { useLoaderData } from "react-router-dom";

const Details = () => {
  const singleToyDetails = useLoaderData();
  const {
    _id,
    name,
    picture_url,
    price,
    rating,
    description,
    seller_name,
    seller_email,
    sub_category,
  } = singleToyDetails;
  // console.log(details);
  return (
    <div>
      <div className="card w-96 bg-base-100 border shadow-xl mb-3 mx-auto h-full">
        <figure>
          <img src={picture_url} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            <strong className="pe-2">Seller Name:</strong>
            {seller_name}
          </p>
          <p>
            <strong className="pe-2">seller_email:</strong>
            {seller_email}
          </p>
          <p>
            <strong className="pe-2">Sub Category:</strong>
            {sub_category}
          </p>
          <p>
            <strong className="pe-2">Description: </strong>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
