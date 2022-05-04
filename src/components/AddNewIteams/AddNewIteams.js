import React from "react";

const AddNewIteams = () => {
  return (
    <div className=" border-2 w-6/12 mx-auto rounded-xl p-8">
      <h1 className="m-0 text-3xl font-semibold text-lime-700">
        Please Add a New Items
      </h1>
      <form>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="">Product Name: </label>
          <br />
          <input
            className="border-2 rounded-full w-80 p-2"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="my-4 mx-8 text-left ">
          <label htmlFor="">Supplyer Name: </label>
          <br />
          <input
            className="border-2 rounded-full w-80 p-2"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="my-4 mx-8 text-left ">
          <label htmlFor="">Price: </label>
          <br />
          <input
            className="border-2 rounded-full w-80 p-2"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="">Product Countity: </label>
          <br />
          <input
            className="border-2 rounded-full w-80 p-2"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="">Description: </label>
          <br />
          <textarea
            className="border-2 rounded-md"
            name=""
            id=""
            cols="40"
            rows="3"
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
