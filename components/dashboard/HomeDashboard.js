"use client";
import { useState } from "react";

const insights = [
    {
        id: 1,
        label: "Primary Observation",
        title: "Subscription load increased slightly this month.",
        desc: "You added two new streaming services, bringing your total monthly commitment to",
        amount: "~₹4.2k",
        cta: "Review Commitments",
        ctaNav: "radar",
    },
    {
        id: 2,
        label: "Behavioral Shift",
        title: "Convenience spending peaks after 10PM.",
        desc: "Most discretionary spending happens in the last two hours of the day — typically after longer work sessions.",
        amount: null,
        cta: "See Spending Pulse",
        ctaNav: "pulse",
    },
];

export default function HomeDashboard({ onNavigate, isQuietMode, setIsQuietMode }) {
    const [focusedInsight, setFocusedInsight] = useState(0);

    const insight = insights[focusedInsight];

    return (
        <div
            className={`dashboard-container fade-in-slow`}
            style={{ paddingBottom: "7rem" }}
        >

            {/* ── 1. Ambient AI Welcome ── */}
            <header style={{ marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>

                    {/* Orb + greeting */}
                    <div style={{ flex: 1 }}>
                        <div className="ambient-orb" />
                        <p style={{
                            fontSize: "0.78rem", fontWeight: 600,
                            letterSpacing: "0.08em", textTransform: "uppercase",
                            color: "var(--text-secondary)", marginBottom: "0.4rem"
                        }}>
                            Your Clarity
                        </p>
                        <h1 style={{
                            fontSize: "1.45rem", fontWeight: 600,
                            lineHeight: 1.35, letterSpacing: "-0.02em",
                            color: "var(--text-primary)", maxWidth: "260px"
                        }}>
                            Your financial rhythm looks calmer this week.
                        </h1>
                    </div>

                    {/* Quiet Mode */}
                    <button
                        className={`quiet-mode-toggle ${isQuietMode ? "active" : ""}`}
                        onClick={() => setIsQuietMode(!isQuietMode)}
                        style={{ marginTop: "0.25rem", flexShrink: 0 }}
                    >
                        <span style={{ fontSize: "1rem" }}>{isQuietMode ? "🌙" : "✦"}</span>
                        {isQuietMode ? "Quiet" : "Reflect"}
                    </button>
                </div>
            </header>

            {/* ── 1.5. Financial Health Score ── */}
            <section style={{ marginBottom: "2.5rem" }}>
                <div className="health-score-card card-rounded shadow-glow" style={{
                    padding: "2rem",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    backdropFilter: "blur(10px)"
                }}>
                    <div style={{
                        width: "80px", height: "80px",
                        borderRadius: "50%",
                        background: "conic-gradient(var(--accent-solid) 85%, rgba(255,255,255,0.1) 0)",
                        display: "flex", justifyContent: "center", alignItems: "center",
                        position: "relative",
                        flexShrink: 0
                    }}>
                        <div style={{
                            width: "70px", height: "70px",
                            background: "var(--bg-color)",
                            borderRadius: "50%",
                            display: "flex", justifyContent: "center", alignItems: "center",
                            fontSize: "1.5rem", fontWeight: 700,
                            transition: "background-color 1.2s ease" /* support light mode transition */
                        }}>
                            85
                        </div>
                    </div>
                    <div>
                        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.2rem", fontWeight: 600 }}>Financial Health: Stable</h2>
                        <p style={{ fontSize: "0.9rem", margin: 0 }}>Your core financial rhythm is healthy and balanced this week.</p>
                    </div>
                </div>
            </section>

            {/* ── 2. Cinematic Single Focus Insight ── */}
            <section style={{ marginBottom: "2rem" }}>
                <div className="cinematic-insight-card shadow-glow card-rounded">
                    <p style={{
                        color: "var(--accent-solid)", fontSize: "0.78rem", fontWeight: 600,
                        letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.2rem"
                    }}>
                        {insight.label}
                    </p>

                    <h2 className="cinematic-title">{insight.title}</h2>

                    <p className="cinematic-desc">
                        {insight.desc}
                        {insight.amount && (
                            <>
                                {" "}
                                <span
                                    className="obscurable-number"
                                    style={{ fontWeight: 600, color: "var(--text-primary)" }}
                                >
                                    {insight.amount}
                                </span>
                                .
                            </>
                        )}
                    </p>

                    <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                        <button
                            onClick={() => onNavigate(insight.ctaNav)}
                            style={{
                                background: "transparent",
                                border: "1px solid rgba(99,102,241,0.25)",
                                color: "var(--accent-solid)",
                                padding: "0.7rem 1.4rem",
                                borderRadius: "100px",
                                fontWeight: 500,
                                fontSize: "0.9rem",
                                display: "flex", alignItems: "center", gap: "0.4rem",
                                transition: "all 0.2s ease"
                            }}
                        >
                            {insight.cta} →
                        </button>

                        {/* Insight switcher dots */}
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            {insights.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setFocusedInsight(i)}
                                    style={{
                                        width: i === focusedInsight ? "24px" : "8px",
                                        height: "8px",
                                        borderRadius: "100px",
                                        background: i === focusedInsight ? "var(--accent-solid)" : "rgba(99,102,241,0.2)",
                                        transition: "all 0.3s ease"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. Organic Clarity Snapshot ── */}
            <section style={{ marginBottom: "2.5rem" }}>
                <p style={{
                    fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1rem"
                }}>
                    Clarity Snapshot
                </p>
                <div className="ambient-tag-container">
                    <div className="ambient-tag">
                        <div className="dot" style={{ background: "#10B981" }} />
                        Spending Stable
                    </div>
                    <div className="ambient-tag">
                        <div className="dot" style={{ background: "#3B82F6" }} />
                        Savings Consistent
                    </div>
                    <div className="ambient-tag">
                        <div className="dot" style={{ background: "#A855F7" }} />
                        Low Volatility
                    </div>
                    <div className="ambient-tag">
                        <div className="dot" style={{ background: "#F59E0B" }} />
                        Subscriptions Rising
                    </div>
                    <div className="ambient-tag">
                        <div className="dot" style={{ background: "#6366F1" }} />
                        Impulse Decreasing
                    </div>
                </div>
            </section>

            {/* ── 4. AI Narrative Feed ── */}
            <section style={{ marginBottom: "2.5rem" }}>
                <p style={{
                    fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1rem"
                }}>
                    Recent Shifts
                </p>

                <div className="narrative-card">
                    <p>
                        Most discretionary spending happened after stressful workdays.
                        Convenience ordering peaked at{" "}
                        <span className="obscurable-number" style={{ fontWeight: 600 }}>~₹1.2k</span>
                        {" "}last Thursday.
                    </p>
                </div>

                <div className="narrative-card">
                    <p>
                        Transport expenses stabilized compared to previous weeks,
                        holding steady at{" "}
                        <span className="obscurable-number" style={{ fontWeight: 600 }}>~₹850</span>
                        {" "}across the last 14 days.
                    </p>
                </div>

                <div className="narrative-card">
                    <p>
                        Weekend food delivery frequency became more consistent — orders were
                        placed every Saturday and Sunday for the past three weeks.
                    </p>
                </div>
            </section>

            {/* ── 5. Editorial AI Reflection ── */}
            <section>
                <p style={{
                    fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1rem"
                }}>
                    AI Reflection
                </p>
                <div className="editorial-reflection">
                    <p>
                        This month showed stronger financial consistency, though
                        convenience-based micro-spending gradually increased during
                        high-workload periods. Your baseline remains stable.
                    </p>
                </div>
            </section>

        </div>
    );
}
