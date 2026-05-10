"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function LandingPage() {
    
    // Ensure dark theme for landing page
    useEffect(() => {
        document.body.classList.remove("light-theme");
    }, []);

    return (
        <div className="landing-page">
            
            {/* 1. Hero Section */}
            <section className="landing-hero fade-in-slow">
                <div className="hero-bg-glow"></div>
                <div className="hero-content">
                    <span className="section-label" style={{ marginBottom: '2rem' }}>Introducing Clarity</span>
                    <h1 className="hero-headline">Your finances tell a story.<br/>Clarity helps you understand it.</h1>
                    <p className="hero-subheadline">
                        Transform fragmented financial activity into behavioral insights. Clarity is an AI-native reflection system that prioritizes awareness over control.
                    </p>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link href="/demo" className="landing-cta-primary">
                            Try Demo
                        </Link>
                        <Link href="/demo" className="landing-cta-secondary">
                            See My Financial Patterns
                        </Link>
                    </div>
                </div>

                <div className="floating-cards-container">
                    <div className="floating-card-mock" style={{ top: '20%', left: '10%', animationDelay: '0s' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>Pattern Detected</p>
                        <p style={{ color: 'white', fontWeight: 500 }}>Most convenience spending happens after 10PM. ↗</p>
                    </div>
                    <div className="floating-card-mock" style={{ top: '50%', right: '5%', animationDelay: '2s' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>Subscription Radar</p>
                        <p style={{ color: 'white', fontWeight: 500 }}>Your active commitments total ₹4,250/mo.</p>
                    </div>
                    <div className="floating-card-mock" style={{ bottom: '10%', left: '30%', animationDelay: '4s' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>AI Reflection</p>
                        <p style={{ color: 'white', fontStyle: 'italic' }}>"Your discretionary spending spikes near salary dates."</p>
                    </div>
                </div>
            </section>

            {/* 2. Problem Section */}
            <section className="landing-section">
                <div style={{ maxWidth: '800px' }}>
                    <span className="section-label">The Problem</span>
                    <h2 className="section-title">Most finance apps show transactions. Clarity explains behavior.</h2>
                    <p className="section-desc">
                        Between multiple payment apps, hidden subscriptions, and fragmented spending, it's easy to feel overwhelmed. Spreadsheets and strict budgeting apps only induce anxiety. You don't need another pie chart—you need understanding.
                    </p>
                </div>
            </section>

            {/* 4. Product Experience Section */}
            <section className="landing-section">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-label">The Experience</span>
                    <h2 className="section-title">Intelligence over dashboards.</h2>
                </div>
                
                <div className="grid-3-col">
                    <div className="feature-box">
                        <div className="feature-icon">🌊</div>
                        <h3>Spending Pulse</h3>
                        <p>Visualize the rhythm of your spending. Understand the "when" and "why" behind your financial activity without looking at dense graphs.</p>
                    </div>
                    <div className="feature-box">
                        <div className="feature-icon">📡</div>
                        <h3>Subscription Radar</h3>
                        <p>Quietly uncover recurring commitments and subscription creep without the aggressive "cancel now" guilt trips.</p>
                    </div>
                    <div className="feature-box">
                        <div className="feature-icon">💬</div>
                        <h3>AI Reflection Chat</h3>
                        <p>An emotionally intelligent AI companion. Ask questions about your habits and receive deep, contextual behavioral insights.</p>
                    </div>
                </div>
            </section>

            {/* 5. How It Works */}
            <section className="landing-section" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">How Clarity Works</h2>
                </div>
                
                <div className="grid-3-col" style={{ textAlign: 'center' }}>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: 700, color: '#333', marginBottom: '1rem' }}>1</div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Upload Data</h3>
                        <p style={{ color: '#9CA3AF' }}>Securely connect your fragmented accounts or upload statements.</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: 700, color: '#333', marginBottom: '1rem' }}>2</div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>AI Analysis</h3>
                        <p style={{ color: '#9CA3AF' }}>Clarity analyzes your spending behavior, timing, and recurring patterns.</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: 700, color: '#333', marginBottom: '1rem' }}>3</div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Gain Awareness</h3>
                        <p style={{ color: '#9CA3AF' }}>Receive calm, actionable behavioral insights instead of stressful budgets.</p>
                    </div>
                </div>
            </section>

            {/* 6 & 7. Philosophy & Testimonials */}
            <section className="landing-section">
                <div className="testimonial-box">
                    <p className="testimonial-text">
                        "This was the first time I actually understood my spending habits. Clarity made my finances feel understandable instead of stressful. It feels like looking into a calm mirror."
                    </p>
                    <p className="testimonial-author">— Beta User Feedback</p>
                </div>
            </section>

            {/* 8. Final CTA Section */}
            <section className="landing-section" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
                <h2 className="section-title" style={{ fontSize: '3.5rem' }}>Your money already tells a story.</h2>
                <p className="section-desc" style={{ margin: '0 auto 3rem auto', fontSize: '1.5rem' }}>Clarity helps you finally understand it.</p>
                
                <Link href="/demo" className="landing-cta-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
                    Try the Demo
                </Link>
            </section>

        </div>
    );
}
