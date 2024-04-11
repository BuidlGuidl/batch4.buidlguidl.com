import Image from "next/image";
import { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const GustavosPage: NextPage = () => {
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

        <div className="mt-2 mb-4">
          <ul>
            <li>💻 Tech passionate & entrepreneur since childhood</li>
            <li>🚀 Founder @ Prisma Tech</li>
            <li>📚 Computer Engineering @ University of Sao Paulo</li>
          </ul>
        </div>

        <Address address="0xeA2f0BB0144fbff64E6f6F492B999674f9393882" />

        <div className="flex flex-row justify-center items-center space-x-4 mt-4">
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
