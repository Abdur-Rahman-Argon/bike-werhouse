import React from "react";

const Delivery = () => {
  return (
    <div className="md:grid md:grid-cols-3 md:justify-around mx-auto">
      <div className="w-60 text-center my-10">
        <div className="my-3">
          <img
            src="https://i.ibb.co/ZKvf9fS/world.webp"
            className="mx-auto"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-md font-semibold my-2">WORLDWIDE DELIVERY</h1>
          <p className="text-sm">
            We work with the biggest delivery networks. It doesn't matter where
            in the world you are.
          </p>
        </div>
      </div>
      <div className="w-60 text-center my-10">
        <div className="my-3">
          <img
            src="https://i.ibb.co/R0hr2JG/car.webp"
            className="mx-auto"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-md font-semibold my-2">FREE SHIPPING</h1>
          <p className="text-sm">
            Stop wondering about shipping costs, what you see is what you pay.
          </p>
        </div>
      </div>
      <div className="w-60 text-center my-10">
        <div className="my-3">
          <img
            src="https://i.ibb.co/qrTjRyq/bag.webp"
            className="mx-auto"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-md font-semibold my-2">MONEY BACK GUARANTEE</h1>
          <p className="text-sm">
            Got a problem with the product? Don't worry, we have a 30 day money
            back guarantee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
