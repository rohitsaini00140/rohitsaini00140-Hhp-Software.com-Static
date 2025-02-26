import FAQs from "@/components/additionalService/ITHardware/FAQs";
import Intro from "@/components/additionalService/ITHardware/intro";
import Process from "@/components/additionalService/ITHardware/process";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Hardware"
}

function ITHardware() {
  return (
    <>
      <Intro />
      <Process />
      <FAQs />
    </>
  )
}

export default ITHardware;