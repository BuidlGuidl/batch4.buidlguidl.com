import type { NextPage } from "next";
import { GlobeAltIcon, MapPinIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 justify-center">
        <div className="flex gap-10">
          <div className="">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://avatars.githubusercontent.com/u/39233126?v=4" className="rounded-lg h-80" alt="Batch 4" />
          </div>
          <div className="my-auto flex flex-col gap-1">
            <div className="text-3xl">Yash Goyal</div>
            <div className="flex gap-2">
              <UserCircleIcon className="h-5" />
              <div>Blockchain & Backend Developer | 16x Hackathon Winner</div>
            </div>
            <div className="flex gap-2">
              <MapPinIcon className="h-5" />
              <div className="">Digital Nomad</div>
            </div>
            <a href="https://yashgoyal.dev" target="_blank" className="flex gap-2 mb-2">
              <GlobeAltIcon className="h-5" />
              <div className="">yashgoyal.dev</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
