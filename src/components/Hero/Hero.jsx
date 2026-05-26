import DashboardPreview from '../DashboardPreview/DashboardPreview.jsx';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">Study workspace for exam preparation</div>
          <h1>
            Turn class notes into <span>clear answers</span> and fast revision.
          </h1>
          <p>
            Built for students who need a calm, focused space during exam time. Upload handwritten
            notes, PDFs, or text files, then chat with them, generate summaries, and revise without
            distraction.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#dashboard-preview">
              Get started free
            </a>
            <a className="btn btn-secondary" href="#dashboard-preview">
              See dashboard
            </a>
          </div>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}

export default Hero;
