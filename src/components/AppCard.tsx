import React from 'react';

type AppCardProp = {
    backgroundColor: string;
    text?: string;
    textSize?: string;
    textColor?: string;
    children: React.ReactNode;
}

export function AppCard({backgroundColor, text, textSize, textColor, children}: AppCardProp): React.ReactNode {
    return <div></div>
}