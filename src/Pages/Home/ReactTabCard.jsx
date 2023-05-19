const ReactTabCard = ({ toy }) => {
  const { name, picture_url, price, rating, description } = toy;
  return (
    <div className="card w-96 bg-base-100 border shadow-xl mb-3">
        <figure >
        <img src={picture_url} alt="Shoes" />
        
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
      <div className="card-actions justify-center mb-2">
          <button className="btn btn-active btn-secondary ">Buy Now</button>
        </div>
    </div>
  );
};

export default ReactTabCard;
