import { Document } from "@contentful/rich-text-types";

export type SocialMedia = {
  title: string;
  link: string;
};

export type Common = {
  socialMedia: SocialMedia[];
  nameSurname: string;
  navItemsCollection: {
    items: NavItem[]
  };
  footerCopyRight: string;
};

export type AboutMe = {
  title: string;
  description: {
    json: Document;
  };
};

export type ExperienceItem = {
  roleTitle: string;
  companyName: string;
  companyUrl: string;
  locationAndDate: string;
  description: {
    json: Document;
  };
};

export type Experience = {
  title: string;
  experiences: ExperienceItem[];
};

export type NavItem = {
  text: string;
  url: string;
};