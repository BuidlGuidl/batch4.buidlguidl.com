import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const PersonalPage: NextPage = () => {
  return (
    <div className="flex mt-[10vh] min-h-screen mx-auto gap-6 flex-col sm:flex-row ">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://media.licdn.com/dms/image/C4D03AQETQ5PcQZXyOw/profile-displayphoto-shrink_800_800/0/1594379517061?e=1715817600&v=beta&t=-dY2L00a5rge_4CEG03bjR9Pc5JGmOARfOE6nA9eLNk"
        alt="Per Stark"
        className="w-64 h-80 object-cover rounded-md mx-auto mt-1 sm:mx-0"
      />
      <div className="flex flex-col gap-0 max-w-sm">
        <h1 className="text-3xl">Per Stark</h1>
        <Address size="base" address="0xADAa82d99Ca31379EC8417515A75A7ce3A4b4044" />
        <p className="text-sm italic">Software developer / Psychologist</p>
        <hr className="border-accent" />
        <p className="text-sm mt-2">
          I am a full stack developer with a previous career as a clinical psychologist. Been in crypto space on and off
          since 2017. Happy to have connected with BuidlGuidl. <br /> <br /> I also work as a part time politician in my
          home commune. Current passion project beside learning ethereum development is developing a AI support for
          politicians using RAG and LLMs.
        </p>
        <div className="flex text-sm">
          <a href="https://github.com/perstarkse" className="mr-4 link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/per-stark/"
            className="mr-4 link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
