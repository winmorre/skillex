import React, {useState} from 'react'
import {IconContext, IconType} from "react-icons";
import {FaBars, FaBookOpen, FaHome, FaTasks} from "react-icons/all";

interface SideNavItemProps {
    text: string;
    icon: IconType;
    isActive: boolean;
    onClick: () => {};
}

export function SideNavItem(): JSX.Element {
    const [type, setType] = useState(Type.Dash)
    const onClick = (item:number)=>{
        setType(item)
    }

    return <div>
        {
            navItems.map(item => <div className={type===item.type ? "Active-Side-Nav-Item" : "Side-Nav-Item"}
                                      onClick={()=>onClick(item.type)}>
                <IconContext.Provider value={{className: type===item.type ? "Active-Side-Nav-Icon" : "Side-Nav-Icon"}}>
                    <div>
                        <FaHome/> <span className="Side-Nav-Text">{item.title}</span>
                    </div>
                </IconContext.Provider>
            </div>)
        }
    </div>
}

enum Type {
    Dash = 0,
    Task = 1,
    Stat,
    Courses
}

const navItems = [
    {title: "Dashboard", icon: <FaHome/>, type: Type.Dash},
    {title: "My Tasks", icon: <FaTasks/>, type: Type.Task},
    {title: "Statistics", icon: <FaBars/>, type: Type.Stat},
    {title: "Courses", icon: <FaBookOpen/>, type: Type.Courses},
]