"use client";
import { useState } from "react";

export default function SpendingPulse() {
    return (
        <div className="dashboard-container fade-in-slow">
            
            {/* 1. Header Section */}
            <header className="dash-header-section" style={{ marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: 600 }}>Spending Pulse</h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Your rhythm became more active during weekends and late evenings.</p>
                </div>
                <div className="avatar" style={{ background: 'linear-gradient(135deg, #A855F7 0%, #3B82F6 100%)' }}>🌊</div>
            </header>

            {/* 2. Ambient Rhythm Visualization */}
            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Intensity Heatmap</h2>
                <div className="ambient-pulse-visual">
                    <div className="ambient-blob primary"></div>
                    <div className="ambient-blob secondary"></div>
                    <div className="ambient-blob tertiary"></div>
                    
                    <div className="pulse-overlay-text">
                        <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>High Evening Intensity</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Activity peaks between 8PM and 11PM</p>
                    </div>
                </div>
            </section>

            {/* 4. Emotional Spending Signals */}
            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Detected States</h2>
                <div className="emotional-signal-grid">
                    <div className="emotional-badge stress">
                        <span>⚡</span> Stress Spending (Midweek)
                    </div>
                    <div className="emotional-badge convenience">
                        <span>🍔</span> Convenience (Late Night)
                    </div>
                    <div className="emotional-badge reward">
                        <span>🎉</span> Reward (Post-Salary)
                    </div>
                </div>
            </section>

            {/* 3. Behavioral Pattern Cards */}
            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Timing & Rhythms</h2>
                
                <BehavioralCard 
                    title="Most convenience spending happens after 9PM"
                    desc="You ordered food delivery 4 times this month after 9PM."
                    aiInterpretation="This pattern heavily correlates with days you logged late work hours. When time is scarce, financial convenience replaces cooking."
                    reflection="Could meal prepping on Sundays buy back your evening time?"
                />

                <BehavioralCard 
                    title="Impulse purchases rise near salary dates"
                    desc="Discretionary spending spikes by 40% within 3 days of payday."
                    aiInterpretation="This is a classic 'Reward' rhythm. You subconsciously treat yourself when liquidity is highest, then taper off."
                    reflection="What if you automated your savings transfer on payday morning before the reward cycle begins?"
                />
            </section>

            {/* 6. Financial Health Rhythm */}
            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Rhythm Stability</h2>
                <div className="health-grid">
                    <div className="health-item">
                        <span className="label">Volatility</span>
                        <span className="value" style={{ color: 'var(--text-primary)' }}>Low</span>
                    </div>
                    <div className="health-item">
                        <span className="label">Consistency</span>
                        <span className="value" style={{ color: 'var(--accent-solid)' }}>Improving</span>
                    </div>
                </div>
            </section>

            {/* 7. AI Reflection Section */}
            <section style={{ marginBottom: '1rem' }}>
                <div className="reflection-desk">
                    <p className="reflection-text">
                        "Your spending patterns suggest financial activity becomes more reactive during stressful weeks. Weekend convenience spending has become a recurring behavioral rhythm, but your overall consistency is improving."
                    </p>
                </div>
            </section>

        </div>
    );
}

function BehavioralCard({ title, desc, aiInterpretation, reflection }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="detailed-insight-card" onClick={() => setExpanded(!expanded)}>
            <div className="card-top">
                <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>

            {expanded && (
                <div className="insight-expanded-content">
                    <div className="ai-reasoning-block">
                        <p>{aiInterpretation}</p>
                    </div>
                    <div className="reflection-prompt">
                        <p>{reflection}</p>
                    </div>
                </div>
            )}
            
            {!expanded && (
                <div style={{ marginTop: '1rem', textAlign: 'center', opacity: 0.5 }}>
                    <span style={{ fontSize: '0.8rem' }}>Tap to explore rhythm</span>
                </div>
            )}
        </div>
    );
}
