"use client";

import { useState } from "react";
import AmbientBackground from "@/components/AmbientBackground";
import {
    WelcomeScreen,
    IntroScreen,
    ValuePropScreen,
    GoalsScreen,
    ConnectionScreen,
    LoadingScreen,
    InsightScreen,
    PermissionsScreen,
    DashboardScreen
} from "@/components/screens/Screens";

export default function Home() {
    const [currentScreen, setCurrentScreen] = useState(1);
    const [backgroundReady, setBackgroundReady] = useState(false);

    const nextScreen = () => {
        if (currentScreen < 9) {
            setCurrentScreen(prev => prev + 1);
        }
    };

    // Screen 8 triggers background reset before showing dashboard
    const finishOnboarding = () => {
        setBackgroundReady(false); // Reset pulse to normal
        nextScreen();
    };

    return (
        <>
            <AmbientBackground isReady={backgroundReady} />
            <div id="app-container">
                <WelcomeScreen isActive={currentScreen === 1} onNext={nextScreen} />
                <IntroScreen isActive={currentScreen === 2} onNext={nextScreen} />
                <ValuePropScreen isActive={currentScreen === 3} onNext={nextScreen} />
                <GoalsScreen isActive={currentScreen === 4} onNext={nextScreen} />
                <ConnectionScreen isActive={currentScreen === 5} onNext={nextScreen} />
                <LoadingScreen isActive={currentScreen === 6} onNext={nextScreen} setBackgroundReady={setBackgroundReady} />
                <InsightScreen isActive={currentScreen === 7} onNext={nextScreen} />
                <PermissionsScreen isActive={currentScreen === 8} onNext={finishOnboarding} />
                <DashboardScreen isActive={currentScreen === 9} />
            </div>
        </>
    );
}
