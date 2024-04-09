"use client";

import type { NextPage } from "next";

const PersonalPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-center md:h-[80vh] md:gap-4 ">
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <img
          src="https://avatars.githubusercontent.com/u/56181880?v=4"
          alt="Bhavya Gor"
          className="rounded-full pt-2 w-60 h-60 object-cover md:w-80 md:h-80"
        />
      </div>
      <div className="flex flex-col items-center w-full md:w-[300px] p-2">
        <h1 className="text-3xl font-bold">Bhavya Gor</h1>
        <h2> 👋 Hey! I am from Mumbai, India. 🇮🇳</h2>
        <p className="text-md mb-4">
          <br />
          - I am a curious person, with ❤️ for technology.
          <br />
          - I am a Full Stack Developer 💻, with a passion for building.
          <br />- I am eager to contribute in the web3 space.🚀
        </p>
        <p className="flex justify-center md:justify-start">
          <a href="https://www.github.com/bhavyagor12" target="_blank" rel="noreferrer" className="text-blue-500 mr-2">
            GitHub
          </a>
          <span className="mx-2">|</span>
          <a href="https://twitter.com/bhavya_gor" target="_blank" rel="noreferrer" className="text-blue-500">
            Twitter
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://www.linkedin.com/in/bhavya-gor/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 mr-2"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default PersonalPage;
