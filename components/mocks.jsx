// Small product mock-ups built in markup. Every one uses invented sample data
// and a neutral look, so no client's design or data appears on the site.

import AuctionMock from "./AuctionMock";

export function Frame({ title, children }) {
  return (
    <figure className="frame">
      <div className="frame-bar">
        <span className="frame-title">{title}</span>
        <span className="frame-tag">Sample data</span>
      </div>
      <div className="frame-body">{children}</div>
    </figure>
  );
}

function LegalMock() {
  return (
    <Frame title="Research">
      <div className="legal">
        <p className="legal-q">Can a landlord raise the rent by more than inflation on a residential lease?</p>
        <div className="legal-a">
          <p>
            Not during the first five years. Increases are capped at the twelve-month change in the
            consumer price index<sup>1</sup>. After five years, a court can set a new rent that
            also reflects market rates<sup>2</sup>.
          </p>
          <ol className="legal-sources">
            <li>
              <span className="src-n">1</span>
              <span>
                Turkish Code of Obligations, art. 344
                <em>Statute</em>
              </span>
            </li>
            <li>
              <span className="src-n">2</span>
              <span>
                Court of Cassation, 3rd Civil Chamber
                <em>Decision on rent determination</em>
              </span>
            </li>
          </ol>
        </div>
        <p className="legal-meta">2 sources cited from 48 retrieved passages</p>
      </div>
    </Frame>
  );
}

const pipeline = [
  { stage: "Applied", count: 24, people: ["Marcus Hall", "Zeynep Arslan", "Daniel Okafor"] },
  { stage: "Screening", count: 9, people: ["Elif Demir", "Sara Lindqvist"], scored: 0 },
  { stage: "Interview", count: 4, people: ["Tom Becker", "Aylin Kaya"] },
  { stage: "Offer", count: 1, people: ["Jonas Weber"] },
];

function HiringMock() {
  return (
    <Frame title="Senior Backend Engineer · Pipeline">
      <div className="pipe">
        {pipeline.map((col) => (
          <div key={col.stage} className="pipe-col">
            <p className="pipe-head">
              {col.stage} <span>{col.count}</span>
            </p>
            {col.people.map((p, i) =>
              col.scored === i ? (
                <div key={p} className="pipe-card is-open">
                  <p className="pipe-name">{p}</p>
                  <p className="pipe-score">
                    AI score <b>86</b>
                  </p>
                  <p className="pipe-note">Six years of Postgres and queue work. No team lead experience yet.</p>
                </div>
              ) : (
                <div key={p} className="pipe-card">
                  <p className="pipe-name">{p}</p>
                </div>
              ),
            )}
          </div>
        ))}
      </div>
    </Frame>
  );
}

function ImportMock() {
  return (
    <Frame title="Imports">
      <div className="imp">
        <div className="imp-file">
          <div>
            <p className="imp-name">support-inbox-2019-2025.pst</p>
            <p className="imp-sub">3.8 GB · started 14:02</p>
          </div>
          <span className="imp-state">Processing</span>
        </div>
        <div className="imp-bar" role="img" aria-label="64 percent processed">
          <span style={{ width: "64%" }} />
        </div>
        <dl className="imp-stats">
          <div>
            <dt>Messages</dt>
            <dd>41,208</dd>
          </div>
          <div>
            <dt>Threads</dt>
            <dd>9,764</dd>
          </div>
          <div>
            <dt>Chunks</dt>
            <dd>812 / 1,270</dd>
          </div>
        </dl>
        <ul className="imp-log">
          <li>
            <span>14:31:07</span> chunk 812 written, 500 messages
          </li>
          <li>
            <span>14:31:05</span> chunk 811 written, 500 messages
          </li>
          <li>
            <span>14:31:02</span> retry chunk 809 after timeout, ok
          </li>
        </ul>
      </div>
    </Frame>
  );
}

// The auction is a phone app, so it is shown on a phone.
function PhoneFrame({ children }) {
  return (
    <figure className="phone-stage">
      <div className="phone">
        <span className="phone-island" aria-hidden="true" />
        <div className="phone-screen">
          <div className="phone-top">
            <span>Lot 214</span>
            <span className="frame-tag">Sample data</span>
          </div>
          {children}
        </div>
      </div>
    </figure>
  );
}

export function Mock({ kind }) {
  if (kind === "legal") return <LegalMock />;
  if (kind === "hiring") return <HiringMock />;
  if (kind === "auction")
    return (
      <PhoneFrame>
        <AuctionMock />
      </PhoneFrame>
    );
  if (kind === "import") return <ImportMock />;
  return null;
}
