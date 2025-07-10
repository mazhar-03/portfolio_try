import { Document } from "@contentful/rich-text-types";

export type SocialMedia = {
  title: string;
  link: string;
};

export type NavItem = {
  text: string;
  url: string;
};

export type Common = {
  socialMediaCollection: {
    items: SocialMedia[];
  },
  nameSurname: string;
  navItemsCollection: {
    items: NavItem[]
  },
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
  experiencesCollection: {
    items: ExperienceItem[];
  };
};

export type ContactContent = {
  title: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string;
  github: string;
  imagesCollection: {
    items: ProjectImage[];
  };
};

export type ProjectsPage = {
  title: string;
  projects: Project[];
};

export type ProjectImage = {
  url: string;
  width: number;
  height: number;
}
