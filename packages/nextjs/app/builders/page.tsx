"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const BuildersPage: NextPage = () => {
  const { data: checkedInEvents, isLoading } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 118484927n,
    watch: true,
  });

  const builderAddresses =
    checkedInEvents
      ?.map(event => event.args.builder as string | undefined)
      .filter((builder): builder is string => !!builder) || [];
  const uniqueBuilders = Array.from(new Set(builderAddresses));

  const truncateAddress = (address: string) => `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto p-8 bg-white shadow-2xl rounded-2xl my-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Our Builders</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center items-center">
              <span className="loading loading-spinner text-info"></span>
            </div>
          ) : (
            uniqueBuilders.map((builder, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 shadow-sm rounded-lg overflow-hidden">
                <div className="p-5">
                  <div className="mx-auto h-32 w-32 rounded-full shadow-lg mb-4 relative">
                    <BlockieAvatar address={builder} size={128} />
                  </div>
                  <h3 className="text-lg text-black font-semibold text-center">Builder {index + 1}</h3>
                  <p className="text-gray-600 text-sm text-center mt-1">Address: {truncateAddress(builder)}</p>
                </div>
                <div className="bg-gray-50 p-4">
                  <Link href={`/builders/${builder}`} passHref>
                    <span className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                      <GlobeAltIcon className="h-6 w-6" />
                      View Profile
                    </span>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildersPage;
