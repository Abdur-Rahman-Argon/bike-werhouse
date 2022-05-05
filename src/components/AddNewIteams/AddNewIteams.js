import React from "react";
import { useForm } from "react-hook-form";

const AddNewIteams = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className=" border-2 w-4/12 mx-auto rounded-xl p-8 shadow-2xl">
      <h1 className="m-0 text-3xl font-semibold text-lime-700">
        Please Add a New Items
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="productName">Product Name: </label>
          <br />
          <input
            className="border-2 rounded-xl w-80 p-2"
            type="text"
            name="productName"
            id="productName"
            placeholder="Product Name"
            {...register("productName", { required: true })}
          />
        </div>
        <div className="my-4 mx-8 text-left ">
          <label htmlFor="supplierName">Supplyer Name: </label>
          <br />
          <input
            className="border-2 rounded-xl w-80 p-2"
            type="text"
            name="supplierName"
            id="supplierName"
            placeholder="Supplier Name"
            {...register("supplierName", { required: true })}
          />
        </div>
        <div className="my-4 mx-8 text-left ">
          <label htmlFor="price">Price: </label>
          <br />
          <input
            className="border-2 rounded-xl w-80 p-2"
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            {...register("price", { required: true })}
          />
        </div>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="productquntity">Product Countity: </label>
          <br />
          <input
            className="border-2 rounded-xl w-80 p-2"
            type="number"
            name="productquntity"
            id="productquntity"
            placeholder="Product Countity"
            {...register("stock", { required: true })}
          />
        </div>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="img">Img Url: </label>
          <br />
          <input
            className="border-2 rounded-xl w-80 p-2"
            type="text"
            name="img"
            id="img"
            placeholder="Img Url"
            {...register("img", { required: true })}
          />
        </div>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="description">Description: </label>
          <br />
          <textarea
            className="border-2 rounded-md px-3"
            name="description"
            id="description"
            cols="40"
            rows="3"
            placeholder="Short Description"
            {...register("description", { required: true })}
          ></textarea>
        </div>

        <div>
          <input
            className="py-3 px-5 bg-emerald-600 text-white font-semibold text-2xl rounded-md"
            type="submit"
            value="Add Iteams"
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewIteams;
