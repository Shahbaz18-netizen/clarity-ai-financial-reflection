"use client";
import { useState } from "react";

export default function ProfileSettings() {
    const [tone, setTone] = useState("supportive");
    const [frequency, setFrequency] = useState("weekly");
    const [quietModeDefault, setQuietModeDefault] = useState(true);

    return (
        <div className="dashboard-container fade-in-slow" style={{ paddingBottom: '6rem' }}>
            
            {/* 1. Identity Header */}
            <header style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{
                    width: '70px', height: '70px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6366F1, #A855F7)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    color: 'white', fontSize: '2rem', fontWeight: 600,
                    boxShadow: '0 10px 20px rgba(99, 102, 241, 0.2)'
                }}>
                    S
                </div>
                <div>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Shahbaz</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Clarity Member since May 2026</p>
                </div>
            </header>

            {/* 2. Connected Data Streams */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1rem' }}>Connected Streams</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <div style={{ padding: '1.2rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ fontSize: '1.5rem' }}>🏦</div>
                            <div>
                                <p style={{ fontWeight: 500, color: 'var(--text-primary)' }}>HDFC Bank</p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Synced 2 hours ago</p>
                            </div>
                        </div>
                        <span style={{ color: '#10B981', fontSize: '0.85rem', fontWeight: 500, background: 'rgba(16, 185, 129, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '100px' }}>Active</span>
                    </div>
                    
                    <div style={{ padding: '1.2rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ fontSize: '1.5rem' }}>💳</div>
                            <div>
                                <p style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Axis Credit Card</p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Synced yesterday</p>
                            </div>
                        </div>
                        <span style={{ color: '#10B981', fontSize: '0.85rem', fontWeight: 500, background: 'rgba(16, 185, 129, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '100px' }}>Active</span>
                    </div>

                    <button style={{ padding: '1rem', background: 'transparent', border: '1px dashed var(--border-color)', borderRadius: '16px', color: 'var(--accent-solid)', fontWeight: 500, marginTop: '0.5rem' }}>
                        + Connect New Stream
                    </button>
                </div>
            </section>

            {/* 3. AI Relationship Center */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1rem' }}>AI Relationship</h2>
                
                <div style={{ background: 'var(--card-bg)', borderRadius: '24px', border: '1px solid var(--border-color)', padding: '1.5rem' }}>
                    
                    {/* Quiet Mode Toggle */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <div>
                            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Default to Quiet Mode</p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Hide raw numbers when opening Clarity.</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" checked={quietModeDefault} onChange={() => setQuietModeDefault(!quietModeDefault)} />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    {/* Tone Selector */}
                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>AI Tone of Voice</p>
                        <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(0,0,0,0.02)', padding: '0.4rem', borderRadius: '100px', border: '1px solid rgba(0,0,0,0.05)' }}>
                            {['supportive', 'direct', 'analytical'].map((t) => (
                                <button 
                                    key={t}
                                    onClick={() => setTone(t)}
                                    style={{ 
                                        flex: 1, padding: '0.6rem 0', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 500, textTransform: 'capitalize',
                                        background: tone === t ? 'var(--accent-solid)' : 'transparent',
                                        color: tone === t ? 'white' : 'var(--text-secondary)',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Frequency Selector */}
                    <div>
                        <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>Insight Frequency</p>
                        <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(0,0,0,0.02)', padding: '0.4rem', borderRadius: '100px', border: '1px solid rgba(0,0,0,0.05)' }}>
                            {['daily', 'weekly', 'anomalies'].map((f) => (
                                <button 
                                    key={f}
                                    onClick={() => setFrequency(f)}
                                    style={{ 
                                        flex: 1, padding: '0.6rem 0', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 500, textTransform: 'capitalize',
                                        background: frequency === f ? 'var(--text-primary)' : 'transparent',
                                        color: frequency === f ? 'var(--bg-color)' : 'var(--text-secondary)',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. Trust & Privacy */}
            <section>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1rem' }}>Privacy Control</h2>
                <div style={{ padding: '1.5rem', background: 'rgba(239, 68, 68, 0.05)', borderRadius: '16px', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                    <p style={{ fontWeight: 500, color: '#EF4444', marginBottom: '0.5rem' }}>Clear My Data</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.2rem', lineHeight: 1.5 }}>
                        Wipe all your synced bank statements, generated insights, and behavioral profiles. We do not keep copies.
                    </p>
                    <button style={{ padding: '0.8rem 1.5rem', background: '#EF4444', color: 'white', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 500 }}>
                        Delete All Data
                    </button>
                </div>
            </section>

        </div>
    );
}
