import React from 'react'
import '../styles/navbar.css';

const PageHeaders = (props: { height: string, header: string, backgroundHeader: string, fontSize: string, backgroundFontSize: string, scaleOne: string, scaleTwo: string }) => {
    return (
        <div className="foreground" style={{ height: props.height }}>
            <div className="background" style={{}}>
                <p style={{ fontSize: props.backgroundFontSize, transform: `scale(${props.scaleOne}, ${props.scaleTwo})` }}>{props.backgroundHeader}</p>
            </div>
            <p style={{ fontSize: props.fontSize }}>{props.header}</p>
        </div>
    )
}

export default PageHeaders;