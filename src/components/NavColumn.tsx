import React from 'react';
import {ProfileCard} from "./ProfileCard";
import {SideNavItem} from "./SideNavItem";
import {ConfigsDev} from "../utils/configs.dev";


export default function NavColumn(): JSX.Element {
    return <div className="Nav-Column">
        <h4>Skillex<span className="NC-Title-Dot">.</span></h4>

        <ProfileCard className="Main-Profile" imageUrl={ConfigsDev.DummyProfileUrl} imageClassName="Profile" />
        <h3 className="User-Name">{ConfigsDev.DummyName}</h3>

        <SideNavItem />

    </div>
}