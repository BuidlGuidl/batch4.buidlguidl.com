"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { NextPage } from "next";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const GustavosPage: NextPage = () => {
  const [addressCopied, setAddressCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setAddressCopied(!addressCopied);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAddressCopied(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="flex flex-col items-center rounded-xl bg-base-100 shadow-lg sm:w-1/2 w-10/12 p-10 my-2 relative">
        <Image
          src={"https://avatars.githubusercontent.com/u/62973287?v=4"}
          alt="Gustavo's Avatar"
          width={300}
          height={300}
          className="rounded-full my-2"
        />

        <h1 className="text-3xl my-2 font-semibold">Gustavo Barbosa Sanchez</h1>

        <div className="my-2">
          <ul>
            <li>💻 Tech passionate & entrepreneur since childhood</li>
            <li>🚀 Founder @ Prisma Tech</li>
            <li>📚 Computer Engineering @ University of Sao Paulo</li>
          </ul>
        </div>

        <div
          ref={dropdownRef}
          className="btn btn-secondary btn-sm pl-0 pr-2 shadow-md dropdown-toggle gap-0 !h-auto my-4 relative"
          onClick={() => toggleDropdown()}
        >
          <Image
            className="rounded-full"
            src={
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDgiIHNoYXBlLXJlbmRlcmluZz0ib3B0aW1pemVTcGVlZCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJoc2woMTc0IDkyJSA1OSUpIiBkPSJNMCwwSDhWOEgweiIvPjxwYXRoIGZpbGw9ImhzbCgxMjkgNDMlIDU3JSkiIGQ9Ik0yLDBoMXYxaC0xek01LDBoMXYxaC0xek0wLDFoMXYxaC0xek03LDFoMXYxaC0xek0yLDFoMXYxaC0xek01LDFoMXYxaC0xek0wLDJoMXYxaC0xek03LDJoMXYxaC0xek0zLDJoMXYxaC0xek00LDJoMXYxaC0xek0xLDNoMXYxaC0xek02LDNoMXYxaC0xek0yLDNoMXYxaC0xek01LDNoMXYxaC0xek0zLDNoMXYxaC0xek00LDNoMXYxaC0xek0wLDRoMXYxaC0xek03LDRoMXYxaC0xek0wLDVoMXYxaC0xek03LDVoMXYxaC0xek0yLDVoMXYxaC0xek01LDVoMXYxaC0xek0wLDZoMXYxaC0xek03LDZoMXYxaC0xek0xLDZoMXYxaC0xek02LDZoMXYxaC0xek0yLDZoMXYxaC0xek01LDZoMXYxaC0xek0wLDdoMXYxaC0xek03LDdoMXYxaC0xek0xLDdoMXYxaC0xek02LDdoMXYxaC0xek0zLDdoMXYxaC0xek00LDdoMXYxaC0xeiIvPjxwYXRoIGZpbGw9ImhzbCgzMzIgNjMlIDMxJSkiIGQ9Ik0xLDBoMXYxaC0xek02LDBoMXYxaC0xek0zLDFoMXYxaC0xek00LDFoMXYxaC0xek0xLDJoMXYxaC0xek02LDJoMXYxaC0xek0xLDRoMXYxaC0xek02LDRoMXYxaC0xek0yLDRoMXYxaC0xek01LDRoMXYxaC0xek0zLDRoMXYxaC0xek00LDRoMXYxaC0xek0zLDZoMXYxaC0xek00LDZoMXYxaC0xeiIvPjwvc3ZnPg=="
            }
            width={30}
            height={30}
            alt="0xeA2f0BB0144fbff64E6f6F492B999674f9393882 avatar"
          />
          <span className="ml-2 mr-1">0xeA2f...3882</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-4 ml-2 sm:ml-0"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
          {addressCopied && (
            <CopyToClipboard text="0xeA2f0BB0144fbff64E6f6F492B999674f9393882" onCopy={() => setAddressCopied(false)}>
              <div className="dropdown-content absolute top-9 left-0 px-4 bg-white border border-gray-200 rounded-md shadow-lg z-10 cursor-pointer">
                <div className="flex items-center py-2 space-x-2">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                  <span>Copy address</span>
                </div>
              </div>
            </CopyToClipboard>
          )}
        </div>
        <div className="flex flex-row justify-center items-center space-x-4 mt-2">
          <a
            className="text-blue-600 underline"
            href="https://www.linkedin.com/in/gustavo-barbosa-sanchez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-blue-600 underline"
            href="https://github.com/gugasanchez"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="text-blue-600 underline"
            href="https://t.me/guga_sanchez"
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

export default GustavosPage;

// now, in this code, i want to include a div flex row in which the logos of github and linkedin and telegram appear with w-30 and h-30 each that, when clicked, send to my github profile and my linkedin and my telegram profiles.
