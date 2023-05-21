import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user, loading } = useContext(AuthContext);
  console.log(user?.email);
  console.log(myToys);

  // useEffect(() => {
  //   fetch("http://localhost:5000/myProducts",{

  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({ email: "omarfaruque1750@gmail.com" }),

  //   })

  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMyToys(data);

  // }, [user?.email]);

  useEffect(() => {
    fetch("http://localhost:5000/myProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user?.email]);

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
          {myToys.map((toy, index) => (
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

export default MyToys;
