import FAQs from "@/components/Services/softwareDevelopment/FAQs";
import Intro from "@/components/Services/softwareDevelopment/intro";
import Process from "@/components/Services/softwareDevelopment/process";
import TechnologyIntro from "@/components/Services/softwareDevelopment/technologyIntro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development"
}

function SoftwareDevelopment() {
  return (
    <>
      <Intro />
      <TechnologyIntro />
      <Process />
      <FAQs />
    </>
  )
}

export default SoftwareDevelopment;