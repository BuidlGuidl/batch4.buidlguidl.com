import { NextPage } from "next";

const EnviloggerProfile: NextPage = () => {
  return (
    <figure className="md:flex bg-blue-100 rounded-xl p-8 my-8 max-w-4xl md:mx-auto mx-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-48 h-48 md:rounded-full md:mx-8 mx-auto"
        src="https://avatars.githubusercontent.com/u/1270793"
        alt="Anton Kudriavtsev"
      />
      <div className="pt-6 text-center md:text-left">
        <h2 className="text-2xl leading-6 font-bold my-0 md:text-left">Anton Kudriavtsev</h2>
        <span className="text-xs">📍 Budva, Montenegro</span>
        <p className="text-gray-600">
          Working as team lead @{" "}
          <a className="link" href="https://naga.com/" target="_blank" rel="noopener noreferrer">
            NAGA
          </a>{" "}
          with overall experience in software development almost 20 years. In early 2024 started learning smart contract
          development and found{" "}
          <a className="link" href="https://buidlguidl.com/">
            BuidlGuidl
          </a>{" "}
          and{" "}
          <a className="link" href="https://speedrunethereum.com/">
            speedrunethereum.org
          </a>
          . Looking forward to cooperate and make some great stuff.
        </p>
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <a href="https://github.com/envilogger" className="link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com/nvlgr" className="link" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://t.me/envilogger" className="link" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href="https://www.linkedin.com/in/envilogger" className="link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </figure>
  );
};

export default EnviloggerProfile;
