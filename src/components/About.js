import React, { useEffect } from "react";
import DisplayImage from '../assets/img/Display.jpg'

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>Master's student at New York University.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src={DisplayImage} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Software Developer</h3>
                        <p className="fst-italic">
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>University:</strong>New York University (NYU)</li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+1 347-382-2483</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master's in Computer Engineering</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href="mailto:meet.diwan@nyu.edu">meet.diwan@nyu.edu</a></span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Full time role:</strong> <span>Available from May 2024</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="overview">
                        Before opting for the Master's degree, I worked as a Software Engineer at one of the renowned & earliest Product based companies of India named
                        Subex Limited for one year. I also have six months of internship experience at Crest Data Systems. These experiences have provided me with 
                        the necessary skills to work effectively in a professional environment, collaborate with team members, and develop highly efficient and performant code.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}