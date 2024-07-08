import React from "react";

export default function ResumeItem(props) {
    return (
        <div className={`resume-item ${props.isOnlyItem ? 'pb-0' : ''}`}>
            <h4>{props.title}</h4>
            {props.duration && <h5>{props.duration}</h5>}
            <p><em>{props.description}</em></p>
            <ul>
                {props.listItem.map((item) => (
                    <li>{item}</li>
                ))}
                {/* <li>629 92nd st, Brookly, New York, NY</li>
                <li>(347) 382-2483</li>
                <li>meet.diwan@nyu.edu</li> */}
            </ul>
        </div>
    )
}