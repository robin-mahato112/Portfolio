'use client';

import { useMemo, useState } from 'react';

export default function BudgetLab() {
  const [balance, setBalance] = useState(680);
  const [days, setDays] = useState(9);
  const [protectedCost, setProtectedCost] = useState(300);

  const result = useMemo(() => {
    const remaining = Math.max(0, balance - protectedCost);
    const daily = Math.floor(remaining / Math.max(1, days));
    const pressure = protectedCost / Math.max(1, balance);
    const label = pressure >= 0.72 ? 'High' : pressure >= 0.45 ? 'Watch' : 'Manageable';
    return { daily, label, remaining };
  }, [balance, days, protectedCost]);

  return (
    <section id="lab" className="lab-section page-band">
      <header className="section-intro lab-intro">
        <p className="eyebrow">LIVE EXPERIMENT / 01</p>
        <h2>Can a budget tool detect pressure before payday?</h2>
        <span>BUDGETBRAIN AI</span>
      </header>
      <div className="lab-tool">
        <div className="pressure-map" aria-hidden="true">
          <span className="pressure-axis" />
          <span className="pressure-wave wave-one" />
          <span className="pressure-wave wave-two" />
          <span className="pressure-wave wave-three" />
          <span className="map-label label-payday">PAYDAY<strong>DAY {days}</strong></span>
          <span className="map-label label-pressure">PRESSURE<strong>{result.label.toUpperCase()}</strong></span>
        </div>
        <div className="lab-controls">
          <p className="control-label">SIMULATED SCENARIO</p>
          <label>
            <span>Available balance <strong>${balance}</strong></span>
            <input type="range" min="200" max="1800" step="20" value={balance} onChange={(event) => setBalance(Number(event.target.value))} />
          </label>
          <label>
            <span>Protected costs <strong>${protectedCost}</strong></span>
            <input type="range" min="0" max="1200" step="20" value={protectedCost} onChange={(event) => setProtectedCost(Number(event.target.value))} />
          </label>
          <label>
            <span>Days until payday <strong>{days} days</strong></span>
            <input type="range" min="1" max="14" value={days} onChange={(event) => setDays(Number(event.target.value))} />
          </label>
          <output className="lab-result" aria-live="polite">
            <span>SAFE TO SPEND / DAY</span>
            <strong>${result.daily}</strong>
            <small>${result.remaining} remains after protected costs</small>
          </output>
        </div>
      </div>
      <footer className="lab-note">
        <p>This demonstration uses simulated values and simplified logic. It is not financial advice and does not connect to a bank.</p>
        <a href="https://github.com/robin-mahato112/budgetbrain" target="_blank" rel="noopener noreferrer">View engineering notes <span aria-hidden="true">↗</span></a>
      </footer>
    </section>
  );
}
