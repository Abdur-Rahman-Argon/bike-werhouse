import React from "react";

const AddNewIteams = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="">Product Name: </label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Supplyer Name: </label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Price: </label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Product Countity: </label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Description: </label>
          <textarea name="" id="" cols="30" rows="2"></textarea>
        </div>

        <div>
          <input type="submit" value="Add Iteams" />
        </div>
      </form>
    </div>
  );
};

export default AddNewIteams;
