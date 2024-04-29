import Assets from "../../../public/Assets";

export const footerLink = {
  title:
    "We love crafting unforgettable digital experiences, brands and websites with people like you.",

  getintouch: {
    title: "Get in touch",
    address: "Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom",
    data: [
      {
        title: "+44 207 112 82 85",
        link: "tel:=+44 207 112 82 85",
      },
      {
        title: "contact@artistsweb.com",
        link: "contact@artistsweb.com",
      },
    ],
  },
  followus: {
    title: "follow us",
    data: [
      {
        img: Assets.facebook,
        link: "./",
        alt:"facebook"
      },
      {
        img: Assets.instagram,
        link: "./",
        alt:"instagram"
      },
      {
        img: Assets.twitter,
        link: "./",
        alt:"twitter"
      },
      {
        img: Assets.linkedin,
        link: "./",
        alt:"linkedin"
      },
    ],
  },
  getstarted: {
    title: "Ready to get started?",
    subttl: "Let's start with a conversation about how we can help you!",
    link_text: "Schedule a call",
    link_url: "./",
  },

  terms:{
    cpright:"© 2024 Artistweb Ltd · All rights reserved",
    policy_ttl:"Privacy Policy",
    policy_link:"./",
    terms_ttl:"Terms & Conditions",
    terms_link:"./"
  }
};
