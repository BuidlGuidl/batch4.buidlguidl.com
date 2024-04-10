import type { NextPage } from "next";

interface ProfileLink {
  name: string;
  url: string;
}

const profileLinks: ProfileLink[] = [
  { name: "GitHub", url: "https://github.com/Welith" },
  { name: "Twitter", url: "https://twitter.com/bo4ka7a" },
];

const Home: NextPage = () => {
  return (
    <div className="text-center pt-20">
      <header>
        <h1 className="text-4xl font-bold">Boris Kolev</h1>
        <p className="text-lg">Passionate about technology</p>
      </header>
      <section className="mb-8">
        <div className="rounded-full w-40 h-40 mx-auto mb-8 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://avatars.githubusercontent.com/u/33628158?s=400&u=aa5a292688f39acc845bf95765266f1ce040fd35&v=4"
            alt="Boris Kolev - Avatar"
            width={200}
            height={200}
          />
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-lg">
          Backend web2 developer with around 5 years of experience. Web3 rookie, aiming to go into Smart Contract
          Security.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Connect with me</h2>
        <ul className="list-none p-0">
          {profileLinks.map(link => (
            <li key={link.name} className="inline-block mr-4">
              <a href={link.url} className="underline text-blue-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
