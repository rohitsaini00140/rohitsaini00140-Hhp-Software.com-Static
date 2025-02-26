import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: `http://localhost:3000/`
    },
    {
      url: `http://localhost:3000/about`
    },
    {
      url: `http://localhost:3000/services/webDevelopment`
    },
    {
      url: `http://localhost:3000/services/mobileAppDevelopment`
    },
    {
      url: `http://localhost:3000/services/softwareDevelopment`
    },
    {
      url: `http://localhost:3000/services/blockchainDevelopment`
    },
    {
      url: `http://localhost:3000/services/digitalMarketingServices`
    },
    {
      url: `http://localhost:3000/additionalServices/ITHardware`
    },
    {
      url: `http://localhost:3000/additionalServices/ITManpower`
    },
    {
      url: `http://localhost:3000/demo`
    },
    {
      url: `http://localhost:3000/contact`
    }
  ]

}