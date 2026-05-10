"use client";
import { useState } from "react";

export default function SubscriptionRadar() {
    return (
        <div className="dashboard-container fade-in-slow">
            
            {/* 1. Header Section */}
            <header className="dash-header-section" style={{ marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: 600 }}>Subscription Radar</h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Clarity detected 9 recurring commitments.</p>
                </div>
                <div className="avatar" style={{ background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)' }}>📡</div>
            </header>

            {/* Total Impact & 4. Timeline Visualization */}
            <section style={{ marginBottom: '2.5rem' }}>
                <div className="light-insight-card" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Total Monthly Spend</p>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>₹4,250</h2>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>Yearly Projected</p>
                            <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>₹51,000</span>
                        </div>
                    </div>
                    
                    {/* CSS Timeline */}
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2rem', marginBottom: '0.5rem' }}>6-Month Accumulation Trend</p>
                    <div className="timeline-visual">
                        <div className="timeline-segment"></div>
                        <div className="timeline-segment"></div>
                        <div className="timeline-segment"></div>
                        <div className="timeline-segment"></div>
                        <div className="timeline-segment"></div>
                    </div>
                </div>
            </section>

            {/* 5. Financial Health Impact */}
            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Impact Signals</h2>
                <div className="health-grid">
                    <div className="health-item">
                        <span className="label">Subscription Burden</span>
                        <span className="value" style={{ color: 'var(--text-primary)' }}>14% of outflow</span>
                    </div>
                    <div className="health-item">
                        <span className="label">Creep Trend</span>
                        <span className="value" style={{ color: 'var(--accent-solid)' }}>+3% / month</span>
                    </div>
                </div>
            </section>

            {/* 3. AI Behavioral Insight */}
            <div className="ai-reasoning-block" style={{ marginBottom: '2rem' }}>
                <p>"Subscription costs increased 34% over 6 months. You have 3 overlapping streaming services that total ₹1,800/mo."</p>
            </div>

            {/* 2 & 6. Subscription Overview Cards */}
            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Active Commitments</h2>

                <SubscriptionCard 
                    icon="🎬"
                    name="Netflix Premium"
                    category="Entertainment"
                    cost="₹649"
                    frequency="Monthly"
                    status="Essential"
                    statusClass="essential"
                    paymentHistory="Paid on 4th of every month. Active since 2021."
                />

                <SubscriptionCard 
                    icon="🏋️"
                    name="FitClub Gym"
                    category="Health"
                    cost="₹2,400"
                    frequency="Monthly"
                    status="Rarely used"
                    statusClass="rare"
                    paymentHistory="Paid on 15th of every month. No gym visits detected in last 32 days."
                />

                <SubscriptionCard 
                    icon="☁️"
                    name="Cloud Storage Pro"
                    category="Productivity"
                    cost="₹199"
                    frequency="Monthly"
                    status="Possibly forgotten"
                    statusClass="forgotten"
                    paymentHistory="Auto-renewed for the last 14 months. Rarely matching high data usage."
                />
            </section>

            {/* 7. AI Reflection Section */}
            <section style={{ marginBottom: '1rem' }}>
                <div className="reflection-desk">
                    <p className="reflection-text">
                        "Several low-cost subscriptions combine into a significant monthly total. It's easy for small conveniences to become silent commitments."
                    </p>
                </div>
            </section>

        </div>
    );
}

function SubscriptionCard({ icon, name, category, cost, frequency, status, statusClass, paymentHistory }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="subscription-card" onClick={() => setExpanded(!expanded)}>
            <div className="sub-header">
                <div className="sub-info">
                    <div className="sub-icon">{icon}</div>
                    <div>
                        <div className="sub-name">{name}</div>
                        <div className="sub-meta">{category} • {frequency}</div>
                        <div className={`status-badge ${statusClass}`}>{status}</div>
                    </div>
                </div>
                <div className="sub-cost">
                    <div className="sub-amount">{cost}</div>
                </div>
            </div>

            {expanded && (
                <div className="sub-expanded">
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                        <strong>Usage Note:</strong> {paymentHistory}
                    </p>
                    
                    <div className="sub-actions">
                        <button className="sub-action-btn">Keep</button>
                        <button className="sub-action-btn">Review Later</button>
                    </div>
                </div>
            )}
        </div>
    );
}
