import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";

const socialLinks = [
  { href: "https://t.me/mmuntean", color: "text-blue-400", label: "Telegram" },
  { href: "https://github.com/siredwind", color: "text-gray-700", label: "GitHub" },
  {
    href: "https://app.buidlguidl.com/builders/0xFFf6a812685f045acE23A65312ca9B1F506cC67d",
    color: "text-indigo-300",
    label: "BuidlGuidl",
  },
  {
    href: "https://www.linkedin.com/in/mihai-munteanu-4661b8102/",
    color: "text-blue-700",
    label: "LinkedIn",
  },
];

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-60 sm:pt-20">
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8 mx-auto bg-gradient-to-r from-blue-600 to-slate-600 shadow-xl md:rounded-xl flex flex-col md:flex-row gap-6 py-6 transform -translate-y-1/2">
        <div className="flex-shrink-0 flex items-center justify-center">
          <Image
            src="https://avatars.githubusercontent.com/siredwind"
            alt="Mihai Munteanu"
            className="rounded-full shadow-lg"
            width={192}
            height={192}
          />
        </div>
        <div className="flex flex-col justify-center text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Mihai Munteanu</h1>
          <div className="border-b border-white/40 py-2">
            <span className="text-sm md:text-base flex items-center gap-2"> Location: Bucharest, 🇷🇴 Romania</span>
          </div>
          <div className="border-b border-white/40 py-2 flex items-center">
            Work:
            <div className="flex items-center gap-2 ml-1">
              <div className="text-[#61DAFB]">React</div>
              <div className="text-[#3776AB]">Python</div>
              <div className="text-[#363636]">Solidity</div>
              <div className="text-[#F7DF1E]">Javascript</div>
            </div>
          </div>
          <div className="border-b border-white/40 py-2 flex items-center md:justify-start gap-4">
            Social Links:
            <div className="flex flex-col md:flex-row items-center gap-4">
              {socialLinks.map(({ href, color, label }) => (
                <Link
                  href={href}
                  key={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`hover:${color} duration-200`}
                >
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
