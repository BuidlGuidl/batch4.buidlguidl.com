import { IProfileData } from "./IProfileData";
import { IProfileTheme } from "./IProfileTheme";

export const ProfileDisplay = ({
  profileData,
  profileTheme,
}: {
  profileData: IProfileData;
  profileTheme: IProfileTheme;
}) => {
  return (
    <div
      style={{ minHeight: "65vh" }}
      className={"flex center items-center justify-center " + profileTheme.sectionBackgroundColor}
    >
      <div
        className={
          "w-full max-w-4xl mx-auto p-24 shadow-xl rounded-xl flex flex-col md:flex-row my-8 " +
          profileTheme.profileSectionBackgroundColor
        }
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-50"> {profileData.builderName} </h1>
            <p className="text-lg text-gray-50 mt-2">{profileData.builderLocation}</p>
            <h3 className="text-2xl font-bold text-gray-50 mt-2"> {profileData.builderTitle} </h3>
            <p className="text-gray-50 mt-2 text-xl">{profileData.builderAbout}</p>
          </div>
          <div className="flex justify-end m-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profileData.builderProfileImage}
              alt={profileData.builderName}
              className="rounded-full shadow-lg mx-auto"
            />
          </div>

          <div className="mt-2">
            <h3 className={profileTheme.socialSection.socialTitle.titleClass}>
              {profileTheme.socialSection.socialTitle.caption}
            </h3>
          </div>

          <div className="col-span-2 flex space-x-4 mx-auto">
            <div className="flex flex-wrap justify-center mt-4">
              {profileData.builderSocials.map((social: any, index: any) => (
                <div key={"social-wrapper-" + index} className="w-24">
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-2 px-2 justify-center text-center items-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={social.image}
                      alt={social.name}
                      className={"rounded-sm shadow-lg mx-auto " + profileTheme.socialSection.socialIcons.textColor}
                      width={profileTheme.socialSection.socialIcons.width}
                      height={profileTheme.socialSection.socialIcons.height}
                    />
                    <p className="text-[#7ea1cb]">{social.name}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
