import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle'; // or replace with your own custom game/component

export interface KartikleAppProps extends WindowAppProps {}

const KartikleApp: React.FC<KartikleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={600}
            height={860}
            windowBarIcon="windowGameIcon" // you can replace this with a custom icon
            windowTitle="Kartikle = Kartik + Wordle" // your game or app name
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© 2025 Kartik Limbachiya'} // your name & year
        >
            <div className="site-page">
                <Wordle /> {/* replace if needed */}
            </div>
        </Window>
    );
};

export default KartikleApp;
