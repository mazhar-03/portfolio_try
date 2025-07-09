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
