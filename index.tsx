import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  Check,
  ChevronRight,
  Clock3,
  Code2,
  Gauge,
  Globe2,
  Headphones,
  Layers3,
  Menu,
  MessageCircle,
  Palette,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const whatsappUrl =
  'https://wa.me/971569341405?text=Hi%20Web%20Maker%20Nepal%2C%20I%27d%20like%20to%20discuss%20a%20project.'

const services = [
  {
    number: '01',
    icon: Layers3,
    title: 'UI/UX & Web Design',
    description:
      'Conversion-led digital experiences with clean interfaces, clear journeys, and flawless responsive behavior.',
    tags: ['UI Systems', 'Prototyping', 'Responsive'],
    accent: 'cyan',
  },
  {
    number: '02',
    icon: Blocks,
    title: 'WordPress & Commerce',
    description:
      'Flexible WordPress and WooCommerce builds engineered for easy management, security, and serious growth.',
    tags: ['Custom Themes', 'WooCommerce', 'CMS'],
    accent: 'violet',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Technical SEO',
    description:
      'Advanced technical and on-page SEO that makes every page easier for Google—and your customers—to understand.',
    tags: ['Rank Math', 'On-Page', 'Audits'],
    accent: 'blue',
  },
  {
    number: '04',
    icon: Palette,
    title: 'Brand & Graphic Design',
    description:
      'Distinctive visual identities and campaign assets that create consistency across every brand touchpoint.',
    tags: ['Brand Identity', 'Graphics', 'Guidelines'],
    accent: 'pink',
  },
]

const projects = [
  {
    category: 'Oil & Gas · B2B',
    title: 'Industrial Supply Platform',
    description:
      'A high-trust corporate website and search architecture designed for technical buyers across global markets.',
    metric: 'Top 3',
    metricLabel: 'Google positions',
    stat: '1.2s',
    statLabel: 'load time',
    className: 'project-cyan',
    visual: 'industrial',
  },
  {
    category: 'Engineering · UK',
    title: 'B2B Lead Generation Engine',
    description:
      'A focused redesign turning complex service capabilities into a fast, credible, conversion-ready sales asset.',
    metric: '+184%',
    metricLabel: 'organic visibility',
    stat: '98',
    statLabel: 'performance score',
    className: 'project-violet',
    visual: 'analytics',
  },
  {
    category: 'Commerce · Global',
    title: 'WooCommerce Growth Build',
    description:
      'A scalable commerce experience pairing frictionless product discovery with a secure, optimized checkout flow.',
    metric: '2.4×',
    metricLabel: 'more enquiries',
    stat: 'A+',
    statLabel: 'security grade',
    className: 'project-blue',
    visual: 'commerce',
  },
]

