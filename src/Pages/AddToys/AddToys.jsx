const AddToys = () => {
  const addItems = [
    {
      title: "Seller Name",
      name: "seller",
      placeholder: "",
    },
    {
      title: "Seller Email",
      name: "email",
      placeholder: "",
    },
    {
      title: "Toy Name",
      name: "name",
      placeholder: "Toy Name",
    },
    {
      title: "Picture Url",
      name: "photo",
      placeholder: "Picture Url of the toy",
    },
    {
      title: "Sub Category",
      name: "photo",
      placeholder: "Picture Url of the toy",
    },
    {
        title: "Price",
        name: "price",
        placeholder: "Price of the toy",
      },
    {
      title: "Available Quantity",
      name: "quantity",
      placeholder: "Available Quantity",
    },
    {
        title: "Rating",
        name: "rating",
        placeholder: "give rating out of 5",
      }
  ];

  return (
    <div className="bg-cyan-300 p-20">
      <h2 className="text-3xl font-semibold">Add a toy</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

            {
                addItems.map((addItem,index)=><label key={index} className="input-group">
                <span className="w-2/5">{addItem.title}</span>
                <input
                  type="text"
                  name={`${addItem.name}`}
                  placeholder={`${addItem.placeholder}`}
                  className="input input-bordered w-full"
                />
              </label>)
            }
        </div>
      </form>
    </div>
  );
};

export default AddToys;
