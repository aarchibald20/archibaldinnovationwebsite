import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

const SERVICE_OPTIONS = [
  'AI Consulting',
  'Website Design',
  'App Development',
  'All Three',
];

export default function Contact() {
  const leftRef  = useReveal();
  const rightRef = useReveal();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [chips, setChips] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | error | success

  const toggleChip = (chip) => {
    setChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const FORMSPREE_URL = 'https://formspree.io/f/xpqbqdbp';

  const handleSubmit = async () => {
    if (!form.email || !form.email.includes('@')) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2500);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          services: chips.join(', '),
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ firstName: '', lastName: '', email: '', message: '' });
        setChips([]);
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 2500);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2500);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        {/* LEFT */}
        <div className="contact__left reveal" ref={leftRef}>
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Let's build something<br /><em>remarkable</em>
          </h2>
          <p className="section-desc" style={{ marginBottom: 48 }}>
            Tell us about your project and we'll get back to you within 24 hours
            to schedule a free discovery call.
          </p>

          <div className="contact__details">
            {[
              { icon: '✉', label: 'Email Us',       value: 'archibaldinnovations@gmail.com', href: 'mailto:archibaldinnovations@gmail.com' },
              { icon: '◎', label: 'Location',       value: 'Warner Robins, GA' },
              { icon: '◷', label: 'Response Time',  value: 'Within 24 hours' },
            ].map((item) => (
              <div className="contact__detail-item" key={item.label}>
                <div className="contact__detail-icon">{item.icon}</div>
                <div>
                  <div className="contact__detail-label">{item.label}</div>
                  {item.href
                    ? <a href={item.href} className="contact__detail-value contact__detail-value--link">{item.value}</a>
                    : <div className="contact__detail-value">{item.value}</div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="contact__right reveal" ref={rightRef} style={{ transitionDelay: '0.2s' }}>
          <div className="reach-box">
            <div className="reach-box__header">
              <span className="reach-box__tag">Start a Conversation</span>
            </div>

            <div className="reach-box__fields">
              <div className="field-row">
                <div className="field-group">
                  <label className="field-label">First Name</label>
                  <input
                    className="field-input"
                    type="text"
                    name="firstName"
                    placeholder="Ashley"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="field-group">
                  <label className="field-label">Last Name</label>
                  <input
                    className="field-input"
                    type="text"
                    name="lastName"
                    placeholder="Archibald"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">Email Address</label>
                <input
                  className={`field-input ${status === 'error' ? 'field-input--error' : ''}`}
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label className="field-label">I'm interested in</label>
                <div className="chips">
                  {SERVICE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      className={`chip ${chips.includes(opt) ? 'chip--active' : ''}`}
                      onClick={() => toggleChip(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">Tell us about your project</label>
                <textarea
                  className="field-input field-input--textarea"
                  name="message"
                  placeholder="What are you building? What problem are you solving?"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button
                className={`reach-btn ${status === 'success' ? 'reach-btn--success' : ''}`}
                onClick={handleSubmit}
                disabled={status === 'success'}
              >
                {status === 'success' ? "✓ Message Sent — We'll be in touch!" : 'Send Message →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
