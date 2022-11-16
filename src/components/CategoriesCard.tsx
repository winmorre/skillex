import React from "react";
import {IconContext} from "react-icons";


interface CategoriesCardProps {
    icon?:React.ReactNode;
    text?:string
    iconColor:string;
    onClick?: ()=>{}
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