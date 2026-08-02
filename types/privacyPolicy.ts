export interface PolicyDefinition {
  term: string;
  definition: string;
}

export interface PolicySection {
  id: string;
  title: string;
  subTitle?: string;
  content: string[];
  definitions?: PolicyDefinition[];
  bullets?: string[];
}

export interface PrivacyPolicyData {
  categoryTag: string;
  title: string;
  lastUpdated: string;
  bgImageUrl: string;
  sections: PolicySection[];
}