import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllToys = () => {
  const { loading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const limitedToys = toys.slice(0, 20);

  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-faruque-parvej.vercel.app/products"
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center my-4">
        <button className="btn loading">loading</button>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
          </tr>
        </thead>
        <tbody>
          {/* row 2 */}
          {limitedToys.map((toy, index) => (
            <tr key={toy._id} className="hover">
              <th>{index + 1}</th>
              <td>{toy.seller_name}</td>
              <td>{toy.name}</td>
              <td>{toy.sub_category}</td>
              <td>{toy.price}</td>
              <td>{toy.available_quantity}</td>
              <td>
                <Link className="btn" to={`/products/${toy._id}`}>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
