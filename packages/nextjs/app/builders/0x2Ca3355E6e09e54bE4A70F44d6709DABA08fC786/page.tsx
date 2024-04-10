import { NextPage } from "next";

const PaulPage: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-xl flex gap-12 transform -translate-y-1/2">
        <div className="flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/54938377?v=4"
            alt="Paul Sizon"
            className="rounded-full shadow-lg"
            width={192}
            height={192}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Paul Sizon</h1>
          <span className="text-sm md:text-base text-gray-500">📍Buenos Aires🇦🇷</span>
          <p className="text-gray-600 mt-2">Mobile developer aiming to advance the future of blockchain technology</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://t.me/pablo_kagathos"
              className="text-indigo-600 hover:text-indigo-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a
              href="https://github.com/paul-sizon"
              className="text-indigo-600 hover:text-indigo-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://app.buidlguidl.com/builders/0x2Ca3355E6e09e54bE4A70F44d6709DABA08fC786"
              className="text-indigo-600 hover:text-indigo-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              BuidlGuidl
            </a>
            <a
              href="https://www.linkedin.com/in/paul-sizon/"
              className="text-indigo-600 hover:text-indigo-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaulPage;
