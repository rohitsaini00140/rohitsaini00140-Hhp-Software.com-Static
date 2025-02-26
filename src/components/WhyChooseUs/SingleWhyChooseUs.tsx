import { WhyChooseUs } from "@/types/whyChooseUs";

const SingleWhyChooseUs = ({ whyChoose }: { whyChoose: WhyChooseUs }) => {
  const { icon, title, paragraph } = whyChoose;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className=" flex sm:items-left sm:justify-left lg:items-left lg:justify-left mb-10  items-center justify-center rounded-md text-[#00a1e3]">
          {icon}
        </div>
        <h3 className="sm:items-left sm:justify-left mb-5 flex justify-center text-xl font-bold text-black dark:text-white  sm:text-2xl lg:text-xl xl:text-2xl ">
          {title}
        </h3>
        <p className="flex pr-[10px] text-base font-medium leading-relaxed text-body-color  ">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleWhyChooseUs;
