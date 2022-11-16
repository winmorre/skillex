import React from 'react'

import "../css/DateCard.css"

interface DateCardProps{
    dayName:string;
    dayNumber: number;
    className:string;
    isActive:boolean;
    onClick: ()=>{}
}

export function DateCard({dayName,dayNumber,className,isActive,onClick}:DateCardProps):React.ReactNode{
    return <div className={className} onClick={onClick}>
        <p className="Day-Name">{dayName}</p>
        <p className="Day-Number">{dayNumber}</p>
        {isActive && <p className="IsActive-Dot">.</p>}
    </div>
}