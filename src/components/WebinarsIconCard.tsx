import React from "react";
import {IconContext} from "react-icons";

interface WebinarsIconCardProps {
    backgroundColor?: string
    icon?: React.ReactNode;
}

export function WebinarsIconCard({backgroundColor, icon}: WebinarsIconCardProps): React.ReactNode {
    return <div className="Webinar-Container" style={{backgroundColor: backgroundColor}}>
        <IconContext.Provider value={{className:"Webinar-Icon"}}>
            <div>
                {icon}
            </div>
        </IconContext.Provider>
    </div>
}