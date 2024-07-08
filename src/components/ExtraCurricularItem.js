import React from "react";

export default function ExtraCurricularItem(props) {
    return (
        <div className={`col-lg-4 col-md-6 extracurricular-item ${props.cardType ? props.cardType : ''}`}>
            <div className="extracurricular-wrap" data-text={props.title}>
                <a href={props.link}className="extracurricular-link">
                    <img src={props.image} className="img-fluid" alt="" />
                </a>
            </div>
        </div>
    )
}