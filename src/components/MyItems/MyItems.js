import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import MyItemList from "../Share/ItemList/MyItemList";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:5000/singleUserData?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  //remove data
  const removeItem = (id) => {
    const sure = window.confirm("Are you sure remove it");
    if (sure) {
      const url = `http://localhost:5000/productItem/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          const newItems = items.filter((item) => item._id !== id);
          setItems(newItems);
          if ((result.acknowledged = true)) {
            toast.error("Item remove success");
          }

          console.log(result);
        });
    }
  };

  return (
    <div>
      <div>
        {items.map((item) => (
          <MyItemList
            key={item._id}
            item={item}
            removeItem={removeItem}
          ></MyItemList>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
