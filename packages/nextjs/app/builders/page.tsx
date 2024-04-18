"use client";

import type { NextPage } from "next";
import Batch4AddressDisplay from "~~/app/builders/_components/Batch4AddressDisplay";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const BuildersPage: NextPage = () => {
  const { data: checkedInEvents, isLoading } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 118484927n,
  });

  const builderAddresses =
    checkedInEvents
      ?.map(event => event.args.builder as string | undefined)
      .filter((builder): builder is string => !!builder) || [];
  const uniqueBuilders = Array.from(new Set(builderAddresses));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="max-w-7xl mx-auto p-8 bg-base-100 shadow-2xl rounded-2xl my-10">
        <h1 className="text-4xl font-extrabold text-center text-neutral mb-10">Our Builders</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center items-center">
              <span className="loading loading-spinner text-info"></span>
            </div>
          ) : (
            uniqueBuilders.map((builder, index) => (
              <div key={index} className="shadow-sm bg-base-100 overflow-hidden">
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
