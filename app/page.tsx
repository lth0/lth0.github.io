const publications = [
  {
    year: "2026",
    title: "Forecasting collective attention with interpretable temporal networks",
    venue: "Nature Human Behaviour · In press",
    authors: "E. Park, M. Alvarez, S. Okafor",
  },
  {
    year: "2025",
    title: "Unequal diffusion: How platform design shapes public knowledge",
    venue: "Proceedings of the National Academy of Sciences 122(14)",
    authors: "E. Park, J. Klein",
  },
  {
    year: "2024",
    title: "Auditing social algorithms through participatory simulations",
    venue: "ACM Conference on Fairness, Accountability, and Transparency",
    authors: "E. Park, R. Shah, L. Moreno",
  },
];

const focus = [
  "Computational social science",
  "Responsible AI",
  "Network dynamics",
  "Human-centered data",
];

export default function Home() {
  return (
    <main className="shell">
      <aside className="identity" aria-label="Profile and navigation">
        <div>
          <p className="eyebrow">Computational Social Scientist</p>
          <h1>Eleanor<br />Park<span>.</span></h1>
          <p className="affiliation">Assistant Professor<br />University of Amsterdam</p>
          <p className="availability"><i aria-hidden="true" /> Open to collaboration</p>
        </div>

        <nav aria-label="Curriculum vitae sections">
          <a href="#about"><span>01</span>About</a>
          <a href="#research"><span>02</span>Research</a>
          <a href="#publications"><span>03</span>Publications</a>
          <a href="#experience"><span>04</span>Experience</a>
          <a href="#education"><span>05</span>Education</a>
          <a href="#contact"><span>06</span>Contact</a>
        </nav>

        <p className="side-note">Based in Amsterdam, NL<br />Working across disciplines &amp; time zones</p>
      </aside>

      <div className="content">
        <section id="about" className="intro section">
          <div className="section-number">01</div>
          <div>
            <p className="kicker">About</p>
            <h2>I study how people, platforms, and algorithms shape collective behavior.</h2>
            <p className="lead">My work combines network science, causal inference, and participatory methods to build digital systems that are more transparent, equitable, and useful to the communities they affect.</p>
            <div className="quick-links">
              <a href="mailto:eleanor.park@example.com">Email ↗</a>
              <a href="#publications">Google Scholar ↗</a>
              <a href="#contact">Download CV ↓</a>
            </div>
          </div>
        </section>

        <section id="research" className="section">
          <div className="section-number">02</div>
          <div>
            <p className="kicker">Research focus</p>
            <div className="focus-grid">
              {focus.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}
            </div>
          </div>
        </section>

        <section id="publications" className="section">
          <div className="section-number">03</div>
          <div>
            <div className="section-heading"><p className="kicker">Selected publications</p><a href="#contact">Full list ↗</a></div>
            <div className="publication-list">
              {publications.map((paper) => (
                <article key={paper.title}>
                  <span className="year">{paper.year}</span>
                  <div><h3>{paper.title}</h3><p>{paper.authors}</p><p className="venue">{paper.venue}</p></div>
                  <span className="arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-number">04</div>
          <div>
            <p className="kicker">Experience</p>
            <div className="timeline">
              <article><p className="year">2023—Now</p><div><h3>Assistant Professor</h3><p>University of Amsterdam · Digital Society Initiative</p></div></article>
              <article><p className="year">2020—23</p><div><h3>Postdoctoral Fellow</h3><p>MIT Media Lab · Social Machines Group</p></div></article>
              <article><p className="year">2018—20</p><div><h3>Research Scientist</h3><p>Data &amp; Society Research Institute · New York</p></div></article>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-number">05</div>
          <div>
            <p className="kicker">Education</p>
            <div className="timeline">
              <article><p className="year">2018</p><div><h3>PhD, Information Science</h3><p>Cornell University · Ithaca, NY</p></div></article>
              <article><p className="year">2012</p><div><h3>MSc, Applied Mathematics</h3><p>University College London · London, UK</p></div></article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="section-number">06</div>
          <div>
            <p className="kicker">Contact</p>
            <h2>Let&apos;s explore a question together.</h2>
            <p>I welcome conversations about research collaborations, invited talks, doctoral supervision, and thoughtful applications of computational methods.</p>
            <div className="contact-grid">
              <a href="mailto:eleanor.park@example.com"><span>Email</span>eleanor.park@example.com ↗</a>
              <a href="#about"><span>Office</span>REC B, Amsterdam ↗</a>
              <a href="#publications"><span>Profiles</span>Scholar · ORCID · GitHub ↗</a>
            </div>
            <footer>© 2026 Eleanor Park <span>Last updated July 2026</span></footer>
          </div>
        </section>
      </div>
    </main>
  );
}
