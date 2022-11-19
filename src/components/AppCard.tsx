import React from 'react';

type AppCardProp = {
    backgroundColor: string;
    child: JSX.Element;
}

export function AppCard({backgroundColor, child}: AppCardProp): JSX.Element {
    return <div className="App-Card" style={{backgroundColor:backgroundColor}}>
        {child}
    </div>
}