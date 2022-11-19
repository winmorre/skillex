import React from 'react'
import NavColumn from "./NavColumn";
import {AppButton} from "./AppButton";
import SpaceWidget from "./SpaceWidget";
import CategoriesCard, {CategoriesCardProps} from "./CategoriesCard";
import {FaBolt, FaEllipsisH, FaMusic, FaPencilRuler, FaShirtsinbulk, IoFastFood} from "react-icons/all";
import {IconContext} from "react-icons";
import {DynamicChart} from "./DynamicChart";

function SearchWidget() {
    return <form role="search" id="form" className="Search-Form">
        <input type="search" id="query" name="q" placeholder="Search..." aria-label="Search for Task"/>
        <button>
            <svg viewBox="0 0 1024 1024">
                <path className="Search-Path"
                      d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.
                      706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 1
                      77.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455
                      218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364
                       0-218.455 97.091-218.455 218.455z"></path>
            </svg>
        </button>
    </form>
}


function ChartFigures({figure=0,text=""}):JSX.Element {
    return <div className="Dynamic-Summary">
        <h4 className="Dynamic-Summary-Figure">{figure}</h4>
        <p className="Dynamic-Summary-Text">{text}</p>
    </div>
}

export function LeftPage(): JSX.Element {
    return <div className="Left-Page">
        <NavColumn/>
        <div>
            <SearchWidget/>

            <h2>Good morning, </h2>
            <h2>Jane</h2>

            <p>
                Here you can track your activity and find a suitable course to learn a new skills
            </p>

            <SpaceWidget height="10px"/>

            <AppButton onClick={() => {
            }} text="See Suggestions" className="Large-Button"/>

            <div className="Left-Page-Categories-Title">
                <h4 className="Left-Page-Categories-Title-Text">Categories</h4>
                <IconContext.Provider value={{ color:"#605858",className:"Left-Page-Categories-Title-Icon"}}>
                    <div>
                        <FaEllipsisH />
                    </div>
                </IconContext.Provider>

            </div>

            <div className="Left-Page-Categories-Items">
                {
                    categories.map(item => <CategoriesCard icon={item.icon} iconColor={item.iconColor} text={item.text}
                                                           onClick={item.onClick}/>)
                }
            </div>

            <SpaceWidget height="10px"/>

            <div className="Dynamic">
                <h4 className="Dynamic-Title-Text">Dynamic</h4>

                <div className="Dynamic-Chart">
                    <DynamicChart />
                    <div className="Dynamic-Chart-Summary">
                        {
                            chartSummary.map(item=> <ChartFigures figure={item.figure} text={item.text}/>)
                        }
                    </div>
                </div>
            </div>


        </div>
    </div>
}

const categories: CategoriesCardProps[] = [
    {
        icon: <FaPencilRuler/>, iconColor: "#efa65c", text: "Writing", onClick: () => {
        }
    },
    {
        icon: <FaShirtsinbulk/>, iconColor: "#efa65c", text: "Lifestyle", onClick: () => {
        }
    },
    {
        icon: <IoFastFood/>, iconColor: "#efa65c", text: "Food", onClick: () => {
        }
    },
    {
        icon: <FaMusic/>, iconColor: "#efa65c", text: "Music", onClick: () => {
        }
    },
    {
        icon: <FaBolt/>, iconColor: "#efa65c", text: "Writing", onClick: () => {
        }
    },
];

const chartSummary=[
    {figure:78,text:"Your points"},
    {figure:52,text:"Average"},
]