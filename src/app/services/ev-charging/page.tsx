import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import evdata from "./evData";


export const metadata: Metadata = {
  title: "EvCharging Services",
};

function EvCharging() {
  return (
    <div className="mb-6 mt-20 flex flex-col items-center justify-center px-4 py-8 md:mb-1 md:mt-20 md:px-12">
      {/* Content Section */}
      <div className="flex w-full max-w-screen-xl flex-wrap items-center justify-between">
        {/* Left Content */}
        <div className="w-full px-4 text-center md:w-1/2 md:text-left">
          <h1 className="mb-4 text-xl  font-extrabold text-gray-800 md:text-2xl lg:text-4xl">
            India’s first FREE Charger Management Software
          </h1>
          <p className="text-lg text-gray-600">
            Install ElectricPe charging points with zero complications
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-4 flex w-full justify-center md:mt-0 md:w-1/2">
          {/* <img
            src="/images/Evcharge/evCharging1.png"
            alt="EV Charging Station"
            className="w-full max-w-xs md:max-w-md rounded-lg"
          /> */}

          <Image
            src={"/images/Evcharge/vntDashboard.png"}
            width={70}
            height={50}
            alt="EV Charging Station"
            className="w-full max-w-xs rounded-lg md:max-w-md"
          />
        </div>

      
     <div className="mt-10 w-full text-center">
          <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
            What is Charger Management Software (CMS)?
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-left">
            Through our CMS, Charge Point Operators (CPOs) get to manage their
            Electric Vehicle charging stations across locations from a single
            application. Real-time monitoring and optimization capabilities for
            charging are just some of the features of the software that helps
            CPOs grow and scale their charging station business efficiently.
          </p>
        </div> 
      </div>


      <section className="mt-10 w-full bg-white py-12 text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">CMS Features</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {evdata.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={feature.img}
                alt={feature.title}
                className="mb-4 h-24 w-24"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-left">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-left">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EvCharging;
