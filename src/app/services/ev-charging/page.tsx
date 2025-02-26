import FAQs from '@/components/additionalService/ITHardware/FAQs'
import Process from '@/components/additionalService/ITHardware/process'
import AboutOurDigitalMarketingServices from '@/components/Services/digitalMarketingServices/aboutOurDigitalMarketingServices'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: "EvCharging Services"
  }

function EvCharging() {
  return (
  <>  
  <AboutOurDigitalMarketingServices />
  <Process />
  <FAQs/>
  
  </>
  )
}

export default EvCharging