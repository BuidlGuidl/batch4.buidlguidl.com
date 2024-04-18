export interface IProfileData {
  builderName: string;
  builderProfileImage: string;
  builderTitle: string;
  builderLocation: string;
  builderAbout: string;
  builderSocials: Array<{
    name: string;
    link: string;
    image: string;
  }>;
}
