import type { NextPage } from "next";

interface SocialLink {
  name: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/reeshi" },
  { name: "Twitter", url: "https://twitter.com/_reeshi_" },
];

const PersonalPage: NextPage = () => {
  return (
    <div className="text-center pt-20 flex flex-col justify-center items-center">
      <header>
        <h1 className="text-4xl font-bold">Rishikesh Yadav</h1>
        <p className="text-lg">Passionate about technology</p>
      </header>
      <section className="mb-1">
        <div className="rounded-full w-40 h-40 mx-auto mb-5 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://media.licdn.com/dms/image/C4D03AQHSl0xB-_yfHQ/profile-displayphoto-shrink_200_200/0/1656576474072?e=1718236800&v=beta&t=UYYSGThNZxXdIPn1TFNnlg-wwNGvFjinKWYInZsHitU"
            alt="Rishkesh Yadav - Avatar"
            width={200}
            height={200}
          />
        </div>
      </section>
      <section className="mb-1">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-lg text-center">
          As a backend web2 developer with around 2 years of experience, for the past 1.5 years, I have been working in
          a web3 startup as a backend developer.<br></br>
          During this time, my interest in blockchain and smart contract development has grown. Now, I am eager to
          transition into becoming a full stack blockchain developer.
        </p>
      </section>
      <section className="mb-1">
        <h2 className="text-2xl font-bold">Connect with me</h2>
        <ul className="list-none p-0">
          {socialLinks.map(link => (
            <li key={link.name} className="inline-block mr-4">
              <a href={link.url} target="_blank" className="underline text-blue-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PersonalPage;
