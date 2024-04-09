import React from "react";

interface ProfileLink {
  name: string;
  url: string;
}

const profileLinks: ProfileLink[] = [
  { name: "GitHub", url: "https://github.com/Welith" },
  { name: "Twitter", url: "https://twitter.com/bo4ka7a" }, // Replace with URL
];

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <header>
        <h1>Boris Kolev</h1>
        <p>Passionate about technology</p>
      </header>
      <section style={{ marginBottom: "2rem" }}>
        <img
          id="avatar"
          src="https://avatars.githubusercontent.com/u/33628158?s=400&u=aa5a292688f39acc845bf95765266f1ce040fd35&v=4"
          alt="Boris Kolev - Avatar"
          style={{ borderRadius: "50%", width: "200px", height: "200px", margin: "0 auto 2rem" }}
        />
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <h2>About Me</h2>
        <p>
          Backend web2 developer with around 5 years of experience. Web3 rookie, aiming to go into Smart Contract
          Security.
        </p>
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <h2>Connect with me</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {profileLinks.map(link => (
            <li key={link.name} style={{ display: "inline-block", margin: "0 1rem" }}>
              <a href={link.url} style={{ textDecoration: "underline", color: "#007bff" }}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
