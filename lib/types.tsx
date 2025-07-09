import { Document } from "@contentful/rich-text-types";

export type SocialMedia = {
  title: string;
  link: string;
};

export type NavItem = {
  label: string;
  url: string;
};

export type Common = {
  socialMedia: SocialMedia[];
  nameSurname: string;
  navItems: NavItem[];
  footerCopyRight: string;
};

export type AboutMe = {
  title: string;
  description: {
    json: Document;
  };
};