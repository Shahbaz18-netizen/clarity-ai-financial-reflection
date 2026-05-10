"use client";
import { useState } from "react";

export default function HomeDashboard({ onNavigate }) {
    const [isQuietMode, setIsQuietMode] = useState(false);

    return (
        <div className={`dashboard-container fade-in-slow ${isQuietMode ? "quiet-mode" : ""}`} style={{ paddingBottom: '6rem' }}>
            
            {/* 1. Ambient AI Welcome & Quiet Mode Toggle */}
            <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <div className="ambient-orb"></div>
                    <h1 style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', maxWidth: '280px', lineHeight: 1.4 }}>
                        Your financial rhythm looks calmer this week.
                    </h1>
                </div>
                
                <button 
                    className={`quiet-mode-toggle ${isQuietMode ? 'active' : ''}`}
                    onClick={() => setIsQuietMode(!isQuietMode)}
                >
                    <span style={{ fontSize: '1.2rem' }}>{isQuietMode ? '🌙' : '🌤️'}</span>
                    Quiet Mode
                </button>
            </header>

            {/* 2. Cinematic Single Focus Insight */}
            <section>
                <div className="cinematic-insight-card">
                    <p style={{ color: 'var(--accent-solid)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                        Primary Observation
                    </p>
                    <h2 className="cinematic-title">Subscription load increased slightly this month.</h2>
                    <p className="cinematic-desc">
                        You added two new streaming services, bringing your total monthly commitment to <span className="obscurable-number" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>₹4,250</span>.
                    </p>
                    
                    <button 
                        onClick={() => onNavigate("radar")}
                        style={{ marginTop: '2rem', background: 'transparent', border: '1px solid rgba(99, 102, 241, 0.3)', color: 'var(--accent-solid)', padding: '0.8rem 1.5rem', borderRadius: '100px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        Review Commitments <span style={{ fontSize: '1.2rem' }}>→</span>
                    </button>
                </div>
            </section>

            {/* 3. Organic Clarity Snapshot */}
            <section style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Clarity Snapshot</h3>
                <div className="ambient-tag-container">
                    <div className="ambient-tag">
                        <div className="dot" style={{ background: '#10B981' }}></div>
                        Spending Stability
                    </div>
                    <div className="ambient-tag">
                        <div className="dot" style={{ background: '#3B82F6' }}></div>
                        Savings Consistency
                    </div>
                    <div className="ambient-tag">
                        <div className="dot" style={{ background: '#A855F7' }}></div>
                        Low Volatility
                    </div>
                    <div className="ambient-tag">
                        <div className="dot" style={{ background: '#F59E0B' }}></div>
                        Rising Subscriptions
                    </div>
                </div>
            </section>

            {/* 4. AI Narrative Feed */}
            <section style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Recent Shifts</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>
                            Most discretionary spending happened after stressful workdays. Convenience ordering peaked at <span className="obscurable-number" style={{ fontWeight: 500 }}>₹1,200</span> last Thursday.
                        </p>
                    </div>
                    
                    <div style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>
                            Transport expenses stabilized compared to previous weeks, holding steady at <span className="obscurable-number" style={{ fontWeight: 500 }}>₹850</span> across the last 14 days.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Editorial Reflection Card */}
            <section style={{ marginBottom: '2rem' }}>
                <div className="reflection-desk" style={{ borderTop: '1px solid rgba(99, 102, 241, 0.2)', paddingTop: '2rem', paddingBottom: '2rem' }}>
                    <p className="reflection-text" style={{ fontSize: '1.3rem', color: 'var(--text-primary)', opacity: isQuietMode ? 1 : 0.8, transition: 'opacity 0.3s ease' }}>
                        "This month showed stronger financial consistency, though convenience-based micro-spending gradually increased during high-workload periods. Your baseline is stable."
                    </p>
                </div>
            </section>

        </div>
    );
}
