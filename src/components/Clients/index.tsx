"use client";

import Image from "next/image";
import brandsData from "./clientsData";
import Marquee from "react-fast-marquee";
import Link from "next/link";

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
            <div className="bg-white-300 dark:bg-white-dark rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              <Marquee {...settings}>
                {brandsData.map((brand) => (
                  <div key={brand.id} className="ml-[5rem]">
                    <Link href={brand?.link} passHref legacyBehavior={true}>
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src={brand.image}
                          alt={brand.name || "Brand Logo"}
                          width={100}
                          height={80}
                          className="h-[5rem]  object-cover"
                        />
                      </a>
                    </Link>
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
