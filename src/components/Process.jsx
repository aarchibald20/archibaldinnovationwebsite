import { useReveal } from '../hooks/useReveal';
import './Process.css';

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We listen deeply to understand your goals, constraints, and vision before recommending any solution.',
  },
  {
    num: '02',
    title: 'Strategy & Scope',
    desc: 'We define the roadmap, deliverables, and timeline — everything documented and agreed upon upfront.',
  },
  {
    num: '03',
    title: 'Design & Build',
    desc: 'Our team gets to work. You see progress through regular check-ins and transparent updates.',
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'We handle deployment and stay close post-launch to ensure everything performs exactly as expected.',
  },
];

export default function Process() {
  const headerRef = useReveal();
  const visualRef = useReveal();

  return (
    <section className="process" id="process">
      <div className="process__grid">
        <div>
          <div className="section-tag reveal" ref={headerRef}>How It Works</div>
          <h2 className="section-title reveal">Our <em>proven</em> process</h2>
          <div className="process__steps">
            {steps.map((s) => {
              const ref = useReveal(); // eslint-disable-line react-hooks/rules-of-hooks
              return (
                <div className="process__step reveal" key={s.num} ref={ref}>
                  <div className="process__step-num">{s.num}</div>
                  <div>
                    <div className="process__step-title">{s.title}</div>
                    <div className="process__step-desc">{s.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="process__visual reveal" ref={visualRef}>
          <div className="process__diagram">
            <div className="process__ring ring--1" />
            <div className="process__ring ring--2" />
            <div className="process__ring ring--3" />
            <div className="process__center">
              Archibald<br />Method
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
