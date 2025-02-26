"use client"

import Faq from "react-faq-component";
import { FAQsdata } from "./FAQsData";

const FAQs = () => {

  const styles = {
    bgColor: 'transparent',
    titleTextColor: "text-white font-bold",
    rowTitleColor: "text-gray-500",
    rowTitleTextSize: "text-xl",
    rowContentTextSize: "text-base",
    rowContentColor: 'text-white',
    rowContentPaddingRight: "pr-12",
    arrowColor: "#00a1e3",
    titleTextSizePaddingBottom: "pb-8",
  };

  const config = {
    animate: true,
    tabFocus: true,
    rowClassName: "border-b border-gray-200 py-4", 
    arrowClassName: "transform transition duration-300 ease-in-out",
    contentVisibleClassName: "opacity-100",
  };

  return (
    <section className="container py-[5rem]">
      <Faq
        data={FAQsdata}
        styles={styles}
        config={config}
      />
    </section>
  );
};

export default FAQs;