import React from 'react'

import "../css/ProfileCard.css";

interface ProfileCardProp {
    className: string;
    imageUrl: string;
    imageClassName: string;
}

export function ProfileCard({className, imageUrl, imageClassName}: ProfileCardProp): JSX.Element {
    return <div className={className}>
        <img src={imageUrl} alt="Profile image" className={imageClassName}/>
    </div>
}
