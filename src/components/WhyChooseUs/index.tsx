import SectionTitle from "../Common/SectionTitle";
import SingleWhyChooseUs from "./SingleWhyChooseUs";
import whyChooseUsData from "./whyChooseUsData";

const WhyChooseUs = () => {

  return (
    <>
      <section id="features" className="py-12 md:py-12 lg:py-15">
        <div className="container">
          <SectionTitle
            title="Why Choose Us For Your Digital Needs?"
            paragraph={""}
            center
            mb="50px"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
            {whyChooseUsData.map((whyChoose) => (
              <SingleWhyChooseUs key={whyChoose.id} whyChoose={whyChoose} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
