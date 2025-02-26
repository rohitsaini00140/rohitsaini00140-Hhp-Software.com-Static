"use client";

import Image from "next/image";
import brandsData from "./clientsData";
import Marquee from "react-fast-marquee";

const Clients = () => {
  let settings: any = {
    direction: "left",
    speed: 50,
  };

  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="rounded-sm bg-white-300 px-8 py-8 dark:bg-white-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              <Marquee {...settings}>
                {brandsData.map((brand) => (
                  <div key={brand.id} className="ml-[5rem]">
                    <Image 
                      src={brand.image} 
                      alt={brand.name || "Brand Logo"} 
                      width={100} 
                      height={80} 
                      className="h-[5rem]" 
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
