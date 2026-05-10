"use client";
import { useState, useEffect } from "react";
import HomeDashboard from "./HomeDashboard";
import InsightsFeed from "./InsightsFeed";
import SubscriptionRadar from "./SubscriptionRadar";
import SpendingPulse from "./SpendingPulse";
import ReflectionChat from "./ReflectionChat";
import ProfileSettings from "./ProfileSettings";

export default function DashboardLayout({ isActive }) {
    const [activeTab, setActiveTab] = useState("home");

    useEffect(() => {
        if (isActive) {
            document.body.classList.add("light-theme");
        } else {
            document.body.classList.remove("light-theme");
        }
        
        return () => {
            document.body.classList.remove("light-theme");
        }
    }, [isActive]);

    if (!isActive) return null;

    return (
        <>
            {activeTab === "home" && <HomeDashboard onNavigate={setActiveTab} />}
            {activeTab === "insights" && <InsightsFeed />}
            {activeTab === "pulse" && <SpendingPulse />}
            {activeTab === "radar" && <SubscriptionRadar />}
            {activeTab === "chat" && <ReflectionChat />}
            {activeTab === "profile" && <ProfileSettings />}

            {/* Global Bottom Navigation */}
            <nav className="bottom-nav">
                <div 
                    className={`nav-item ${activeTab === "home" ? "active" : ""}`}
                    onClick={() => setActiveTab("home")}
                >
                    <span className="nav-icon">⌂</span>
                    <span>Home</span>
                </div>
                <div 
                    className={`nav-item ${activeTab === "insights" ? "active" : ""}`}
                    onClick={() => setActiveTab("insights")}
                >
                    <span className="nav-icon">✨</span>
                    <span>Insights</span>
                </div>
                <div 
                    className={`nav-item ${activeTab === "pulse" ? "active" : ""}`}
                    onClick={() => setActiveTab("pulse")}
                >
                    <span className="nav-icon">📊</span>
                    <span>Pulse</span>
                </div>
                <div 
                    className={`nav-item ${activeTab === "chat" ? "active" : ""}`}
                    onClick={() => setActiveTab("chat")}
                >
                    <span className="nav-icon">💬</span>
                    <span>Chat</span>
                </div>
                <div 
                    className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
                    onClick={() => setActiveTab("profile")}
                >
                    <span className="nav-icon">👤</span>
                    <span>Profile</span>
                </div>
            </nav>
        </>
    );
}
