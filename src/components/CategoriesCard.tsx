import React from "react";
import {IconContext} from "react-icons";


export interface CategoriesCardProps {
    icon?: JSX.Element;
    text?: string
    iconColor: string;
    onClick: any
}

function CategoriesCard({icon,text,iconColor,onClick}:CategoriesCardProps): JSX.Element {
    return <div className="Categories-Card" onClick={onClick}>
        <IconContext.Provider value={{ color:iconColor,className:"Categories-Icon"}}>
            <div>
                {icon}
            </div>
        </IconContext.Provider>
        <p className="Category-Card-Text">{text}</p>
    </div>
}

export default CategoriesCard