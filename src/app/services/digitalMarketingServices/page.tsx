import FAQs from "@/components/Services/digitalMarketingServices/FAQs";
import Intro from "@/components/Services/digitalMarketingServices/intro";
import Process from "@/components/Services/digitalMarketingServices/process";
import AboutOurDigitalMarketingServices from "@/components/Services/digitalMarketingServices/aboutOurDigitalMarketingServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services"
}

function DigitalMarketingServices() {
  return (
    <>
      <Intro />
      <AboutOurDigitalMarketingServices />
      <Process />
      <FAQs />
    </>
  )
}

export default DigitalMarketingServices;