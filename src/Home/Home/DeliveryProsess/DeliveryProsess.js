import React from "react";

const DeliveryProsess = () => {
  return (
    <div className="grid grid-cols-4 justify-around">
      <div className="w-60 text-center my-10">
        <div className="my-3">
          <img
            src="https://i.ibb.co/QJzd3D6/box.png"
            className="mx-auto w-40"
            alt=""
          />
        </div>
        <div>
          <h2>BOX</h2>
        </div>
      </div>
      <div className="w-60 text-center my-10">
        <div className="my-3">
          <img
            src="https://i.ibb.co/BKhs8kY/collect.png"
            className="mx-auto w-40"
            alt=""
          />
        </div>
        <div>
          <h2>COLLECT</h2>
        </div>
      </div>
      <div className="w-60 text-center my-10">
        <div className="my-3">
          <img
            src="https://i.ibb.co/W6GQ0kN/store.png"
            className="mx-auto w-40"
            alt=""
          />
        </div>
        <div>
          <h2>STORE</h2>
        </div>
      </div>
      <div className="w-60 text-center my-10">
        <div className="my-3">
          <img
            src="https://i.ibb.co/rH6nSKM/deliver.png"
            className="mx-auto w-40"
            alt=""
          />
        </div>
        <div>
          <h2>DELIVERY</h2>
        </div>
      </div>
    </div>
  );
};

export default DeliveryProsess;
