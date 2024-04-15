/* eslint-disable @next/next/no-img-element */
import { IProfileData } from "./IProfileData";
import { IProfileTheme } from "./IProfileTheme";
import { ProfileDisplay } from "./ProfileDisplay";
import type { NextPage } from "next";

const ProfileTheme: IProfileTheme = {
  sectionBackgroundColor: "bg-gradient-to-r from-[#b9c1ff] via-[#e8f6d3] to-[#ffd2b3]",
  profileSectionBackgroundColor: "bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900",
  socialSection: {
    socialIcons: {
      width: 50,
      height: 50,
      textColor: "text-[#7ea1cb]",
    },
    socialTitle: {
      caption: "Let's Connect:",
      titleClass: "my-2 underline text-xl text-gray-50",
    },
  },
};

const ProfileData: IProfileData = {
  builderName: "Julio M Cruz",
  builderProfileImage: "https://avatars.githubusercontent.com/u/62020?v=4",
  builderTitle: "Sr. Software Engineer | Master of Science | Onchain Builder",
  builderLocation: "📍 Virginia, United States",
  builderAbout:
    "Proactive and Creative professional with exceptional decision-making skills and a strong capacity for analysis and generating solutions.",
  builderSocials: [
    {
      name: "Build Guidl",
      link: "https://app.buidlguidl.com/builders/0xc2564e41B7F5Cb66d2d99466450CfebcE9e8228f",
      image: "https://images.mirror-media.xyz/publication-images/pFmIHy1BRPaaodnq8XvVs.jpeg?height=330&width=330",
    },
    {
      name: "Warpcast",
      link: "https://warpcast.com/juliomcruz",
      image: "https://framerusercontent.com/images/NPQ2QznhcPJe74h7DidacKsUIk.webp",
    },
    {
      name: "X",
      link: "https://twitter.com/JulioMCruz",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Twitter-new-logo.jpg",
    },
    {
      name: "Telegram",
      link: "https://t.me/juliomcruz",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    },
    {
      name: "GitHub",
      link: "https://www.linkedin.com/in/JulioMCruz/",
      image: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/JulioMCruz/",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    },
  ],
};

const Profile: NextPage = () => {
  return <ProfileDisplay profileData={ProfileData} profileTheme={ProfileTheme} />;
};

export default Profile;
