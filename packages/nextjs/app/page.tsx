"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { Batch4RepoStatsChart } from "~~/components/Batch4RepoStats";
import { CheckedInChart } from "~~/components/CheckedInChart";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { data: checkedInCount, isFetched: checkedInCountFetched } = useScaffoldContractRead({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Batch 4</span>
          </h1>
          <p className="text-lg flex gap-2 justify-center">
            <span className="font-bold">Checked in builders count:</span>
            {checkedInCountFetched ? (
              <span>{(checkedInCount || 0n).toString()}</span>
            ) : (
              <span className="loading loading-spinner loading-xs"></span>
            )}
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto mt-8 flex flex-row justify-between items-center gap-8">
          <div style={{ flex: 1 }}>
            <CheckedInChart />
          </div>
          <div style={{ flex: 1 }}>
            <Batch4RepoStatsChart />
          </div>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <CodeBracketIcon className="h-8 w-8 fill-secondary" />
              <p>
                Check out the Batch 4 builders in the{" "}
                <Link href="/builders" passHref className="link">
                  Builders
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
