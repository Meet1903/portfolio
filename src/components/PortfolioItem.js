import React from "react";

export default function PortfolioItem(props) {
    return (
        <div className={`col-lg-4 col-md-6 portfolio-item ${props.cardType ? props.cardType : ''}`}>
            <div className="portfolio-wrap" data-text={props.technology}>
                <a href={props.link} target="_blank" className="portfolio-link">
                    <div className="portfolio-box img-fluid">
                        <span className="portfolio-title">{props.title}</span>
                    </div>
                </a>
            </div>
        </div>
    )
}