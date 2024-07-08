import React from "react";

export default function SkillItem(props) {
    return (
        <div class="progress">
            <span class="skill">{props.title} <i class="val"></i></span>
            <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow={props.val} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
}