"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const STATS = [
    { value: "~₹4.2k", label: "avg. monthly subscriptions detected" },
    { value: "73%", label: "of overspending happens after 9PM" },
    { value: "2 min", label: "to your first behavioral insight" },
];

const FEATURES = [
    {
        icon: "🌊",
        title: "Spending Pulse",
        desc: "Visualize the rhythm of your spending — the 'when' and 'why' behind your financial activity, without dense graphs.",
        accent: "#818CF8",
    },
    {
        icon: "📡",
        title: "Subscription Radar",
        desc: "Quietly surface recurring commitments and subscription creep without aggressive guilt-trip alerts.",
        accent: "#A78BFA",
    },
    {
        icon: "💬",
        title: "AI Reflection Chat",
        desc: "An emotionally intelligent companion. Ask questions, receive calm, contextual behavioral insights.",
        accent: "#60A5FA",
    },
];

const STEPS = [
    { num: "01", title: "Connect or Upload", desc: "Securely connect your accounts or upload bank statements. Zero setup friction." },
    { num: "02", title: "AI Behavioral Analysis", desc: "Clarity maps your spending patterns, timing, and behavioral triggers — not just categories." },
    { num: "03", title: "Gain Calm Awareness", desc: "Receive narrative insights that feel like a conversation, not a report." },
];

export default function LandingPage() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        document.body.classList.remove("light-theme");
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="lp-root">

            {/* ── Ambient background ── */}
            <div className="lp-ambient">
                <div className="lp-blob lp-blob-1" />
                <div className="lp-blob lp-blob-2" />
                <div className="lp-blob lp-blob-3" />
            </div>

            {/* ── Nav ── */}
            <nav className="lp-nav">
                <span className="lp-nav-logo">Clarity</span>
                <div className="lp-nav-links">
                    <a href="#features">Features</a>
                    <a href="#how">How it works</a>
                    <Link href="/demo" className="lp-nav-cta">Try Demo</Link>
                </div>
            </nav>

            {/* ── Hero ── */}
            <section className="lp-hero">
                <div className="lp-hero-inner">
                    <span className="lp-label">Introducing Clarity · AI-Native Finance</span>
                    <h1 className="lp-hero-h1">
                        Your finances<br />
                        <span className="lp-hero-gradient">tell a story.</span>
                    </h1>
                    <p className="lp-hero-sub">
                        Clarity transforms fragmented spending into behavioral intelligence — an ambient system that prioritizes awareness over anxiety.
                    </p>
                    <div className="lp-hero-actions">
                        <Link href="/demo" className="lp-btn-primary">Try the Demo →</Link>
                        <Link href="/demo" className="lp-btn-ghost">See My Patterns</Link>
                    </div>

                    {/* Floating insight cards */}
                    <div className="lp-float-grid">
                        <div className="lp-float-card" style={{ animationDelay: "0s" }}>
                            <p className="lp-float-label">Pattern Detected</p>
                            <p className="lp-float-text">Convenience spending peaks after 10PM. <span style={{ color: "#818CF8" }}>↗</span></p>
                        </div>
                        <div className="lp-float-card lp-float-card-center" style={{ animationDelay: "1.5s" }}>
                            <p className="lp-float-label">AI Reflection</p>
                            <p className="lp-float-text lp-italic">"Your discretionary spend spikes near salary dates."</p>
                        </div>
                        <div className="lp-float-card" style={{ animationDelay: "3s" }}>
                            <p className="lp-float-label">Subscription Radar</p>
                            <p className="lp-float-text">Active commitments: <span style={{ color: "#818CF8", fontWeight: 600 }}>~₹4.2k/mo</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats Bar ── */}
            <section className="lp-stats">
                {STATS.map((s, i) => (
                    <div key={i} className="lp-stat-item">
                        <span className="lp-stat-val">{s.value}</span>
                        <span className="lp-stat-label">{s.label}</span>
                    </div>
                ))}
            </section>

            {/* ── Problem ── */}
            <section className="lp-section lp-problem">
                <span className="lp-label">The Problem</span>
                <h2 className="lp-section-h2">
                    Most finance apps show transactions.<br />
                    <span style={{ color: "#818CF8" }}>Clarity explains behavior.</span>
                </h2>
                <p className="lp-section-p">
                    Between multiple payment apps, hidden subscriptions, and fragmented spending, feeling overwhelmed is the default. Strict budgeting apps only amplify the anxiety. You don't need another pie chart — you need understanding.
                </p>
            </section>

            {/* ── Features ── */}
            <section className="lp-section" id="features">
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="lp-label">The Experience</span>
                    <h2 className="lp-section-h2" style={{ textAlign: "center" }}>Intelligence over dashboards.</h2>
                </div>
                <div className="lp-features-grid">
                    {FEATURES.map((f, i) => (
                        <div key={i} className="lp-feature-card" style={{ "--accent": f.accent }}>
                            <div className="lp-feature-glow" />
                            <span className="lp-feature-icon">{f.icon}</span>
                            <h3 className="lp-feature-title">{f.title}</h3>
                            <p className="lp-feature-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── How it Works ── */}
            <section className="lp-section lp-how" id="how">
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="lp-label">How It Works</span>
                    <h2 className="lp-section-h2" style={{ textAlign: "center" }}>Three steps to financial clarity.</h2>
                </div>
                <div className="lp-steps">
                    {STEPS.map((s, i) => (
                        <div key={i} className="lp-step">
                            <span className="lp-step-num">{s.num}</span>
                            <div className="lp-step-connector" />
                            <h3 className="lp-step-title">{s.title}</h3>
                            <p className="lp-step-desc">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Testimonial ── */}
            <section className="lp-section">
                <div className="lp-testimonial">
                    <div className="lp-testimonial-quote">"</div>
                    <p className="lp-testimonial-text">
                        "This was the first time I actually <em>understood</em> my spending habits. Clarity made my finances feel understandable instead of stressful. It feels like looking into a calm mirror."
                    </p>
                    <p className="lp-testimonial-author">— Beta User Feedback</p>
                </div>
            </section>

            {/* ── Final CTA ── */}
            <section className="lp-final-cta">
                <div className="lp-final-glow" />
                <h2 className="lp-final-h2">Your money already tells a story.</h2>
                <p className="lp-final-sub">Clarity helps you finally understand it.</p>
                <Link href="/demo" className="lp-btn-primary lp-btn-large">Start Reflecting →</Link>
            </section>

            {/* ── Footer ── */}
            <footer className="lp-footer">
                <span className="lp-nav-logo">Clarity</span>
                <p>An AI-native financial reflection system. Made with calm.</p>
            </footer>

        </div>
    );
}
