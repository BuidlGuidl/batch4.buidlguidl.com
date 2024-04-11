import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaGithub, FaHome, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { SiEthereum, SiJavascript, SiPython, SiReact, SiSolidity } from "react-icons/si";

const socialLinks = [
  { href: "https://t.me/mmuntean", icon: <FaTelegramPlane />, color: "text-blue-400", label: "Telegram" },
  { href: "https://github.com/siredwind", icon: <FaGithub />, color: "text-gray-700", label: "GitHub" },
  {
    href: "https://app.buidlguidl.com/builders/0xFFf6a812685f045acE23A65312ca9B1F506cC67d",
    icon: <SiEthereum />,
    color: "text-indigo-300",
    label: "BuidlGuidl",
  },
  {
    href: "https://www.linkedin.com/in/mihai-munteanu-4661b8102/",
    icon: <FaLinkedin />,
    color: "text-blue-700",
    label: "LinkedIn",
  },
];

const MihaiMunteanu: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-600 to-slate-600 shadow-xl rounded-xl flex gap-12 transform -translate-y-1/2">
        <div className="flex-shrink-0">
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
            <span className="text-sm md:text-base flex items-center gap-2">
              <FaHome /> Bucharest, 🇷🇴 Romania
            </span>
          </div>
          <div className="border-b border-white/40 py-2 flex items-center gap-2">
            Work:
            <div className="flex items-center gap-4 ml-14">
              <div className="text-2xl text-[#61DAFB]">
                <SiReact />
              </div>
              <div className="text-2xl text-[#3776AB]">
                <SiPython />
              </div>
              <div className="text-2xl text-[#363636]">
                <SiSolidity />
              </div>
              <div className="text-2xl text-[#F7DF1E]">
                <SiJavascript />
              </div>
            </div>
          </div>
          <div className="border-b border-white/40 py-2 flex flex-wrap justify-center md:justify-start gap-4">
            Social Links:
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, icon, color, label }) => (
                <Link
                  href={href}
                  key={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-2xl hover:${color} duration-200`}
                >
                  <span>{icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MihaiMunteanu;
