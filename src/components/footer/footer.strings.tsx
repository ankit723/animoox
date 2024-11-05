import { DribbleIcon } from "@/assets/icons/dribble-icon";
import type { FooterListType } from "./footer.types";
import {
  BehanceIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/assets/icons";

export const companyList: FooterListType[] = [
  {
    value: "Icon",
    link: "/icon",
  },
  {
    value: "Service",
    link: "/service",
  },
  {
    value: "Product",
    link: "/product",
  },
  {
    value: "Blog",
    link: "/blog",
  },
  {
    value: "Contact",
    link: "/contact",
  },
];

export const legalList: FooterListType[] = [
  {
    value: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    value: "Refund Policy",
    link: "/refund-policy",
  },
  {
    value: "Terms & Condition",
    link: "/terms-and-condition",
  },
  {
    value: "FAQ",
    link: "/faq",
  },
];

export const socialMediaList: FooterListType[] = [
  {
    value: <DribbleIcon />,
    link: "/dribble",
  },
  {
    value: <BehanceIcon />,
    link: "/behance",
  },
  {
    value: <LinkedInIcon />,
    link: "/linkedin",
  },
  {
    value: <InstagramIcon />,
    link: "/instagram",
  },
  {
    value: <TwitterIcon />,
    link: "/twitter",
  },
];
