import FAQs from "@/components/additionalService/ITManpower/FAQs";
import Intro from "@/components/additionalService/ITManpower/intro";
import Process from "@/components/additionalService/ITManpower/process";
import TermsAndConditions from "@/components/additionalService/ITManpower/termsAndConditions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Manpower"
}

function ITManpower() {
  return (
    <>
      <Intro />
      <Process />
      <TermsAndConditions />
      <FAQs />
    </>
  )
}

export default ITManpower;