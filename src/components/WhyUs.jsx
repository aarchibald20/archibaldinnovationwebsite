import { useReveal } from '../hooks/useReveal';
import './WhyUs.css';

const reasons = [
  {
    title: 'Founder-Led Studio',
    desc: 'Every project is led by Ashley — not handed off to junior contractors. You get senior expertise from the first call to the final launch.',
  },
  {
    title: 'AI-Native Workflow',
    desc: "We don't just consult on AI — we use it to build faster and smarter. That speed advantage gets passed directly to you.",
  },
  {
    title: 'Small Business DNA',
    desc: 'We understand budget realities and ROI expectations. Solutions are practical, not overengineered.',
  },
  {
    title: 'Full-Stack Capability',
    desc: 'Strategy, design, development, and deployment — all under one roof. No coordination overhead.',
  },
];

const codeLines = [
  { ln: 1,  parts: [{ cls: 'cm', text: '// Archibald Innovations — AI Integration' }] },
  { ln: 2,  parts: [] },
  { ln: 3,  parts: [{ cls: 'kw', text: 'import' }, { cls: '', text: ' { ' }, { cls: 'fn', text: 'buildBusiness' }, { cls: '', text: ' } ' }, { cls: 'kw', text: 'from' }, { cls: 'st', text: " '@archibald/core'" }, { cls: '', text: ';' }] },
  { ln: 4,  parts: [] },
  { ln: 5,  parts: [{ cls: 'kw', text: 'const' }, { cls: '', text: ' ' }, { cls: 'fn', text: 'client' }, { cls: '', text: ' = {' }] },
  { ln: 6,  parts: [{ cls: '', text: "  name: " }, { cls: 'st', text: "'Your Business'" }, { cls: '', text: ',' }] },
  { ln: 7,  parts: [{ cls: '', text: '  goals: [' }, { cls: 'st', text: "'automate'" }, { cls: '', text: ', ' }, { cls: 'st', text: "'grow'" }, { cls: '', text: ', ' }, { cls: 'st', text: "'scale'" }, { cls: '', text: '],' }] },
  { ln: 8,  parts: [{ cls: '', text: '  readyForAI: ' }, { cls: 'op', text: 'true' }, { cls: '', text: ',' }] },
  { ln: 9,  parts: [{ cls: '', text: '};' }] },
  { ln: 10, parts: [] },
  { ln: 11, parts: [{ cls: 'cm', text: '// Strategy phase' }] },
  { ln: 12, parts: [{ cls: 'kw', text: 'const' }, { cls: '', text: ' strategy = ' }, { cls: 'kw', text: 'await' }, { cls: '', text: ' ' }, { cls: 'fn', text: 'assess' }, { cls: '', text: '(client.goals);' }] },
  { ln: 13, parts: [{ cls: 'kw', text: 'const' }, { cls: '', text: ' roadmap = ' }, { cls: 'fn', text: 'buildRoadmap' }, { cls: '', text: '(strategy);' }] },
  { ln: 14, parts: [] },
  { ln: 15, parts: [{ cls: 'cm', text: '// Build phase' }] },
  { ln: 16, parts: [{ cls: 'kw', text: 'const' }, { cls: '', text: ' deliverables = ' }, { cls: 'kw', text: 'await' }, { cls: '', text: ' ' }, { cls: 'fn', text: 'buildBusiness' }, { cls: '', text: '({' }] },
  { ln: 17, parts: [{ cls: '', text: '  website: ' }, { cls: 'fn', text: 'designAndDeploy' }, { cls: '', text: '(),' }] },
  { ln: 18, parts: [{ cls: '', text: '  app: ' }, { cls: 'fn', text: 'buildNativeApp' }, { cls: '', text: '(),' }] },
  { ln: 19, parts: [{ cls: '', text: '  ai: ' }, { cls: 'fn', text: 'integrateAI' }, { cls: '', text: '(roadmap),' }] },
  { ln: 20, parts: [{ cls: '', text: '});' }] },
  { ln: 21, parts: [] },
  { ln: 22, parts: [{ cls: 'cm', text: '// Launch 🚀' }] },
  { ln: 23, parts: [{ cls: 'fn', text: 'console' }, { cls: '', text: '.' }, { cls: 'fn', text: 'log' }, { cls: '', text: '(' }, { cls: 'st', text: '"Your Business is live!"' }, { cls: '', text: ');' }] },
  { ln: 24, parts: [{ cls: 'cm', text: '// → Your Business is live!' }] },
  { ln: 25, parts: [] },
  { ln: 26, parts: [{ cls: 'kw', text: 'export default' }, { cls: '', text: ' { roi: ' }, { cls: 'nu', text: 'Infinity' }, { cls: '', text: ' };' }] },
];

export default function WhyUs() {
  const headerRef = useReveal();
  const visualRef = useReveal();

  return (
    <section className="why" id="why">
      <div className="why__grid">
        <div>
          <div className="section-tag reveal" ref={headerRef}>Why Choose Us</div>
          <h2 className="section-title reveal">
            Built differently, <em>on purpose</em>
          </h2>
          <div className="why__list">
            {reasons.map((r) => {
              const ref = useReveal(); // eslint-disable-line react-hooks/rules-of-hooks
              return (
                <div className="why__item reveal" key={r.title} ref={ref}>
                  <div className="why__icon">⬡</div>
                  <div>
                    <div className="why__title">{r.title}</div>
                    <div className="why__desc">{r.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="why__visual reveal" ref={visualRef}>
          <div className="code-window">
            <div className="code-window__header">
              <span className="dot dot--r" />
              <span className="dot dot--y" />
              <span className="dot dot--g" />
              <span className="code-window__filename">archibald-ai.js</span>
            </div>
            <div className="code-window__body">
              {codeLines.map((line) => (
                <div className="code-line" key={line.ln}>
                  <span className="ln">{line.ln}</span>
                  <span>
                    {line.parts.map((p, i) => (
                      <span key={i} className={p.cls}>{p.text}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
