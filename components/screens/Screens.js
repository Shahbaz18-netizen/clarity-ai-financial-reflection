"use client";
import { useState, useEffect } from "react";

export function WelcomeScreen({ isActive, onNext }) {
    return (
        <section className={`screen center-content ${isActive ? "active" : ""}`}>
            <div className="fade-sequence">
                <h1 className="brand-title">Clarity.</h1>
                <p className="subtitle">Know where your money actually goes.</p>
                <button className="primary-btn mt-large" onClick={onNext}>Begin</button>
            </div>
        </section>
    );
}

export function IntroScreen({ isActive, onNext }) {
    return (
        <section className={`screen bottom-sheet-layout ${isActive ? "active" : ""}`}>
            <div className="card bottom-sheet slide-up-sequence">
                <h2>I am your calm financial companion.</h2>
                <p>I don't set budgets. I don't judge your spending. I just help you see your financial life clearly, without the overwhelm.</p>
                <button className="primary-btn full-width mt-medium" onClick={onNext}>Continue</button>
            </div>
        </section>
    );
}

export function ValuePropScreen({ isActive, onNext }) {
    const [merged, setMerged] = useState(false);

    const handleNext = () => {
        setMerged(true);
        setTimeout(() => onNext(), 1500);
    };

    return (
        <section className={`screen center-content ${isActive ? "active" : ""}`}>
            <div className={`morph-container fade-sequence ${merged ? "merged" : ""}`}>
                <div className="glass-row" id="row-bank">{merged ? "One Clear Picture" : "Bank Accounts"}</div>
                <div className="glass-row" id="row-upi">UPI Apps</div>
                <div className="glass-row" id="row-card">Credit Cards</div>
            </div>
            <div className="text-content mt-large fade-sequence-delayed">
                <h2>Sense from the chaos.</h2>
                <p>Money moves across accounts, apps, and cards. I connect the dots and turn raw numbers into human insights.</p>
                <button className="primary-btn mt-medium" onClick={handleNext}>Next</button>
            </div>
        </section>
    );
}

export function GoalsScreen({ isActive, onNext }) {
    const [selectedGoals, setSelectedGoals] = useState([]);

    const toggleGoal = (goal) => {
        if (selectedGoals.includes(goal)) {
            setSelectedGoals(selectedGoals.filter(g => g !== goal));
        } else {
            setSelectedGoals([...selectedGoals, goal]);
        }
    };

    return (
        <section className={`screen top-layout ${isActive ? "active" : ""}`}>
            <div className="slide-up-sequence">
                <h2>What brought you here?</h2>
                <div className="goals-list mt-medium">
                    {["Where does my money go?", "Month-end anxiety", "Finding hidden subscriptions", "Understanding my habits"].map((goal) => (
                        <button 
                            key={goal}
                            className={`goal-toggle ${selectedGoals.includes(goal) ? 'selected' : ''}`}
                            onClick={() => toggleGoal(goal)}
                        >
                            "{goal}"
                        </button>
                    ))}
                </div>
                <button 
                    className={`primary-btn full-width mt-large ${selectedGoals.length === 0 ? 'disabled' : ''}`} 
                    onClick={onNext}
                >
                    Continue
                </button>
            </div>
        </section>
    );
}

export function ConnectionScreen({ isActive, onNext }) {
    return (
        <section className={`screen top-layout ${isActive ? "active" : ""}`}>
            <div className="slide-up-sequence">
                <h2>Let's connect your accounts.</h2>
                <p className="subtitle-left">Select a method to securely import your data.</p>
                
                <div className="connection-options mt-medium">
                    <button className="connection-btn" onClick={onNext}>
                        <div className="icon">🔗</div>
                        <div className="text">Link via Account Aggregator</div>
                    </button>
                    <button className="connection-btn secondary" onClick={onNext}>
                        <div className="icon">📄</div>
                        <div className="text">Upload PDF Statement</div>
                    </button>
                </div>

                <div className="privacy-promise mt-large">
                    <div className="shield-icon">🔒</div>
                    <p>Your data is encrypted. I cannot move your money. I never share your data.</p>
                </div>
            </div>
        </section>
    );
}

export function LoadingScreen({ isActive, onNext, setBackgroundReady }) {
    const phases = [
        "Categorizing 312 purchases...",
        "Finding recurring subscriptions...",
        "Looking for patterns...",
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
                        fontWeight: isReady ? "500" : "300" 
                    }}
                >
                    {phases[phaseIndex]}
                </p>
            </div>
        </section>
    );
}

export function InsightScreen({ isActive, onNext }) {
    return (
        <section className={`screen center-content ${isActive ? "active" : ""}`}>
            <div className="insight-card pop-in">
                <p className="insight-text">"You spent ₹4,200 on food delivery last month. Interestingly, 60% of that happened after 10 PM on weekends."</p>
                <button className="primary-btn mt-medium" onClick={onNext}>Show me more</button>
            </div>
        </section>
    );
}

export function PermissionsScreen({ isActive, onNext }) {
    return (
        <section className={`screen bg-blur ${isActive ? "active" : ""}`}>
            <div className="card bottom-sheet pop-up">
                <h2>Keep your clarity secure and timely.</h2>
                
                <div className="permission-item mt-medium">
                    <div className="perm-text">
                        <strong>FaceID / App Lock</strong>
                        <p>Keep your financial data private.</p>
                    </div>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>

                <div className="permission-item mt-small">
                    <div className="perm-text">
                        <strong>Smart Notifications</strong>
                        <p>Only weekly summaries and anomalies. No spam.</p>
                    </div>
                    <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                    </label>
                </div>

                <button className="primary-btn full-width mt-large" onClick={onNext}>Enter Clarity</button>
            </div>
        </section>
    );
}

export function DashboardScreen({ isActive }) {
    return (
        <section className={`screen top-layout dashboard ${isActive ? "active" : ""}`}>
            <div className="fade-in-slow">
                <header className="dash-header">
                    <p className="date">Thursday, May 10</p>
                    <h1 className="greeting">Good evening.</h1>
                    <p className="ai-summary">Your spending is stable this week. You have one subscription renewing tomorrow.</p>
                </header>

                <div className="feed mt-medium">
                    <div className="feed-card alert">
                        <div className="icon">🔄</div>
                        <div className="details">
                            <strong>Netflix Premium</strong>
                            <p>Renews tomorrow • ₹649</p>
                        </div>
                    </div>
                    <div className="feed-card">
                        <div className="icon">🍔</div>
                        <div className="details">
                            <strong>Swiggy</strong>
                            <p>Food & Dining • Today, 8:45 PM</p>
                        </div>
                        <div className="amount">-₹340</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
