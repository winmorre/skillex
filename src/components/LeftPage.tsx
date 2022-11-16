import React from 'react'
import NavColumn from "./NavColumn";
import {AppButton} from "./AppButton";
import SpaceWidget from "./SpaceWidget";

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

function LeftPage(): JSX.Element {
    return <div className="Left-Page">
        <NavColumn/>
        <div>
            <SearchWidget />

            <h2>Good morning, </h2>
            <h2>Jane</h2>

            <p>
                Here you can track your activity and find a suitable course to learn a new skills
            </p>

            <SpaceWidget height="10px"/>

            <AppButton onClick={()=>{}} text="See Suggestions" className="Large-Button"/>

            <h4>Categories</h4>


        </div>
    </div>
}

const categories = [];