export interface IProfileTheme {
  sectionBackgroundColor: string;
  profileSectionBackgroundColor: string;
  socialSection: {
    socialIcons: {
      width: number;
      height: number;
      textColor: string;
    };
    socialTitle: {
      caption: string;
      titleClass: string;
    };
  };
}
