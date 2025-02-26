import { TermsAndConditions } from "@/types/termsAndConditions";

const SingleTermsAndConditions = ({ termsAndConditions }: { termsAndConditions: TermsAndConditions }) => {
  const { icon, title, paragraph } = termsAndConditions;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md text-[#00a0e3]">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleTermsAndConditions;