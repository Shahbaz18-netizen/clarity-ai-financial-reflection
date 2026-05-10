export default function AmbientBackground({ isReady }) {
    return (
        <div className="ambient-background">
            <div className="gradient-blob" style={isReady ? {
                transform: 'translate(-50%, -50%) scale(1.5)',
                opacity: '0.8'
            } : {}}></div>
        </div>
    );
}
