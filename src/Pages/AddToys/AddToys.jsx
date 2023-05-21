import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const addItems = [
    {
      title: "Seller Name",
      name: "seller_name",
      placeholder: "",
    },
    {
      title: "Seller Email",
      name: "seller_email",
      placeholder: "",
    },
    {
      title: "Toy Name",
      name: "name",
      placeholder: "Toy Name",
    },
    {
      title: "Picture Url",
      name: "picture_url",
      placeholder: "Picture Url of the toy",
    },
    {
      title: "Sub Category",
      name: "sub_category",
      placeholder: "Picture Url of the toy",
    },
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
      title: "Rating",
      name: "rating",
      placeholder: "give rating out of 5",
    },
    {
      title: "Description",
      name: "description",
      placeholder: "give description",
    },
  ];

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const sub_category = form.sub_category.value;
    const name = form.name.value;
    const picture_url = form.picture_url.value;
    const price = form.price.value;
    const available_quantity = form.available_quantity.value;
    const rating = form.rating.value;

    const newToy = {
      seller_name,
      seller_email,
      name,
      sub_category,
      picture_url,
      price,
      available_quantity,
      rating,
    };
    console.log(newToy);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "toy added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-cyan-300 p-20 md:m-20 md:rounded-3xl">
      <h2 className="text-3xl font-semibold text-center">Add a toy</h2>
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:mb-5">
          {addItems.map((addItem, index) => (
            <label key={index} className="input-group">
              <span className="w-2/5">{addItem.title}</span>
              <input
                type="text"
                name={`${addItem.name}`}
                defaultValue={
                  addItem.title === "Seller Email"
                    ? `${user?.email}`
                    : addItem.title === "Seller Name"
                    ? `${user?.displayName}`
                    : ""
                }
                placeholder={`${addItem.placeholder}`}
                className="input input-bordered w-full"
              />
            </label>
          ))}
        </div>
        <input className="btn btn-block my-5" type="submit" value="add toy" />
      </form>
    </div>
  );
};

export default AddToys;
