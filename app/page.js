import ContactForm from "@/components/ContactForm";
import { experience, freelance, personal, profile, stack, work } from "@/lib/content";

const pad = (n) => String(n).padStart(2, "0");

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3 9 9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function Section({ id, label, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-label">{label}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href="#top" className="wordmark">
            Fırat Kıl
          </a>
          <nav aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="wrap">
        <section className="hero">
          <p className="eyebrow">
            {profile.role} · {profile.location}
          </p>
          <h1>
            I build AI-powered SaaS products, <em>end to end.</em>
          </h1>
          <p className="lede">
            Data model, auth, billing, background jobs, tests and deployment. Mostly Next.js,
            TypeScript and PostgreSQL. Right now at Vizio AI, where I’ve shipped products in legal
            tech, hiring, customer support and e-commerce, usually as the lead or only developer.
          </p>
          <ul className="hero-links">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
            </li>
          </ul>
        </section>

        <Section id="work" label="Selected work">
          <p className="note">
            Most of this is client work. I describe each product by what it does rather than who
            it’s for, and I’m happy to go deeper in a conversation.
          </p>
          <ol className="work">
            {work.map((p, i) => (
              <li key={p.title} className="work-item">
                <div className="work-meta">
                  <span className="num">{pad(i + 1)}</span>
                  <span>{p.year}</span>
                  <span>{p.role}</span>
                </div>
                <div className="work-main">
                  <h3>{p.title}</h3>
                  <p className="summary">{p.summary}</p>
                  <ul className="points">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <p className="tags">{p.stack.join("  /  ")}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="sub">Freelance</h3>
          {freelance.map((f) => (
            <div key={f.title} className="work-item">
              <div className="work-meta">
                <span>{f.year}</span>
                <span>Solo</span>
              </div>
              <div className="work-main">
                <h3>{f.title}</h3>
                <p className="summary">{f.summary}</p>
                <p className="inline-links">
                  {f.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <Arrow />
                    </a>
                  ))}
                </p>
              </div>
            </div>
          ))}

          <h3 className="sub">Side projects</h3>
          <ul className="side">
            {personal.map((s) => (
              <li key={s.title}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  <span className="side-title">
                    {s.title} <Arrow />
                  </span>
                  <span className="side-summary">{s.summary}</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="how" label="How I work">
          <div className="prose">
            <p>
              I use AI coding agents every day. They make me faster, but they don’t decide the
              data model, where the security boundaries go, what has to be tested or whether a
              change is ready. Those calls are mine, and I read every diff before it ships.
            </p>
            <p>
              I like to put rules where they can’t be skipped: row-level security in the database,
              payment state changed only by verified webhooks, auction logic inside Postgres
              functions. Then I write tests that prove those rules hold.
            </p>
          </div>
        </Section>

        <Section id="experience" label="Experience">
          <ul className="timeline">
            {experience.map((e) => (
              <li key={e.company + e.title}>
                <span className="period">{e.period}</span>
                <div>
                  <p className="tl-head">
                    {e.title} <span className="at">at</span> {e.company}
                  </p>
                  <p className="tl-note">{e.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="edu">
            Economics, Ankara University · Computer Engineering, Ahmet Yesevi University
          </p>
        </Section>

        <Section id="stack" label="Stack">
          <dl className="stack">
            {stack.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" label="Contact">
          <p className="contact-lede">
            The quickest way to reach me is email:{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>. Or leave a message here.
          </p>
          <ContactForm />
        </Section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Fırat Kıl</span>
        <span>Ankara · Built with Next.js</span>
      </footer>
    </>
  );
}
