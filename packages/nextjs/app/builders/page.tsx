"use client";

import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Batch4AddressDisplay from "~~/app/builders/_components/Batch4AddressDisplay";
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

  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${isDarkMode ? "bg-gray-750" : "bg-gray-200"}`}
    >
      <div className={`max-w-7xl mx-auto p-8 ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-2xl rounded-2xl my-10`}>
        <h1 className={`text-4xl font-extrabold text-center ${isDarkMode ? "text-white" : "text-gray-900"} mb-10`}>
          Our Builders
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center items-center ">
              <span className={`loading loading-spinner ${isDarkMode ? "text-white" : "text-info"}`}></span>
            </div>
          ) : (
            uniqueBuilders.map((builder, index) => (
              <div
                key={index}
                className={`bg-white border-2 border-gray-200 shadow-sm rounded-lg overflow-hidden ${
                  isDarkMode ? "dark:bg-gray-900" : ""
                }`}
              >
                <Batch4AddressDisplay address={builder} index={index} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildersPage;
