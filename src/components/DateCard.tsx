import React from 'react'

import "../css/DateCard.css"

export interface DateCardProps{
    dayName:string;
    dayNumber: number;
    isActive:boolean;
    onClick: any
}

export function DateCard({dayName,dayNumber,isActive,onClick}:DateCardProps):JSX.Element{
    return <div className={isActive ? "Active-Date-Card":"Unselected-Date-Card"} onClick={onClick}>
        <p className="Day-Name">{dayName}</p>
        <p className="Day-Number">{dayNumber}</p>
        {isActive && <p className="IsActive-Dot">.</p>}
    </div>
}