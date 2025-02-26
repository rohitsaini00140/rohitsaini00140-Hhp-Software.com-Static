import FAQs from "@/components/Services/mobileAppDevelopment/FAQs";
import Intro from "@/components/Services/mobileAppDevelopment/intro";
import Process from "@/components/Services/mobileAppDevelopment/process";
import TechnologyIntro from "@/components/Services/mobileAppDevelopment/technologyIntro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development"
}

function MobileAppDevelopment() {
  return (
    <>
      <Intro />
      <TechnologyIntro />
      <Process />
      <FAQs />
    </>
  )
}

export default MobileAppDevelopment;