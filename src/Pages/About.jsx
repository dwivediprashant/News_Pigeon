export default function About() {
  return (
    <div className="bg-dark text-light my-3">
      {/* Hero / Intro */}
      <section className="py-5 bg-primary text-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-8">
              <h1 className="fw-bold mb-3">About News Pigeon</h1>
              <p className="lead mb-0">
                A focused, customizable, and trustworthy way to stay updated on
                the stories that actually matter to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-5 bg-dark text-light my-3">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <h2 className="h4 fw-bold mb-3">Our Vision</h2>
              <p className="text-light text-opacity-75 mb-0">
                To build a news companion that feels calm, intelligent, and
                transparent — helping you stay informed without feeling
                overwhelmed by noise, clickbait, or clutter.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h2 className="h4 fw-bold mb-3">Why News Pigeon</h2>
              <p className="text-light text-opacity-75 mb-0">
                News Pigeon was created for readers who want depth over drama.
                With clean design, smart personalization, and clear sources, it
                brings the best of modern news reading into a single experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Biography */}
      <section className="py-5 bg-black text-light my-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-md-3 text-center text-md-start">
              {/* Optional avatar */}
              <div
                className="rounded-circle d-inline-flex align-items-center justify-content-center border border-primary border-3"
                style={{
                  width: 96,
                  height: 96,
                  background:
                    "linear-gradient(135deg, #0d6efd 0%, #031633 100%)",
                }}
              >
                <span className="fw-bold text-light">PD</span>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <h2 className="h4 fw-bold mb-1">About the Developer</h2>
              <p className="text-light text-opacity-75 mb-2">
                I&apos;m <span className="fw-semibold">Prashant</span>, a MERN
                stack developer focused on building fast, reliable, and
                human‑centered web experiences. News Pigeon started as a passion
                project to reimagine how digital news can feel: sharp in
                content, but calm in presentation.
              </p>
              <p className="text-light text-opacity-75 mb-0">
                Every feature is designed to give readers control — from
                personalization and filters to a clean reading experience that
                respects your time and attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Principles */}
      <section className="py-5 bg-primary text-light">
        <div className="container">
          <h2 className="h4 fw-bold mb-4">What Drives This Project</h2>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <h3 className="h6 fw-semibold text-uppercase text-primary mb-2">
                Clarity
              </h3>
              <p className="text-light text-opacity-75 mb-0">
                A focused, distraction‑free interface where articles and facts
                come first, not ads or noise.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <h3 className="h6 fw-semibold text-uppercase text-primary mb-2">
                Control
              </h3>
              <p className="text-light text-opacity-75 mb-0">
                Tools that let you shape your own feed — topics, sources,
                alerts, and how you read them.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <h3 className="h6 fw-semibold text-uppercase text-primary mb-2">
                Credibility
              </h3>
              <p className="text-light text-opacity-75 mb-0">
                Clear source information and a focus on reputable outlets to
                support informed, confident decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
