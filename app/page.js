import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Mock } from "@/components/mocks";
import { experience, featured, more, profile, stack } from "@/lib/content";
import portrait from "@/public/profile.jpeg";

function SectionHead({ title, children }) {
  return (
    <div className="head">
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="nav-name">
            Fırat Kıl
          </a>
          <nav aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact" className="nav-cta">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-text">
            <h1>I build SaaS products with AI in them, from the database to the deploy.</h1>
            <p className="hero-sub">
              I’m a full-stack developer in Ankara. At Vizio AI I lead or solely build client products
              in legal tech, hiring, customer support and online auctions, mostly with Next.js,
              TypeScript and PostgreSQL.
            </p>
            <div className="hero-actions">
              <a className="btn" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="link" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="link" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <Image src={portrait} alt="Fırat Kıl" priority sizes="(max-width: 900px) 40vw, 360px" />
          </div>
        </section>

        <section id="work" className="band band-white">
          <div className="wrap">
            <SectionHead title="Selected work">
              Most of this is client work, so I describe each product by what it does and leave out
              who it is for. The screens are simple mock-ups with sample data.
            </SectionHead>

            <div className="projects">
              {featured.map((p) => (
                <article key={p.title} className={`project${p.wide ? " project--wide" : ""}`}>
                  <div className="project-text">
                    <div>
                      <h3>{p.title}</h3>
                      <p className="project-summary">{p.summary}</p>
                    </div>
                    <div>
                      <ul className="project-points">
                        {p.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                      <p className="project-meta">
                        {p.role} · {p.year}
                        <br />
                        {p.stack}
                      </p>
                    </div>
                  </div>
                  <div className="project-visual">
                    <Mock kind={p.mock} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band band-dark">
          <div className="wrap">
            <div className="statement-grid">
            <p className="statement">
              I write most code with AI agents now. I still decide the data model, the security
              rules and the tests, and I read every change before it ships.
            </p>
            <div className="statement-cols">
              <p>
                I like rules that can’t be skipped. Row-level security lives in the database. Payment
                state only changes when a verified webhook arrives. Auction logic runs inside Postgres
                functions.
              </p>
              <p>
                Then I prove those rules hold, with pgTAP for the database, Playwright for the flows
                and unit tests for the parts with real logic, like matching payments to invoices.
              </p>
            </div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="wrap">
            <SectionHead title="More projects">
              Smaller client products, freelance sites and a few tools I built for myself.
            </SectionHead>
            <ul className="more">
              {more.map((m) => (
                <li key={m.title}>
                  <h3>{m.title}</h3>
                  <p>{m.summary}</p>
                  <p className="more-meta">{m.meta}</p>
                  {m.links && (
                    <p className="more-links">
                      {m.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                          {l.label}
                        </a>
                      ))}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="band band-white">
          <div className="wrap">
            <SectionHead title="Experience">
              Economics at Ankara University and Computer Engineering at Ahmet Yesevi University.
            </SectionHead>
            <ul className="jobs">
              {experience.map((e) => (
                <li key={e.company + e.title}>
                  <span className="jobs-period">{e.period}</span>
                  <span className="jobs-detail">
                    <span className="jobs-role">
                      {e.title}, {e.company}
                    </span>
                    <span className="jobs-note">{e.note}</span>
                  </span>
                </li>
              ))}
            </ul>
            <dl className="tools">
              {stack.map(([group, items]) => (
                <div key={group}>
                  <dt>{group}</dt>
                  <dd>{items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="band">
          <div className="wrap contact">
            <div>
              <h2 className="contact-title">Working on something? Send me a note.</h2>
              <p className="contact-sub">
                Or write to me directly at{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="wrap">
        <div className="footer-inner">
        <span>Fırat Kıl · Full-stack developer, Ankara</span>
        <span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </span>
        </div>
      </footer>
    </>
  );
}
