'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Deck.module.css';

export default function PresentationDeck() {
  const containerRef = useRef(null);

  // Focus container for keyboard navigation
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      containerRef.current.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      containerRef.current.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={styles.deckContainer} 
      ref={containerRef} 
      tabIndex={0} 
      onKeyDown={handleKeyDown}
    >
      {/* Ambient Background */}
      <div className={styles.ambientBg}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>

      <div className={styles.navHint}>Scroll or use Arrow Keys</div>

      {/* 1. Cover */}
      <section className={`${styles.slide} ${styles.slideCenter}`}>
        <div className={styles.slideNumber}>01 / 12</div>
        <h1 className={styles.title}>Clarity</h1>
        <p className={styles.subtitle}>An AI interpretation layer for personal finances.</p>
        <p className={styles.textBlock}>Not a tracker. Not a budgeting tool. A mirror.</p>
      </section>

      {/* 2. Problem */}
      <section className={styles.slide}>
        <div className={styles.slideNumber}>02 / 12</div>
        <h1 className={styles.title}>The Problem</h1>
        <p className={styles.subtitle}>
          "I feel like I'm spending fine, but money disappears and I don't know where."
        </p>
        <p className={styles.textBlock}>
          India's financially active population manages money across 5–8 fragmented touchpoints daily. 
          UPI apps, multiple bank accounts, credit cards, digital wallets operate in isolation.
          <br /><br />
          The result is not overspending — it's <span className={styles.highlight}>financial blindness</span>.
        </p>
      </section>

      {/* 3. User Pain Points */}
      <section className={styles.slide}>
        <div className={styles.slideNumber}>03 / 12</div>
        <h1 className={styles.title}>Core Pain Points</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Fragmented View</h3>
            <p className={styles.cardText}>Money moves across too many apps — no single picture exists.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Month-End Anxiety</h3>
            <p className={styles.cardText}>"Where did my salary go?" The dread of checking bank balances.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Silent Leaks</h3>
            <p className={styles.cardText}>Subscriptions silently accumulate, auto-renew, and are forgotten.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Data Overload</h3>
            <p className={styles.cardText}>Existing apps either overwhelm with data or shame with limits.</p>
          </div>
        </div>
      </section>

      {/* 4. Market Gap */}
      <section className={styles.slide}>
        <div className={styles.slideNumber}>04 / 12</div>
        <h1 className={styles.title}>The Market Gap</h1>
        <p className={styles.textBlock}>
          No product in India is focused purely on <span className={styles.highlight}>financial comprehension</span>.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Bank Apps</h3>
            <p className={styles.cardText}>Show raw transaction lists with no intelligence or context.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Budgeting Apps</h3>
            <p className={styles.cardText}>Focus on control and limits — adding guilt, not insight.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Wallets</h3>
            <p className={styles.cardText}>Only surface their own transactions. No holistic view.</p>
          </div>
        </div>
      </section>

      {/* 5. Product Vision */}
      <section className={`${styles.slide} ${styles.slideCenter}`}>
        <div className={styles.slideNumber}>05 / 12</div>
        <h1 className={styles.title}>The Vision</h1>
        <p className={styles.subtitle}>Clarity without Overwhelm</p>
        <div className={styles.statGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1</span>
            <span className={styles.statLabel}>Narrative over Numbers</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2</span>
            <span className={styles.statLabel}>Awareness before Action</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Non-judgmental by Default</span>
          </div>
        </div>
      </section>

      {/* 6. Solution Overview */}
      <section className={styles.slide}>
        <div className={styles.slideNumber}>06 / 12</div>
        <h1 className={styles.title}>The Solution</h1>
        <p className={styles.subtitle}>An AI that reflects, explains, and helps you see yourself.</p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Account Aggregation</h3>
            <p className={styles.cardText}>Bank, UPI, Cards, Wallets. Connected via AA framework securely.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Monthly Report</h3>
            <p className={styles.cardText}>Natural-language summary of your month. Editorial format.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Subscription Radar</h3>
            <p className={styles.cardText}>Auto-detect and surface every recurring charge.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>AI Reflection Chat</h3>
            <p className={styles.cardText}>Ask questions about your spending in natural language.</p>
          </div>
        </div>
      </section>

      {/* 7. Product Walkthrough (Prototype Showcase) */}
      <section className={styles.slide}>
        <div className={styles.slideNumber}>07 / 12</div>
        <h1 className={styles.title}>Live Prototype</h1>
        <p className={styles.subtitle}>Experience the calm financial companion.</p>
        <div className={styles.prototypeContainer}>
          <div className={styles.iframeWrap}>
            <iframe src="/demo" title="Clarity Prototype"></iframe>
          </div>
        </div>
      </section>

      {/* 8. AI-Native UX Thinking */}
      <section className={styles.slide}>
        <div className={styles.slideNumber}>08 / 12</div>
        <h1 className={styles.title}>AI-Native UX</h1>
        <p className={styles.textBlock}>
          Clarity is not a tracker with an AI layer bolted on. <span className={styles.highlight}>The AI is the product.</span>
        </p>
        <ul className={styles.textBlock} style={{ marginTop: '2rem', marginLeft: '2rem' }}>
          <li style={{ marginBottom: '1rem' }}><strong>Silence is a feature:</strong> The AI speaks only when it has something meaningful to say.</li>
          <li style={{ marginBottom: '1rem' }}><strong>One truth per screen:</strong> No wall of charts. No widget grids.</li>
          <li style={{ marginBottom: '1rem' }}><strong>Behavioral insight:</strong> Tagging transactions as 'impulse' or 'routine' automatically.</li>
          <li style={{ marginBottom: '1rem' }}><strong>Calm persona:</strong> Precise, curious, and never prescriptive.</li>
        </ul>
      </section>

      {/* 9. Key Product Decisions */}
      <section className={styles.slide}>
        <div className={styles.slideNumber}>09 / 12</div>
        <h1 className={styles.title}>Key Decisions</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>No Budgets</h3>
            <p className={styles.cardText}>Budgets add anxiety. We focus purely on clarity and behavioral awareness.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>No Red / Green</h3>
            <p className={styles.cardText}>Colors carry moral weight. We use neutral tonal cues to avoid shaming the user.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Time-Awareness</h3>
            <p className={styles.cardText}>Surfaces reflect *when* things happen (weekends vs weekdays), not just what.</p>
          </div>
        </div>
      </section>

      {/* 10. MVP Scope */}
      <section className={styles.slide}>
        <div className={styles.slideNumber}>10 / 12</div>
        <h1 className={styles.title}>MVP Scope</h1>
        <p className={styles.subtitle}>6-month execution horizon.</p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>In Scope</h3>
            <p className={styles.cardText}>
              • Account Aggregation (AA+SMS)<br />
              • AI Categorization<br />
              • Monthly Clarity Report<br />
              • Subscription Radar<br />
              • AI Reflection Chat
            </p>
          </div>
          <div className={styles.card} style={{ opacity: 0.7 }}>
            <h3 className={styles.cardTitle}>Out of Scope</h3>
            <p className={styles.cardText}>
              • Budgeting or limits<br />
              • Bill payment automation<br />
              • Investment advice<br />
              • Social/Household sharing
            </p>
          </div>
        </div>
      </section>

      {/* 11. Learnings */}
      <section className={styles.slide}>
        <div className={styles.slideNumber}>11 / 12</div>
        <h1 className={styles.title}>Early Learnings</h1>
        <p className={styles.textBlock}>
          From user testing and prototype validation:
        </p>
        <ul className={styles.textBlock} style={{ marginTop: '2rem', marginLeft: '2rem' }}>
          <li style={{ marginBottom: '1.5rem' }}>Users consistently abandon traditional budgeting tools within 2 weeks due to friction and guilt.</li>
          <li style={{ marginBottom: '1.5rem' }}>The "Aha!" moment happens when AI points out a pattern (e.g., "Thursday night Swiggy orders"), not just a total amount.</li>
          <li style={{ marginBottom: '1.5rem' }}>A narrative layout (like an editorial article) drastically reduces cognitive load compared to traditional dashboards.</li>
        </ul>
      </section>

      {/* 12. Final Thank You */}
      <section className={`${styles.slide} ${styles.slideCenter}`}>
        <div className={styles.slideNumber}>12 / 12</div>
        <h1 className={styles.title}>Thank You</h1>
        <p className={styles.subtitle}>Let's bring clarity to financial lives.</p>
        <p className={styles.thankYouText}>Press UP to review</p>
      </section>

    </div>
  );
}
