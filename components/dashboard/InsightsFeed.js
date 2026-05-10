"use client";
import { useState } from "react";

export default function InsightsFeed() {
    const [activeFilter, setActiveFilter] = useState("All Insights");
    const filters = ["All Insights", "Spending Habits", "Subscriptions", "Trends", "Anomalies", "Health"];

    return (
        <div className="dashboard-container fade-in-slow">
            
            {/* Header Section */}
            <header className="dash-header-section" style={{ marginBottom: '1.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: 600 }}>Your Insights</h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Here's what Clarity noticed this week.</p>
                </div>
                <div className="avatar">✨</div>
            </header>

            {/* Filter Categories */}
            <div style={{ marginBottom: '2rem' }}>
                <div className="category-filter-scroll">
                    {filters.map(f => (
                        <button 
                            key={f} 
                            className={`category-pill ${activeFilter === f ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Pattern Detection / Health Signal Block */}
            <section style={{ marginBottom: '2rem' }}>
                <div className="insight-feed-card" style={{ background: 'rgba(99, 102, 241, 0.05)', borderColor: 'rgba(99, 102, 241, 0.2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-solid)', fontWeight: 600 }}>Pattern Detected</span>
                            <h3 style={{ fontSize: '1.1rem', marginTop: '0.2rem', color: 'var(--text-primary)' }}>Late-Night Convenience</h3>
                        </div>
                        <div className="trend-indicator trend-up" style={{ color: 'var(--text-primary)'}}>↗</div>
                    </div>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>You tend to spend more after 10PM, mostly on food delivery.</p>
                </div>
            </section>

            {/* Detailed Insight Cards */}
            <section style={{ marginBottom: '2rem' }}>
                <InsightCard 
                    title="Food delivery spending increased 24%"
                    desc="Your total for food delivery this month is ₹6,800, up from ₹5,200 last month."
                    trend="↗"
                    trendClass="trend-up"
                    aiReasoning="This correlates with the two extra late-night shifts you worked this week. Convenience spending typically rises when your schedule becomes irregular."
                    reflection="Is this convenience worth the trade-off for your savings goal?"
                />

                <InsightCard 
                    title="Subscription costs are creeping up"
                    desc="You have 3 micro-subscriptions that recently increased their pricing."
                    trend="→"
                    trendClass="trend-stable"
                    aiReasoning="Services like 'Cloud Storage Pro' and 'Design App' raised prices by ~10% this year. Recurring micro-spending often goes unnoticed until it aggregates."
                    reflection="Take 5 minutes to cancel unused subscriptions."
                />

                <InsightCard 
                    title="Weekend spending is becoming consistent"
                    desc="Your weekend outflow has stabilized at around ₹3,000 per weekend."
                    trend="↘"
                    trendClass="trend-down"
                    aiReasoning="You've stopped the massive impulse spikes you had two months ago. You are establishing a healthy, predictable weekend rhythm."
                    reflection="Consistency is better than restriction. Keep it up."
                />
            </section>

        </div>
    );
}

function InsightCard({ title, desc, trend, trendClass, aiReasoning, reflection }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="detailed-insight-card" onClick={() => setExpanded(!expanded)}>
            <div className="card-top">
                <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
                <div className={`trend-indicator ${trendClass}`} style={{ flexShrink: 0, marginLeft: '1rem' }}>{trend}</div>
            </div>

            {expanded && (
                <div className="insight-expanded-content">
                    <div className="ai-reasoning-block">
                        <p>{aiReasoning}</p>
                    </div>
                    <div className="reflection-prompt">
                        <p>{reflection}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Dismiss</button>
                        <button style={{ color: 'var(--accent-solid)', fontSize: '0.9rem', fontWeight: 600 }}>Save Insight</button>
                    </div>
                </div>
            )}
            
            {!expanded && (
                <div style={{ marginTop: '1rem', textAlign: 'center', opacity: 0.5 }}>
                    <span style={{ fontSize: '0.8rem' }}>Tap to explore</span>
                </div>
            )}
        </div>
    );
}
