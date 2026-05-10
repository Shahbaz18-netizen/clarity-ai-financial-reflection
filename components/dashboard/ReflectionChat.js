"use client";
import { useState, useRef, useEffect } from "react";

export default function ReflectionChat() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const feedRef = useRef(null);

    const suggestedPrompts = [
        "Where does most of my money go?",
        "What habits increased this month?",
        "Do I spend differently on weekends?",
        "What subscriptions am I underusing?"
    ];

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (feedRef.current) {
            feedRef.current.scrollTop = feedRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = (text) => {
        const query = text || inputText;
        if (!query.trim()) return;

        // Add user message
        const newMessages = [...messages, { role: "user", content: query }];
        setMessages(newMessages);
        setInputText("");
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            let aiResponse = { role: "ai", content: "" };

            if (query.toLowerCase().includes("weekend") || query.toLowerCase().includes("habit")) {
                aiResponse.content = "I noticed your weekend spending has become a highly consistent rhythm. Specifically, your food delivery and convenience spending peaks sharply after 9PM on Fridays and Saturdays.";
                aiResponse.embeddedCard = {
                    title: "Weekend Convenience Peak",
                    desc: "You ordered food delivery 4 times this month after 9PM on weekends.",
                    aiInterpretation: "When time is scarce at the end of the workweek, financial convenience replaces cooking.",
                    reflection: "Could meal prepping on Sundays buy back your Friday evening time?"
                };
            } else if (query.toLowerCase().includes("subscription")) {
                aiResponse.content = "You have 9 active subscriptions. I've noticed a slow 'creep' in costs over the last 6 months, primarily driven by overlapping entertainment services. For example, FitClub Gym hasn't been utilized recently.";
            } else {
                aiResponse.content = "Looking at your recent rhythms, your discretionary spending tends to spike near salary dates, which is a classic 'Reward' pattern. Let me know if you'd like to explore how to smooth out this volatility.";
            }

            setMessages([...newMessages, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="chat-layout fade-in-slow">
            
            {/* Header */}
            <header className="chat-header">
                <div className="avatar" style={{ width: '40px', height: '40px', fontSize: '1rem', background: 'linear-gradient(135deg, #A855F7 0%, #3B82F6 100%)' }}>✨</div>
                <div>
                    <h1 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Clarity AI</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Always listening, never judging.</p>
                </div>
            </header>

            {/* Message Feed */}
            <div className="chat-message-feed" ref={feedRef}>
                
                {messages.length === 0 && (
                    <div style={{ marginTop: '2rem' }}>
                        <div className="chat-bubble ai">
                            <p>Good evening, Shahbaz.</p>
                            <p>I've analyzed your recent spending rhythms and recurring commitments. What would you like to understand about your financial behavior today?</p>
                        </div>
                        
                        <div className="suggested-prompts">
                            {suggestedPrompts.map(prompt => (
                                <button key={prompt} className="prompt-pill" onClick={() => handleSend(prompt)}>
                                    {prompt}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {messages.map((msg, idx) => (
                    <div key={idx} className={`chat-bubble ${msg.role}`} style={{ display: 'flex', flexDirection: 'column' }}>
                        {msg.role === "ai" ? (
                            <>
                                <p>{msg.content}</p>
                                {msg.embeddedCard && (
                                    <div className="embedded-card-wrapper">
                                        <EmbeddedInsightCard card={msg.embeddedCard} />
                                    </div>
                                )}
                            </>
                        ) : (
                            msg.content
                        )}
                    </div>
                ))}

                {isTyping && (
                    <div className="chat-bubble ai">
                        <div className="typing-indicator">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Fixed Input Area */}
            <div className="chat-input-area">
                <div className="chat-input-wrapper">
                    <button className="chat-btn mic">🎙️</button>
                    <input 
                        type="text" 
                        placeholder="Ask about your spending patterns..." 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button className="chat-btn send" onClick={() => handleSend()}>↑</button>
                </div>
            </div>

        </div>
    );
}

function EmbeddedInsightCard({ card }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="detailed-insight-card" onClick={() => setExpanded(!expanded)} style={{ margin: 0, border: '1px solid var(--border-color)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
            <div className="card-top">
                <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{card.title}</h3>
                    <p style={{ fontSize: '0.85rem' }}>{card.desc}</p>
                </div>
            </div>

            {expanded && (
                <div className="insight-expanded-content" style={{ marginTop: '1rem', paddingTop: '1rem' }}>
                    <div className="ai-reasoning-block" style={{ padding: '0.8rem', marginBottom: '1rem' }}>
                        <p style={{ fontSize: '0.85rem' }}>{card.aiInterpretation}</p>
                    </div>
                    <div className="reflection-prompt" style={{ padding: '0.8rem', marginBottom: 0 }}>
                        <p style={{ fontSize: '0.85rem' }}>{card.reflection}</p>
                    </div>
                </div>
            )}
            
            {!expanded && (
                <div style={{ marginTop: '0.8rem', textAlign: 'center', opacity: 0.5 }}>
                    <span style={{ fontSize: '0.75rem' }}>Tap to explore pattern</span>
                </div>
            )}
        </div>
    );
}
