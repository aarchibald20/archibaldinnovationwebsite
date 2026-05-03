import { useReveal } from '../hooks/useReveal';
import './Services.css';

const services = [
  {
    number: '01',
    name: 'AI Consulting',
    desc: 'We audit your workflows, identify high-impact AI opportunities, and build a clear roadmap to automate, accelerate, and elevate your business operations.',
    features: [
      'AI readiness assessment',
      'Workflow automation strategy',
      'Tool selection & integration planning',
      'Custom AI agent development',
      'Staff training & adoption support',
      'Ongoing optimization',
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="10" />
        <path d="M24 4v6M24 38v6M4 24h6M38 24h6" />
        <path d="M10.1 10.1l4.2 4.2M33.7 33.7l4.2 4.2M10.1 37.9l4.2-4.2M33.7 14.3l4.2-4.2" />
        <circle cx="24" cy="24" r="3" fill="#C9A84C" stroke="none" />
      </svg>
    ),
  },
  {
    number: '02',
    name: 'Website Design',
    desc: 'Stunning, conversion-focused websites that position your brand with authority. Every pixel is crafted to engage your visitors and turn them into clients.',
    features: [
      'Custom design — no templates',
      'React & modern frameworks',
      'Mobile-first, lightning fast',
      'SEO optimized from day one',
      'CMS & content management',
      'Analytics & performance tracking',
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="40" height="28" rx="2" />
        <path d="M16 44h16M24 36v8" />
        <path d="M12 20l6 4-6 4M22 28h10" />
      </svg>
    ),
  },
  {
    number: '03',
    name: 'App Development',
    desc: 'Powerful mobile and web applications that solve real problems. From marketplace platforms to fintech tools — we engineer apps that scale with your ambitions.',
    features: [
      'React Native (iOS & Android)',
      'Full-stack web applications',
      'API design & integrations',
      'Payment processing (Stripe etc.)',
      'Database architecture',
      'Launch & post-launch support',
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="14" y="4" width="20" height="40" rx="4" />
        <path d="M20 8h8M22 38h4" />
        <rect x="17" y="12" width="14" height="20" rx="1" />
      </svg>
    ),
  },
];

function ServiceCard({ service, delay }) {
  const ref = useReveal();
  return (
    <div className="service-card reveal" ref={ref} style={{ transitionDelay: delay }}>
      <div className="service-card__icon">
        <span className="service-card__number">{service.number}</span>
        {service.icon}
      </div>
      <div className="service-card__name">{service.name}</div>
      <p className="service-card__desc">{service.desc}</p>
      <ul className="service-card__features">
        {service.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  const headerRef = useReveal();

  return (
    <section className="services" id="services">
      <div className="services__header reveal" ref={headerRef}>
        <div className="section-tag">What We Do</div>
        <h2 className="section-title">
          Three pillars of <em>digital excellence</em>
        </h2>
        <p className="section-desc">
          From strategy to execution — we handle the full spectrum of your digital
          transformation so you can focus on running your business.
        </p>
      </div>

      <div className="services__grid">
        {services.map((s, i) => (
          <ServiceCard key={s.name} service={s} delay={`${i * 0.15}s`} />
        ))}
      </div>
    </section>
  );
}
