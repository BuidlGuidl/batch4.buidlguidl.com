"use client";

import "./page.css";
import type { NextPage } from "next";

const PersonalPage: NextPage = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/itsarjn"
              className="home__social-icon"
              target="_blank"
              onMouseEnter={() => "ABCD"}
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://x.com/itsarjn" className="home__social-icon" target="_blank">
              <i className="uil uil-twitter-alt"></i>
            </a>

            <a href="https://github.com/arjun-r34" className="home__social-icon" target="_blank">
              <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://arjun.wtf" className="home__social-icon" target="_blank">
              <i className="fluent-mdl2--website"></i>
            </a>
          </div>

          <div className="home__img"></div>

          <div className="home__data">
            <h1 className="home__title">Arjun 👨🏻‍💻🔥</h1>

            <h3 className="home__subtitle">Fullstack Web3 Engineer</h3>

            <br />

            <p className="home__description">
              I am a full stack web3 degen with a knack for architecting & building cool products.
            </p>

            <p className="home__description">
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
