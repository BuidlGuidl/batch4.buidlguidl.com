import type { NextPage } from "next";

const PersonalPage: NextPage = () => {
  return (
    <section className="p-[6rem] bg-[#141517] h-screen w-screen justify-center" id="home">
      <div className="mx grid gap-6 max-w-5xl mx-auto">
        <div
          className="home__content grid gap-6 grid-cols-[116px minmax(2, 1fr)] md:pt-[3.5rem] pt-[5.5rem] gap-x-8 items-center"
          style={{ gridTemplateColumns: "116px repeat(2, 1fr)" }}
        >
          <div className="grid gap-y-8">
            <a href="https://www.linkedin.com/in/itsarjn" className="text-[#d5d5d5] text-xl" target="_blank">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>

            <a href="https://x.com/itsarjn" className="text-[#d5d5d5] text-xl" target="_blank">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </a>

            <a href="https://github.com/arjun-r34" className="text-[#d5d5d5] text-xl" target="_blank">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span>
            </a>

            <a href="https://arjun.wtf" className="text-[#d5d5d5] text-xl" target="_blank">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  className="w-[50px] h-[50px] fill-[#8e8e8e]"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"></path>
                </svg>
              </span>
            </a>
          </div>

          <div className="bg-center bg-cover order-1 justify-self-center bg-no-repeat rounded-full w-85 h-85 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha-1_MyjCXLMZulLqpC0yhRhKaZ5cnSt1PbAPG4WA3B0fL8Ogyul_DTsAV-HE0q1JhR0uwS8tFz3NNwfIfNtQVjY_-FzfHzf6s=w3024-h1658-v0"
              alt="Arjun Sasikumar"
              className="rounded-full shadow-lg"
              width={400}
              height={400}
            />
          </div>

          <div className="home__data">
            <h1 className="mb-1 text-7xl text-[#EAEBED] mt-[10px]">Arjun 👨🏻‍💻🔥</h1>

            <h3 className="home__subtitle font-normal mb-4 text-2xl text-[#B1B1B2] mt-[10px]">
              Fullstack Web3 Engineer
            </h3>

            <br />

            <p className="max-w-[400px] mb-12 text-[#EAEBED] m-[5px] text-0.9xl">
              I am a full stack web3 degen with a knack for architecting & building cool products.
            </p>

            <p className="max-w-[400px] mb-12 text-[#EAEBED] m-[5px] text-0.9xl">
              CoFounder of <a href="https://getwalletx.com">WalletX</a>, a gasless smart wallet browser extension
              designed for getting the best out of the onchain world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalPage;
