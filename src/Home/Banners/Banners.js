import React from "react";

const Banners = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/SmZRfVc/Bgmages.jpg')] bg-no-repeat bg-cover w-11/12 mx-auto">
      <div className="grid grid-cols-2 justify-around">
        <div className=" px-20 pt-16 pb-4">
          <div className="px-20">
            <h1 className="text-3xl font-bold text-green-700 text-left banner-font-family">
              GOOD TIMES
            </h1>
            <h1 className="text-3xl font-bold text-green-700 ml-10 banner-font-family">
              GREAT RIDES
            </h1>
          </div>

          <h1 className="text-2xl font-bold text-sky-700 my-3 banner-font-family">
            BRAND New BIKE WERHOUSE
          </h1>
          <h1 className="text-xl font-bold text-sky-600 my-3 text-shadow">
            Avail Best SERVICE and Exclusive Offers
          </h1>
          <h1 className="text-2xl font-bold text-sky-700 my-3">
            1 Year Free Insurance
          </h1>
          <p className="m-0 text-sm">
            <b>Description:</b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            eligendi assumenda sunt amet vel deleniti veritatis animi
            consequatur! Similique, exercitationem error quisquam dicta sit
            consequuntur libero culpa illo excepturi quo!
          </p>
          <button className="px-4 text-white rounded  my-5 bg-green-600">
            {" "}
            See more &#8594;
          </button>
        </div>
        <div>
          <img src="https://i.ibb.co/wJVqMvd/Banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banners;
