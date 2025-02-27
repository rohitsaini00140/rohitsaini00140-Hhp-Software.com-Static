import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: `https://hhpsoftware.com/sitemap.xml/`
    },
    {
      url: `https://hhpsoftware.com/about`
    },
    {
      url: `https://hhpsoftware.com/services/webDevelopment`
    },
    {
      url: `https://hhpsoftware.com/services/mobileAppDevelopment`
    },
    {
      url: `https://hhpsoftware.com/services/softwareDevelopment`
    },
    {
      url: `https://hhpsoftware.com/services/blockchainDevelopment`
    },
    {
      url: `https://hhpsoftware.com/services/digitalMarketingServices`
    },
    {
      url: `https://hhpsoftware.com/additionalServices/ITHardware`
    },
    {
      url: `https://hhpsoftware.com/additionalServices/ITManpower`
    },
    {
      url: `https://hhpsoftware.com/demo`
    },
    {
      url: `https://hhpsoftware.com/contact`
    },

    {
      url: `https://hhpsoftware.com/blog`
    }
  ]

}