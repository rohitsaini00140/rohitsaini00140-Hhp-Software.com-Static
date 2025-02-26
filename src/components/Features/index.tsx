"use client"

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { usePathname } from 'next/navigation'

const Features = () => {

  const params = usePathname()

  return (
    <>
      <section id="features" className="py-8 md:py-10 lg:py-10">
        <div className="container">
          <SectionTitle
            title={params === "/about" ? "Our Services" : "Main Features"}
            paragraph={params !== "/about" && "Empowering innovation through cutting-edge IT solutions. Your trusted partner in navigating the digital landscape."}
            center
            mb="50px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
