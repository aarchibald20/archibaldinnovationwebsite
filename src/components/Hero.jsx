import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__grid-bg" />
      <div className="hero__orb" />

      <div className="hero__left">
        <div className="hero__badge">Digital Studio · Warner Robins, GA</div>
        <h1 className="hero__title">
          We build the<br />
          <em>intelligent</em><br />
          digital future
        </h1>
        <p className="hero__sub">
          AI consulting, custom websites, and mobile apps for small businesses
          ready to move smarter, faster, and ahead of the competition.
        </p>
        <div className="hero__actions">
          <a href="#services" className="btn-primary">Explore Services</a>
          <a href="#contact" className="btn-ghost">Start a Project</a>
        </div>
      </div>

      <div className="hero__right">
        <div className="hero__stats">
          {[
            { num: 'AI', label: 'First Approach' },
            { num: '3×', label: 'Faster Delivery' },
            { num: '100%', label: 'Custom Built' },
            { num: '∞', label: 'Scalable' },
          ].map((s) => (
            <div className="hero__stat-card" key={s.label}>
              <div className="hero__stat-num">{s.num}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