const reasons = [
  {
    icon: Zap,
    title: 'Built for speed',
    text: 'Lean builds, optimized media, and clean code that keep every interaction fast.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first by default',
    text: 'Every layout is designed around real mobile behavior—not simply scaled down.',
  },
  {
    icon: Search,
    title: 'SEO in the foundation',
    text: 'Technical search best practices shape the structure from the first wireframe.',
  },
  {
    icon: Headphones,
    title: 'Dedicated support',
    text: 'Direct, dependable communication with support available whenever it matters.',
  },
]

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Web Maker Nepal home">
      <svg className="brand-mark" viewBox="0 0 54 40" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="logo-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#35F2D0" />
            <stop offset="1" stopColor="#4D8DFF" />
          </linearGradient>
          <linearGradient id="logo-b" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#6C5CFF" />
            <stop offset="1" stopColor="#C45CFF" />
          </linearGradient>
        </defs>
        <path d="M3 8l8 24 7-17 7 17 7-24" fill="none" stroke="url(#logo-a)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31 32l7-24 6 16 7-16" fill="none" stroke="url(#logo-b)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="brand-copy">
        <strong>Web Maker</strong>
        <span>Nepal</span>
      </span>
    </a>
  )
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormStatus('sending')
    const form = event.currentTarget

    try {
      const formData = Array.from(new FormData(form).entries()).map(
        ([key, value]) => [key, String(value)],
      )
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })

      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container nav-wrap">
          <Logo />
          <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="button button-small button-primary mobile-contact" href="#contact" onClick={closeMenu}>
              Contact us <ArrowRight size={16} />
            </a>
          </nav>
          <a className="button button-small button-primary desktop-contact" href="#contact">
            Contact us <ArrowRight size={16} />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-pad">
          <div className="hero-grid container">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span /> Premier digital agency · Nepal</div>
              <h1>
                We build websites that <em>move business forward.</em>
              </h1>
              <p className="hero-lead">
                Empowering ambitious brands with cutting-edge web solutions, high-converting design, and B2B SEO that earns visibility.
              </p>
              <div className="hero-actions">
                <a className="button button-primary button-large" href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle size={20} /> Start on WhatsApp <ArrowRight size={18} />
                </a>
                <a className="text-link" href="#portfolio">Explore our work <ChevronRight size={18} /></a>
              </div>
              <div className="hero-trust">
                <div className="avatar-stack" aria-hidden="true">
                  <span>PK</span><span>WM</span><span>+9</span>
                </div>
                <div><strong>Trusted across industries</strong><span>Global delivery · Direct collaboration</span></div>
              </div>
            </div>

            <div className="hero-visual reveal reveal-delay" aria-label="Web performance dashboard preview">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="browser-card">
                <div className="browser-top">
                  <div className="browser-dots"><i /><i /><i /></div>
                  <div className="browser-address"><ShieldCheck size={12} /> webmakernepal.com</div>
                  <div className="browser-menu">•••</div>
                </div>
                <div className="dashboard-shell">
                  <aside className="dash-sidebar">
                    <div className="dash-logo">W</div>
                    <span className="active"><BarChart3 /></span>
                    <span><Globe2 /></span>
                    <span><Target /></span>
                    <span><Code2 /></span>
                  </aside>
                  <div className="dash-content">
                    <div className="dash-heading"><span>Performance overview</span><i>Live</i></div>
                    <div className="dash-metrics">
                      <div><small>Organic traffic</small><strong>24.8K</strong><em>+38.4%</em></div>
                      <div><small>Top keywords</small><strong>146</strong><em>+18 this month</em></div>
                    </div>
                    <div className="chart-card">
                      <div className="chart-label"><span>Search visibility</span><strong>86%</strong></div>
                      <svg viewBox="0 0 410 126" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#35F2D0" stopOpacity=".35" />
                            <stop offset="1" stopColor="#35F2D0" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path className="chart-area" d="M0 112 C36 104,45 89,82 92 S126 62,164 72 S218 36,248 47 S300 32,326 20 S376 10,410 5 V126 H0Z" />
                        <path className="chart-line" d="M0 112 C36 104,45 89,82 92 S126 62,164 72 S218 36,248 47 S300 32,326 20 S376 10,410 5" />
                      </svg>
                    </div>
                    <div className="dash-bottom">
                      <div className="score-ring"><strong>98</strong><span>Speed</span></div>
                      <div className="keyword-list">
                        <span><i>01</i> industrial supplier <em>↑ 3</em></span>
                        <span><i>02</i> oilfield equipment <em>↑ 7</em></span>
                        <span><i>03</i> b2b engineering <em>↑ 4</em></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-badge badge-speed"><Gauge /><span><strong>98/100</strong> Performance</span></div>
              <div className="floating-badge badge-secure"><BadgeCheck /><span><strong>HTTPS</strong> Secure by default</span></div>
            </div>
          </div>
          <div className="hero-rail container">
            <span>Strategy</span><i /> <span>Design</span><i /> <span>Development</span><i /> <span>SEO Growth</span><i /> <span>Support</span>
          </div>
        </section>

        <section className="proof-strip">
          <div className="container proof-grid">
            <div><strong>9<sup>+</sup></strong><span>Industrial websites delivered</span></div>
            <div><strong>5<sup>+</sup></strong><span>Sites ranking at the top</span></div>
            <div><strong>98<sup>/100</sup></strong><span>Target performance score</span></div>
            <div><strong>24<sup>/7</sup></strong><span>Dedicated client support</span></div>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="container about-grid">
            <div>
              <div className="section-kicker">01 · About the agency</div>
              <h2>Digital craftsmanship with a <span>commercial edge.</span></h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                Web Maker Nepal is a specialist web agency creating secure, modern, and SEO-driven platforms for global and UK-based businesses.
              </p>
              <p>
                Led by <strong>Pratik Kumar Singh</strong>, we combine intentional design, robust development, and search strategy into one accountable partnership. The result is a digital presence that looks credible, loads quickly, and works hard to generate opportunity.
              </p>
              <div className="about-signature">
                <div className="founder-avatar">PK</div>
                <div><strong>Pratik Kumar Singh</strong><span>Founder & Lead Web Specialist</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="container">
            <div className="section-heading">
              <div><div className="section-kicker">02 · Core capabilities</div><h2>Everything your digital presence needs to <span>perform.</span></h2></div>
              <p>One focused team for strategy, design, technology, and sustained search growth.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <article className={`service-card service-${service.accent}`} key={service.title}>
                    <div className="service-top"><span>{service.number}</span><div className="service-icon"><Icon /></div></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a href="#contact" aria-label={`Discuss ${service.title}`}>Discuss this service <ArrowRight size={16} /></a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="portfolio section-pad" id="portfolio">
          <div className="container">
            <div className="section-heading portfolio-heading">
              <div><div className="section-kicker">03 · Selected outcomes</div><h2>Work designed to make a <span>measurable difference.</span></h2></div>
              <a className="text-link" href="#contact">Plan your project <ArrowRight size={17} /></a>
            </div>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className={`project-card ${project.className}`} key={project.title}>
                  <div className="project-visual">
                    <span className="project-index">0{index + 1}</span>
                    {project.visual === 'industrial' && (
                      <div className="industrial-ui">
                        <div className="mini-nav"><b>ATLAS</b><span>Capabilities&nbsp;&nbsp; Industries&nbsp;&nbsp; Contact</span></div>
                        <div className="industrial-copy"><small>ENGINEERED RELIABILITY</small><strong>Powering industry.<br />Built to endure.</strong><span /></div>
                        <div className="industrial-footer"><i>40+<small>countries</small></i><i>ISO<small>certified</small></i></div>
                      </div>
                    )}
                    {project.visual === 'analytics' && (
                      <div className="analytics-ui">
                        <div className="analytics-bar"><span>Search growth</span><b>+184%</b></div>
                        <div className="bar-chart">{[38, 48, 44, 62, 68, 79, 96].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
                        <div className="analytics-key"><span><i /> Organic traffic</span><span><i /> Conversions</span></div>
                      </div>
                    )}
                    {project.visual === 'commerce' && (
                      <div className="commerce-ui">
                        <div className="commerce-nav"><b>NORTH/</b><span>Shop&nbsp;&nbsp; Collections&nbsp;&nbsp; Cart (2)</span></div>
                        <div className="product-shape"><Sparkles /></div>
                        <div className="product-info"><small>NEW COLLECTION</small><strong>Precision essentials.</strong><button type="button">Explore products</button></div>
                      </div>
                    )}
                  </div>
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-stats">
                      <div><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
                      <div><strong>{project.stat}</strong><span>{project.statLabel}</span></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why section-pad">
          <div className="container why-grid">
            <div className="why-intro">
              <div className="section-kicker">04 · Why Web Maker Nepal</div>
              <h2>Built right.<br /><span>Built to last.</span></h2>
              <p>We care about the invisible details—the technical decisions and disciplined standards that make a website feel exceptional.</p>
              <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Meet your digital partner <ArrowRight size={17} /></a>
            </div>
            <div className="reason-grid">
              {reasons.map((reason) => {
                const Icon = reason.icon
                return <article key={reason.title}><div className="reason-icon"><Icon /></div><h3>{reason.title}</h3><p>{reason.text}</p><Check className="reason-check" /></article>
              })}
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-glow" />
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="section-kicker">05 · Start a conversation</div>
              <h2>Have a bold idea?<br /><span>Let’s make it real.</span></h2>
              <p>Tell us where you want to go. We’ll bring the strategy, technical clarity, and craft to help you get there.</p>
              <a className="whatsapp-card" href={whatsappUrl} target="_blank" rel="noreferrer">
                <div><MessageCircle /></div><span><small>Prefer a quick conversation?</small><strong>Chat on WhatsApp</strong><em>+971 56 934 1405</em></span><ArrowRight />
              </a>
              <div className="contact-note"><Clock3 /><span><strong>Quick response</strong>Usually within a few hours</span></div>
            </div>
            <div className="form-panel">
              {formStatus === 'success' ? (
                <div className="form-message success-message">
                  <div><Check /></div><h3>Message received.</h3><p>Thank you for reaching out. Pratik will get back to you shortly.</p><button type="button" onClick={() => setFormStatus('idle')}>Send another message</button>
                </div>
              ) : (
                <form name="project-inquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="project-inquiry" />
                  <p className="hidden-field"><label>Leave this empty: <input name="bot-field" /></label></p>
                  <div className="form-heading"><div><span>Project inquiry</span><h3>Tell us about your project</h3></div><Send /></div>
                  <div className="field-row">
                    <label><span>Your name</span><input type="text" name="name" placeholder="e.g. Alex Morgan" required /></label>
                    <label><span>Work email</span><input type="email" name="email" placeholder="alex@company.com" required /></label>
                  </div>
                  <label><span>What can we help with?</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Web Design & UI/UX</option><option>WordPress & WooCommerce</option><option>SEO Optimization</option><option>Brand & Graphic Design</option><option>Full Digital Partnership</option></select></label>
                  <label><span>Project details</span><textarea name="project-details" rows={5} placeholder="Tell us about your goals, scope, and ideal timeline..." required /></label>
                  <button className="button button-primary submit-button" type="submit" disabled={formStatus === 'sending'}>
                    {formStatus === 'sending' ? 'Sending your message…' : 'Send project inquiry'} <ArrowRight size={18} />
                  </button>
                  {formStatus === 'error' && <p className="form-error" role="alert">Something went wrong. Please try again or contact us on WhatsApp.</p>}
                  <p className="form-privacy"><ShieldCheck /> Your details stay private and are never shared.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand"><Logo /><p>Empowering brands with cutting-edge web solutions and B2B SEO.</p></div>
          <div className="footer-links"><strong>Navigate</strong><a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="#about">About</a><a href="#contact">Contact</a></div>
          <div className="footer-links"><strong>Capabilities</strong><a href="#services">Web Design</a><a href="#services">WordPress</a><a href="#services">Technical SEO</a><a href="#services">Brand Design</a></div>
          <div className="footer-cta"><strong>Ready to grow?</strong><p>Let’s build something that earns attention.</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Start a conversation <ArrowRight size={16} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Web Maker Nepal. All rights reserved.</span><span>Designed with intent. Built for impact.</span></div>
      </footer>
    </div>
  )
}
