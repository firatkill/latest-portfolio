"use client";

import { useEffect, useRef, useState } from "react";

// Plays the anti-sniping rule twice: a bid in the last seconds pushes the
// close back. It runs only while visible, then rests on the extended state.
// With reduced motion it shows that end state straight away.

const START = 12;
const SNIPE_AT = 4;
const EXTEND_TO = 30;
const LOOPS = 2;

const baseBids = [
  { who: "Bidder ··27", amount: 3250, ago: "1 min ago" },
  { who: "Bidder ··04", amount: 3100, ago: "3 min ago" },
];
const lateBid = { who: "Bidder ··81", amount: 3400, ago: "just now" };

const fmt = (s) => `0:${String(s).padStart(2, "0")}`;
const money = (n) => `$${n.toLocaleString("en-US")}`;

export default function AuctionMock() {
  const ref = useRef(null);
  const [{ t, extended }, setState] = useState({ t: START, extended: false, loops: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState({ t: EXTEND_TO, extended: true, loops: LOOPS });
      return;
    }
    // 12 → 5, the late bid lands and the clock jumps to 30, shows that for a
    // few seconds, then plays once more and rests there.
    let timer = null;
    const step = () =>
      setState((s) => {
        if (!s.extended && s.t - 1 <= SNIPE_AT) return { ...s, t: EXTEND_TO, extended: true, loops: s.loops + 1 };
        if (s.extended && s.loops >= LOOPS) return s;
        if (s.extended && s.t <= EXTEND_TO - 5) return { ...s, t: START, extended: false };
        return { ...s, t: s.t - 1 };
      });
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !timer) timer = setInterval(step, 1000);
      if (!entry.isIntersecting && timer) {
        clearInterval(timer);
        timer = null;
      }
    });
    io.observe(ref.current);
    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  const bids = extended ? [lateBid, ...baseBids] : baseBids;
  const urgent = !extended && t <= 6;

  return (
    <div className="auc" ref={ref}>
      <div className="auc-top">
        <div>
          <p className="auc-lot">40 stand mixers, boxed</p>
          <p className="auc-sub">Pickup at Hub 3</p>
        </div>
        <div className={`auc-clock${urgent ? " is-urgent" : ""}${extended ? " is-extended" : ""}`}>
          <span className="auc-label">Closes in</span>
          <span className="auc-time">
            {fmt(t)}
          </span>
        </div>
      </div>
      <p className={`auc-note${extended ? " is-on" : ""}`}>
        Bid in the last 5 seconds. Closing moved back by 30 seconds.
      </p>
      <div className="auc-current">
        <span>Current bid</span>
        <b>{money(bids[0].amount)}</b>
      </div>
      <ul className="auc-bids">
        {bids.map((b) => (
          <li key={b.who} className={b === lateBid ? "is-new" : undefined}>
            <span>{b.who}</span>
            <span>{b.ago}</span>
            <span>{money(b.amount)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
