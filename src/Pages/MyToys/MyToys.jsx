import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const [editItem, setEditItem] = useState({});
  const { user, loading } = useContext(AuthContext);
  // console.log(editItem);
  const addItems = [
    {
      title: "Price",
      name: "price",
      placeholder: "Price of the toy",
    },
    {
      title: "Available Quantity",
      name: "available_quantity",
      placeholder: "Available Quantity",
    },

    {
      title: "Description",
      name: "description",
      placeholder: "give description",
    },
  ];

  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-faruque-parvej.vercel.app/myProducts",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: user?.email }),
      }
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user?.email, myToys]);

  const handleDelete = (id) => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-faruque-parvej.vercel.app/product/${id}`,
      {
        method: "Delete",
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleEdit = (id) => {
    const edit_Item = myToys.find((item) => item._id === id);
    console.log(edit_Item);
    setEditItem(edit_Item);
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    const form = e.target;

    const price = form.price.value;
    const available_quantity = form.available_quantity.value;

    const description = form.description.value;

    const updateToy = {
      price,
      available_quantity,

      description,
    };
    console.log(updateToy);
    fetch(
      `https://b7a11-toy-marketplace-server-side-faruque-parvej.vercel.app/product/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "success!",
            text: "toy updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

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
              <td>
                <label
                  htmlFor="my-modal"
                  className="btn"
                  onClick={() => handleEdit(toy._id)}
                >
                  Edit
                </label>
              </td>
              <td>
                <button className="btn" onClick={() => handleDelete(toy._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="bg-cyan-300 p-20  md:rounded-3xl">
            <h2 className="text-3xl font-semibold text-center">Edit toy</h2>
            <form onSubmit={(e) => handleUpdate(e, editItem?._id)}>
              <div className="grid grid-cols-1 gap-2 md:mb-5">
                {!editItem.price && <h1>Loading...</h1>}
                {editItem.price &&
                  addItems.map((addItem, index) => (
                    <label key={index} className="input-group">
                      <span className="w-2/5">{addItem.title}</span>
                      <input
                        type="text"
                        name={`${addItem.name}`}
                        defaultValue={
                          addItem.title === "Price"
                            ? `${editItem?.price}`
                            : addItem.title === "Available Quantity"
                            ? `${editItem?.available_quantity}`
                            : addItem.title === "Description"
                            ? `${editItem?.description}`
                            : ""
                        }
                        placeholder={`${addItem.placeholder}`}
                        className="input input-bordered w-full"
                      />
                    </label>
                  ))}
              </div>
              <div className="modal-action">
                <input
                  className="btn"
                  htmlFor="my-modal"
                  type="submit"
                  value="Update"
                />

                <label htmlFor="my-modal" className="btn">
                  Close{" "}
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
