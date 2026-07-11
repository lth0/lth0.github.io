const publications = [
  {
    year: "2025",
    title: "Generative AI-driven Cross-layer Covert Communication: Fundamentals, Framework and Case Study",
    venue: "IEEE Communications Magazine · Major revision",
    authors: "Tianhao Liu et al. · First author",
  },
  {
    year: "2025",
    title: "PGN: The RNN's New Successor is Effective for Long-Range Time Series Forecasting",
    venue: "NeurIPS 2025",
    authors: "Yuxin Jia et al. · Co-author",
  },
  {
    year: "2024",
    title: "Blockchain and Trusted Hardware-Enabled Data Scheduling for Edge Learning in Wireless IIoT",
    venue: "IEEE Internet of Things Journal 11(21), 34229–34242",
    authors: "Tianhao Liu et al. · First author",
  },
];

const focus = [
  "Blockchain & IoT",
  "Edge computing",
  "Multi-agent reinforcement learning",
  "Dynamic sharding",
];

export default function Home() {
  return (
    <main className="shell">
      <aside className="identity" aria-label="Profile and navigation">
        <div>
          <p className="eyebrow">Cyberspace Security Researcher</p>
          <h1>Tianhao<br />Liu<span>.</span></h1>
          <p className="affiliation">PhD Candidate<br />Beijing Jiaotong University</p>
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

        <p className="side-note">Based in Beijing, China<br />Blockchain · IoT · Edge Intelligence</p>
      </aside>

      <div className="content">
        <section id="about" className="intro section">
          <div className="section-number">01</div>
          <div>
            <p className="kicker">About</p>
            <h2>I build secure and adaptive systems for blockchain-enabled edge intelligence.</h2>
            <p className="lead">My work combines blockchain, IoT, edge computing, and multi-agent reinforcement learning to address shard load imbalance, throughput fluctuations, consensus latency, and quality-of-service degradation.</p>
            <div className="quick-links">
              <a href="mailto:leolth@bjtu.edu.cn">Email ↗</a>
              <a href="http://infosec.bjtu.edu.cn/">Laboratory ↗</a>
              <a href="#publications">Publications ↓</a>
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
              <article><p className="year">2023—Now</p><div><h3>Distributed Trustworthy Intelligent Computing</h3><p>National Key R&amp;D Program · DID and DRCM-based data ownership</p></div></article>
              <article><p className="year">2022—24</p><div><h3>Railway Locomotive PHM Security</h3><p>Blockchain verification and cloud-edge-end security architecture</p></div></article>
              <article><p className="year">2021—23</p><div><h3>APT Detection for Railway Networks</h3><p>Kill-chain assessment, CNN detection, and user behavior analysis</p></div></article>
              <article><p className="year">2018—20</p><div><h3>Cross-domain Logistics Data Management</h3><p>Isomorphic cross-chain identity authentication and data verification</p></div></article>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-number">05</div>
          <div>
            <p className="kicker">Education</p>
            <div className="timeline">
              <article><p className="year">2026</p><div><h3>PhD, Cyberspace Security</h3><p>Beijing Jiaotong University · Expected June 2026</p></div></article>
              <article><p className="year">2022</p><div><h3>MEng, Cyberspace Security</h3><p>Beijing Jiaotong University</p></div></article>
              <article><p className="year">2019</p><div><h3>BEng, Information Security</h3><p>Beijing Jiaotong University</p></div></article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="section-number">06</div>
          <div>
            <p className="kicker">Contact</p>
            <h2>Let&apos;s explore a question together.</h2>
            <p>I welcome conversations about blockchain, IoT, edge intelligence, network security, and multi-agent reinforcement learning.</p>
            <div className="contact-grid">
              <a href="mailto:leolth@bjtu.edu.cn"><span>Email</span>leolth@bjtu.edu.cn ↗</a>
              <a href="http://infosec.bjtu.edu.cn/"><span>Laboratory</span>BJTU Security &amp; Privacy Lab ↗</a>
              <a href="https://www.bjtu.edu.cn/"><span>University</span>Beijing Jiaotong University ↗</a>
            </div>
            <footer>© 2026 Tianhao Liu <span>Last updated July 2026</span></footer>
          </div>
        </section>
      </div>
    </main>
  );
}
