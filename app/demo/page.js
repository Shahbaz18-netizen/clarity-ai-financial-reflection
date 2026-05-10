"use client";

import { useState } from "react";
import AmbientBackground from "@/components/AmbientBackground";
import {
    WelcomeScreen,
    UploadScreen,
    LoadingScreen,
    InsightScreen
} from "@/components/screens/Screens";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function Demo() {
    const [currentScreen, setCurrentScreen] = useState(1);
    const [backgroundReady, setBackgroundReady] = useState(false);

    const nextScreen = () => {
        if (currentScreen < 5) {
            setCurrentScreen(prev => prev + 1);
        }
    };

    // Screen 4 triggers background reset before showing dashboard
    const finishOnboarding = () => {
        setBackgroundReady(false); // Reset pulse to normal
        nextScreen();
    };

    return (
        <>
            <AmbientBackground isReady={backgroundReady} />
            <div id="app-container">
                <WelcomeScreen isActive={currentScreen === 1} onNext={nextScreen} />
                <UploadScreen isActive={currentScreen === 2} onNext={nextScreen} />
                <LoadingScreen isActive={currentScreen === 3} onNext={nextScreen} setBackgroundReady={setBackgroundReady} />
                <InsightScreen isActive={currentScreen === 4} onNext={finishOnboarding} />
                <DashboardLayout isActive={currentScreen === 5} />
            </div>
        </>
    );
}
