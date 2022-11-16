import React from 'react';

export default function SpaceWidget({width = "0px", height = "0px"}):JSX.Element{
    return <div style={{width: width,height:height}}></div>
}