export interface OfficeContactInfo {
  officeTitle: string;
  address: string;
  phone: string;
  email: string;
  website: string;
}

export interface BusinessHours {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface ContactSectionData {
  officeInfo: OfficeContactInfo;
  businessHours: BusinessHours;
  socialLinks: SocialLink[];
  subjectOptions: string[];
}