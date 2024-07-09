import React from "react";

export default function SkillItem(props) {
    return (
        <div className="progress">
            <span className="skill">{props.title} <i className="val"></i></span>
            <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={props.val} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
}