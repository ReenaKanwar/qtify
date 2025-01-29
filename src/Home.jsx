
import React from "react";
import Hero from "./components/Hero"; 

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <header className="home-header">
        <h1>Welcome to QTify</h1>
        <p>Discover your favorite music and playlists.</p>
      </header>
      <main className="home-main">
        <section className="highlight-section">
          <h2>Highlights</h2>
          <p>Check out the latest and greatest tracks curated just for you.</p>
        </section>
        <section className="playlist-section">
          <h2>Top Playlists</h2>
          <p>Browse through our collection of playlists to suit every mood.</p>
        </section>
        <section className="feedback-section">
          <h2>We Value Your Feedback</h2>
          <p>Click on the feedback button to share your thoughts about QTify!</p>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} QTify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
