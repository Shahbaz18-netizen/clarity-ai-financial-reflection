"use client";
import { useState, useEffect } from "react";

export function WelcomeScreen({ isActive, onNext }) {
    return (
        <section className={`screen center-content ${isActive ? "active" : ""}`}>
            <div className="fade-sequence">
                <h1 className="brand-title" style={{ fontSize: '2.5rem' }}>Understand where your money actually goes.</h1>
                <p className="subtitle mt-small">Clarity transforms fragmented financial activity into meaningful behavioral insights.</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '3rem' }}>
                    <button className="primary-btn" onClick={onNext}>Try Demo</button>
                    <button className="primary-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }} onClick={onNext}>Upload Statement</button>
                    <button style={{ color: 'var(--text-secondary)', marginTop: '1rem' }} onClick={onNext}>Explore Sample Insights</button>
                </div>
            </div>
        </section>
    );
}

export function UploadScreen({ isActive, onNext }) {
    const [isDragging, setIsDragging] = useState(false);
    const [uploaded, setUploaded] = useState(false);

    const handleDrag = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        setUploaded(true);
        setTimeout(() => onNext(), 1500);
    };

    return (
        <section className={`screen center-content ${isActive ? "active" : ""}`}>
            <div className="slide-up-sequence" style={{ width: '100%', maxWidth: '400px' }}>
                <h2>Connect your data</h2>
                <p className="subtitle-left" style={{ marginBottom: '1rem' }}>Upload your PDF or CSV bank statements to begin.</p>
                
                <div 
                    className={`drag-drop-zone ${isDragging ? 'dragging' : ''} ${uploaded ? 'uploaded' : ''}`}
                    onDragOver={handleDrag}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => { setUploaded(true); setTimeout(() => onNext(), 1500); }}
                    style={{
                        border: `2px dashed ${isDragging ? 'var(--accent-solid)' : 'rgba(255,255,255,0.2)'}`,
                        borderRadius: '20px',
                        padding: '3rem 2rem',
                        textAlign: 'center',
                        background: isDragging ? 'rgba(99, 102, 241, 0.05)' : 'rgba(255,255,255,0.02)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}
                >
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        {uploaded ? '✅' : '📄'}
                    </div>
                    <h3 style={{ marginBottom: '0.5rem', fontWeight: 500 }}>
                        {uploaded ? 'Statement Uploaded' : 'Drag & Drop statement'}
                    </h3>
                    {!uploaded && <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>or click to browse files</p>}
                </div>

                <div className="privacy-promise mt-large" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="shield-icon" style={{ color: 'var(--accent-solid)' }}>🔒</div>
                    <p style={{ fontSize: '0.85rem' }}>Your financial data is encrypted and never sold.</p>
                </div>
            </div>
        </section>
    );
}

export function LoadingScreen({ isActive, onNext, setBackgroundReady }) {
    const phases = [
        "Analyzing spending patterns...",
        "Detecting recurring subscriptions...",
        "Understanding your financial rhythms...",
        "Ready."
    ];
    const [phaseIndex, setPhaseIndex] = useState(0);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (!isActive) return;

        setTimeout(() => setOpacity(1), 500);

        let currentIdx = 0;
        const interval = setInterval(() => {
            if (currentIdx >= phases.length - 1) {
                clearInterval(interval);
                setBackgroundReady(true);
                setTimeout(() => onNext(), 1500);
                return;
            }

            setOpacity(0);
            setTimeout(() => {
                currentIdx++;
                setPhaseIndex(currentIdx);
                setOpacity(1);
            }, 800);
        }, 2500);

        return () => clearInterval(interval);
    }, [isActive]);

    const isReady = phaseIndex === phases.length - 1;

    return (
        <section className={`screen center-content ${isActive ? "active" : ""}`}>
            <div className="ai-loading-container">
                <p 
                    className="loading-text" 
                    style={{ 
                        opacity, 
                        fontSize: isReady ? "3rem" : "1.5rem", 
                        fontWeight: isReady ? "500" : "300",
                        textAlign: "center"
                    }}
                >
                    {phases[phaseIndex]}
                </p>
            </div>
        </section>
    );
}

