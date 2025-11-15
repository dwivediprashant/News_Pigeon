import { Link } from "react-router-dom";

export default function Feature() {
  return (
    <div className="features-page bg-light">
      {/* Hero / Overview */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">
            Stay Ahead of the News, Without the Noise
          </h1>
          <p className="lead mt-3">
            News Pigeon curates the latest stories from trusted sources and
            personalizes them to your interests, so you see what matters first.
          </p>
          <Link to="/">
            <button className="btn btn-primary btn-lg mt-3">
              Start reading
            </button>
          </Link>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Personalized Feed */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Personalized For You</h5>
                  <p className="card-text">
                    Build a feed around your interests like Technology, Finance,
                    Sports, or Entertainment.
                  </p>
                  <ul className="mb-0">
                    <li>Smart recommendations</li>
                    <li>Mix of local and global news</li>
                    <li>Always fresh and relevant</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Control */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Full Control Over What You See
                  </h5>
                  <p className="card-text">
                    Fine‑tune your feed with advanced filters.
                  </p>
                  <ul className="mb-0">
                    <li>Filter by category and tags</li>
                    <li>Follow or mute publishers</li>
                    <li>View multiple perspectives</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Breaking News */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Never Miss a Breaking Story
                  </h5>
                  <p className="card-text">
                    Stay notified when big stories break.
                  </p>
                  <ul className="mb-0">
                    <li>Real‑time notifications</li>
                    <li>Choose topics that alert you</li>
                    <li>Daily/weekly digest option</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reading Experience */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Comfortable Reading Experience
                  </h5>
                  <p className="card-text">
                    Focus on the story with a clean and modern interface.
                  </p>
                  <ul className="mb-0">
                    <li>Minimal distraction‑free layout</li>
                    <li>Light & dark modes</li>
                    <li>Adjustable text size</li>
                    <li>Save for later</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Discovery */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Discover What’s Trending
                  </h5>
                  <p className="card-text">
                    See what everyone is talking about right now.
                  </p>
                  <ul className="mb-0">
                    <li>Trending stories across topics</li>
                    <li>Editor&apos;s picks</li>
                    <li>Browse by tags and regions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Powerful Search & Filters
                  </h5>
                  <p className="card-text">
                    Find any story or topic instantly.
                  </p>
                  <ul className="mb-0">
                    <li>Search by keyword or location</li>
                    <li>Filter by date, source, category</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sharing */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Share and Engage</h5>
                  <p className="card-text">
                    Easily share stories and join the conversation.
                  </p>
                  <ul className="mb-0">
                    <li>Share to WhatsApp, X, Instagram</li>
                    <li>Likes/comments (if enabled)</li>
                    <li>Follow topics and authors</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Trusted & Transparent</h5>
                  <p className="card-text">
                    Know exactly where your news comes from.
                  </p>
                  <ul className="mb-0">
                    <li>Clear source on every article</li>
                    <li>Multiple outlets for big stories</li>
                    <li>Focus on reputable publishers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Fast, Lightweight & Responsive
                  </h5>
                  <p className="card-text">
                    Works great on any device and network.
                  </p>
                  <ul className="mb-0">
                    <li>Optimized for mobile & desktop</li>
                    <li>Quick loading, even on 3G</li>
                    <li>Offline reading for saved stories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Upgrade How You Read News?</h2>
          <p className="mb-4">
            Join readers who rely on News Pigeon to stay informed and focused.
          </p>
          <Link to="/">
            <button className="btn btn-light btn-lg text-primary fw-semibold">
              Start Reading Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
