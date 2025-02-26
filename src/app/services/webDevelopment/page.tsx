import FAQs from "@/components/Services/webDevelopment/FAQs";
import IndustriesServedIntro from "@/components/Services/webDevelopment/industriesServed";
import Intro from "@/components/Services/webDevelopment/intro";
import Process from "@/components/Services/webDevelopment/process";
import Technologies from "@/components/Services/webDevelopment/technologies";
import TechnologyIntro from "@/components/Services/webDevelopment/technologyIntro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development"
}

function WebDevelopment() {
  return (
    <>
      <Intro />
      <TechnologyIntro />
      <Technologies />
      <Process />
      <IndustriesServedIntro />
      <FAQs />
    </>
  )
}

export default WebDevelopment;