export function InsightScreen({ isActive, onNext }) {
    if (!isActive) return <section className="screen" style={{ opacity: 0, pointerEvents: 'none' }}></section>;

    return (
        <section className={`screen active`} style={{ padding: 0, overflow: 'hidden' }}>
            <div className="scroll-container">
                
                {/* Section 1: AI Transition */}
                <div className="scroll-section center-content">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 300, textAlign: 'center' }}>Your financial patterns are ready.</h2>
                    <div className="scroll-hint" style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '0.9rem', color: 'var(--accent-solid)' }}>Scroll to explore</p>
                        <div style={{ marginTop: '0.5rem', color: 'var(--accent-solid)' }}>↓</div>
                    </div>
                </div>

                {/* Section 2: First Insight Reveal */}
                <div className="scroll-section start-top">
                    <h2 style={{ marginBottom: '2rem' }}>What I noticed...</h2>
                    
                    <div className="insight-feed-card fade-sequence-delayed">
                        <div className="insight-header">
                            <span className="insight-title">Time of Day Rhythm</span>
                            <div className="trend-indicator trend-up">↗</div>
                        </div>
                        <p className="insight-desc">Most convenience spending happens after 10PM.</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', fontStyle: 'italic' }}>
                            Could meal prepping on weekends buy back your evening time?
                        </p>
                    </div>

                    <div className="insight-feed-card fade-sequence-delayed" style={{ animationDelay: '0.2s' }}>
                        <div className="insight-header">
                            <span className="insight-title">Weekend Spikes</span>
                            <div className="trend-indicator trend-up">↗</div>
                        </div>
                        <p className="insight-desc">Weekend food delivery spending increased this month.</p>
                    </div>

                    <div className="insight-feed-card fade-sequence-delayed" style={{ animationDelay: '0.4s' }}>
                        <div className="insight-header">
                            <span className="insight-title">Subscription Load</span>
                            <div className="trend-indicator trend-stable">→</div>
                        </div>
                        <p className="insight-desc">You currently have 7 recurring subscriptions.</p>
                    </div>

                    <div className="insight-feed-card fade-sequence-delayed" style={{ animationDelay: '0.6s' }}>
                        <div className="insight-header">
                            <span className="insight-title">Transport</span>
                            <div className="trend-indicator trend-stable">→</div>
                        </div>
                        <p className="insight-desc">Transport expenses became more stable this month.</p>
                    </div>
                </div>

                {/* Section 3: Financial Clarity Snapshot */}
                <div className="scroll-section start-top">
                    <h2 style={{ marginBottom: '1rem' }}>Clarity Snapshot</h2>
                    <p style={{ marginBottom: '1rem' }}>Awareness indicators based on your baseline.</p>
                    
                    <div className="health-grid fade-sequence-delayed">
                        <div className="health-item">
                            <span className="label">Spending Stability</span>
                            <span className="value">Stable ↗</span>
                        </div>
                        <div className="health-item">
                            <span className="label">Subscription Load</span>
                            <span className="value">14% of outflow</span>
                        </div>
                        <div className="health-item">
                            <span className="label">Savings Consistency</span>
                            <span className="value">Regular →</span>
                        </div>
                        <div className="health-item">
                            <span className="label">Financial Volatility</span>
                            <span className="value">Low ↘</span>
                        </div>
                        <div className="health-item" style={{ gridColumn: 'span 2' }}>
                            <span className="label">Impulse Spending Trend</span>
                            <span className="value" style={{ color: 'var(--accent-solid)' }}>Decreasing</span>
                        </div>
                    </div>
                </div>

                {/* Section 4: CTAs */}
                <div className="scroll-section center-content">
                    <h2 style={{ marginBottom: '2rem' }}>Ready to explore?</h2>
                    <button className="primary-btn full-width" onClick={onNext}>Enter Clarity</button>
                    <button className="connection-btn secondary mt-small" onClick={onNext}>
                        <div className="text" style={{ textAlign: 'center', width: '100%' }}>Explore Your Financial Patterns</div>
                    </button>
                </div>

            </div>
        </section>
    );
}
