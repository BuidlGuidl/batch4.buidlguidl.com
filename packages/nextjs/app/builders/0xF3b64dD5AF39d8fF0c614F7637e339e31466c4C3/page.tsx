import type { NextPage } from "next";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-xl flex gap-12 transform -translate-y-1/2">
          <div className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://avatars.githubusercontent.com/u/70733914?v=4"
              className="rounded-full shadow-lg h-48 w-48"
              alt="Ryan Viana"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-gray-800">Ryan Viana</h1>
            <p className="text-gray-500 mt-3">Blockchain & Backend Developer</p>
            <div className="mt-5 space-y-3">
              <a
                href="https://www.linkedin.com/in/ryanviana/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <GlobeAltIcon className="h-7 w-7 group-hover:animate-spin" />
                LinkedIn Profile
              </a>
              <a
                href="https://app.buidlguidl.com/builders/0xF3b64dD5AF39d8fF0c614F7637e339e31466c4C3"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <GlobeAltIcon className="h-7 w-7 group-hover:animate-spin" />
                BuidlGuidl Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
