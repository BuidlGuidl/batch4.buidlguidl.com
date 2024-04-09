import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const BillPage: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow justify-center">
      <div className="flex gap-10 bg-accent-content/30 rounded-lg">
        <div className="">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://avatars.githubusercontent.com/u/34168009?v=4" className="rounded-lg h-80" alt="Avatar" />
        </div>
        <div className="my-auto flex flex-col gap-1 mr-3">
          <h1 className="text-3xl">
            <b>Bill Schumacher</b>{" "}
          </h1>
          <Address address={"0x822e7a7209d6C3Da71979AD443D1D3e81E78e2FD"} />
          <br />
          <h3>A nerd from Texas.</h3>
          <ul className="mr-1 ml-1">
            <li>- I have a lot of projects, little time.</li>
            <li>- Learning Solidity & Scaffold ETH.</li>
            <li>- I love Sheep Dogs.</li>
          </ul>
          <br />
          <div>
            <b>Current Project:</b>:&nbsp;
            <a href="https://github.com/BillSchumacher/MintyBurny" target="_blank" className="underline">
              MintyBurny
            </a>
          </div>
          <div className="flex gap-2">
            <div>
              <b>Links:</b>
            </div>
            <div className="flex gap-2">
              <a href="https://github.com/BillSchumacher/" target="_blank" className="underline">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/williamschumacher/" target="_blank" className="underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillPage;
