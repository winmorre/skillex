import React from 'react'
import "../css/AppButton.css"

type AppButtonProps = {
    text?: string;
    className?: string;

    onClick: () => void;
}


export function AppButton({
                              text,
                              className,
                              onClick
                          }: AppButtonProps): JSX.Element {
    return <button className={className} onClick={onClick}>
        {text}
    </button>
}