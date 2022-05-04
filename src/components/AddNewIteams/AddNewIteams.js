import React from "react";

const AddNewIteams = () => {
  const handleItemAdd = (event) => {
    event.preventDefault();

    const productName = event.target.productname.value;
    const supplyerName = event.target.supplyername.value;
    const price = event.target.price.value;
    const productquntity = event.target.productquntity.value;
    const img = event.target.img.value;
    const description = event.target.description.value;
    const item = {
      productName,
      supplyerName,
      price,
      productquntity,
      img,
      description,
    };
    console.log(item);
  };
  return (
    <div className=" border-2 w-6/12 mx-auto rounded-xl p-8">
      <h1 className="m-0 text-3xl font-semibold text-lime-700">
        Please Add a New Items
      </h1>
      <form onSubmit={handleItemAdd}>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="productname">Product Name: </label>
          <br />
          <input
            className="border-2 rounded-full w-80 p-2"
            type="text"
            name="productname"
            id="productname"
            required
            placeholder="Product Name"
          />
        </div>
        <div className="my-4 mx-8 text-left ">
          <label htmlFor="supplyername">Supplyer Name: </label>
          <br />
          <input
            className="border-2 rounded-full w-80 p-2"
            type="text"
            name="supplyername"
            id="supplyername"
            required
            placeholder="Supplyer Name"
          />
        </div>
        <div className="my-4 mx-8 text-left ">
          <label htmlFor="price">Price: </label>
          <br />
          <input
            className="border-2 rounded-full w-80 p-2"
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            required
          />
        </div>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="productquntity">Product Countity: </label>
          <br />
          <input
            className="border-2 rounded-full w-80 p-2"
            type="number"
            name="productquntity"
            id="productquntity"
            placeholder="Product Countity"
            required
          />
        </div>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="img">Img Url: </label>
          <br />
          <input
            className="border-2 rounded-full w-80 p-2"
            type="text"
            name="img"
            id="img"
            placeholder="Img Url"
            required
          />
        </div>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="description">Description: </label>
          <br />
          <textarea
            className="border-2 rounded-md"
            name="description"
            id="description"
            cols="40"
            rows="3"
            placeholder="Short Description"
            required
          ></textarea>
        </div>

        <div>
          <input
            className="py-3 px-5 bg-emerald-600 text-white font-semibold text-2xl rounded-2xl"
            type="submit"
            value="Add Iteams"
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewIteams;
