import FeatureCard from '../../components/FeatureCard/FeatureCard.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';

const features = [
  {
    title: 'Calm note reading',
    description: 'Soft backgrounds reduce glare and keep long study sessions comfortable.',
  },
  {
    title: 'Serious exam vibe',
    description: 'Muted blue conveys trust and focus without making the interface feel too corporate.',
  },
  {
    title: 'Low distraction UI',
    description: 'Only one main accent is used for actions, while cards and text stay quiet and readable.',
  },
];

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="features lazy-block" id="features">
          <div className="container">
            <div className="section-head">
              <h2>Designed for focused studying</h2>
              <p>
                The palette uses soft neutrals, muted slate blue, and an olive accent so the
                interface feels serious, calm, and academic instead of flashy. Neutral surfaces and
                restrained accent colors keep the workspace readable during long revision sessions.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
