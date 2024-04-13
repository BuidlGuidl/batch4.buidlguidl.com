import Image from "next/image";
import type { NextPage } from "next";
import { CalculatorIcon, ClockIcon, CogIcon, TrophyIcon } from "@heroicons/react/24/solid";

const ProfilePage: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black p-6 text-gray-100">
      <div className="rounded-lg shadow-xl h-80 md:mr-10 relative w-80">
        <Image
          src="https://avatars.githubusercontent.com/mrhouzlane"
          alt="Mehdi's Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
        <h1 className="text-4xl font-bold text-purple-400 font-comic">Mehdi Rhouzlane</h1>
        <p className="text-purple-300 mt-1">Navigating EVM rabbit hole 🔍 with auditing interest 🧠</p>
        <div className="flex items-center text-sm text-gray-200 mt-1">
          <TrophyIcon className="h-6 text-yellow-300 animate-pulse mr-2" />
          <span>Multiple hackathon winner</span>
        </div>
        <p className="text-sm text-gray-200 mt-1">Paris/Singapore based</p>
        <div className="flex items-center gap-2 mt-1">
          <ClockIcon className="h-6 text-red-400 animate-spin-slow" />
          <span>Current Time Zone: GMT+2</span>
        </div>
        <div className="flex gap-2 mt-2">
          <CogIcon className="h-6 text-green-400 animate-bounce" />
          <span>Building web3 projects</span>
        </div>
        <div className="flex gap-2 mt-1">
          <CalculatorIcon className="h-6 text-blue-300 animate-spin-slow" />
          <span>Rareskills Alumni - Advanced Solidity Bootcamp</span>
        </div>
        <hr className="w-full border-t-2 border-purple-500 my-3" />
        <blockquote className="italic font-serif text-center text-gray-300">
          &quot;We used to look up at the sky and wonder at our place in the stars, now we just look down and worry
          about our place in the dirt.&quot;
        </blockquote>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
          <a
            href="https://github.com/mrhouzlane"
            className="link text-purple-300 hover:text-purple-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://t.me/mehdirhouz"
            className="link text-purple-300 hover:text-purple-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
