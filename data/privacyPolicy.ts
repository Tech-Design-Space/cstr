import { PrivacyPolicyData } from "@/types/privacyPolicy";

export const defaultPrivacyPolicyData: PrivacyPolicyData = {
  categoryTag: "In Policies, Other Policies",
  title: "Privacy Policy",
  lastUpdated: "August 2026",
  bgImageUrl:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
  sections: [
    {
      id: "intro",
      title: "OVERVIEW & INTRODUCTION",
      content: [
        "This Privacy Policy describes Jiba Construction Company Limited's policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.",
        "We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.",
      ],
    },
    {
      id: "definitions",
      title: "INTERPRETATION AND DEFINITIONS",
      subTitle: "Interpretation",
      content: [
        "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
      ],
      definitions: [
        {
          term: "Affiliate",
          definition:
            "means an entity that controls, is controlled by or is under common control with a party, where 'control' means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.",
        },
        {
          term: "Company",
          definition:
            "(referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement) refers to Jiba Construction Company Limited, Lagos, Nigeria.",
        },
        {
          term: "Cookies",
          definition:
            "are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.",
        },
        {
          term: "Country",
          definition: "refers to: Nigeria.",
        },
        {
          term: "Device",
          definition:
            "means any device that can access the Service such as a computer, a cellphone, or a digital tablet.",
        },
        {
          term: "Personal Data",
          definition:
            "is any information that relates to an identified or identifiable individual.",
        },
        {
          term: "Service",
          definition: "refers to the Website.",
        },
        {
          term: "Service Provider",
          definition:
            "means any natural or legal person who processes the data on behalf of the Company.",
        },
      ],
    },
    {
      id: "data-collection",
      title: "COLLECTING AND USING YOUR PERSONAL DATA",
      subTitle: "Types of Data Collected",
      content: [
        "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:",
      ],
      bullets: [
        "Email address",
        "First name and last name",
        "Phone number",
        "Address, State, Province, ZIP/Postal code, City",
        "Usage Data and browsing telemetry",
      ],
    },
  ],
};