import "./Home.css"

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">YOUR RUSSIAN JOURNEY STARTS HERE</span>

          <h1>
            Learn Russian
            <br />
            from <span>Zero</span>
          </h1>

          <p>
            Start your journey with simple, interactive
            lessons. Learn the Russian alphabet, build
            vocabulary, and speak with confidence.
          </p>

          <div className="hero-buttons">
            <button className="hero-primary" onClick={() =>
              document
                .getElementById("russian-alphabet")
                ?.scrollIntoView({ behavior: "smooth" })
            }>
              Start Learning →
            </button>

            <button className="hero-secondary">
              Explore Lessons
            </button>
          </div>

          <div className="hero-note">
            No experience needed · Beginner friendly
          </div>
        </div>

        <div className="hero-image">
          <img
            src="../../../public/Hero.png"
            alt="Illustration of learning the Russian language"
          />
        </div>
      </section>



    </>
  );
}
