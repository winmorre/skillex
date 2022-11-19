import React from "react";
import {IconContext} from "react-icons";

interface WebinarsIconCardProps {
    backgroundColor?: string
    icon?: JSX.Element;
}

export function WebinarsIconCard({backgroundColor, icon}: WebinarsIconCardProps): JSX.Element {
    return <div className="Webinar-Container" style={{backgroundColor: backgroundColor}}>
        <IconContext.Provider value={{className:"Webinar-Icon"}}>
            <div>
                {icon}
            </div>
        </IconContext.Provider>
    </div>
}