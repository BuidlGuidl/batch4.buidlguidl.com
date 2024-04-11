import { NextPage } from "next";
import { GithubIcon } from "~~/components/assets/GithubIcon";

const VhforbesProfilePage: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-10">
      <div className="flex flex-col items-center">
        <div className="avatar left-2">
          <div className="w-32 mr-4 mask mask-hexagon text-center">
            <img src="https://avatars.githubusercontent.com/u/39014716?v=4" />
          </div>
        </div>

        <a href="https://github.com/vhforbes" target="_blank">
          <GithubIcon className="w-12 h-12 pb-1 fill-white mt-4 hover:fill-accent" />
        </a>

        <div>
          <p>🌎 Rio de Janeiro - Brasil</p>
        </div>
      </div>
      <div
        className="
          border-accent-content border-2 rounded-xl p-4 max-w-4xl mt-4 md:mt-0 m-4
          bg-gradient-to-br from-neutral-content to-blue-accent-content
        "
      >
        <div className="text-2xl font-bold text-base-content">
          Hello there! <br /> My name is Victor Forbes.
        </div>
        <div className="text text-wrap">
          <p>Some call me Victor, some call me Forbes, you can choose!</p>
          <p>
            One day, during the pandemic, I had a decision to make: keep living like I was, working on something I
            didn`t felt excited about, or to <strong>make a big leap of faith.</strong> And I`ve decided to become a
            programmer.
            <br />
            <br />
            Since then I`ve been working on my craft daily.
            <br />
            <br />
            I got my first job as a front-end in 2021, then became a full stack, and in the middle of the way, I found
            crypto.
            <br />
            <br />
            Started out as a ETH miner (didn`t go so well lol), than an investor, and now I`m making a second leap of
            faith in my life. Going all in, becoming a web3 developer.
            <br />
            <br />
            My goal is to code user first applications, I believe that we are building a new way of working together as
            a society, and not only I want to be part of that, but I will scream to the seven seas. This is our future!
          </p>
          <hr className="p-2" />
          <h2 className="text-xl italic">Beyond programming:</h2>
          <p>
            I love gaming, running (on my way to my first 21k), sci-fi (Star Wars was my first love, Dune is my affair),
            electronic music (techno, trance, d&b..), hardware (built a few pcs) and of course, traveling!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VhforbesProfilePage;
