import React, { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
    useEffect(() => {
        AOS.init();
    }, []);

    const handleWaypointEnter = () => {
        const progressBars = document.querySelectorAll('.progress .progress-bar');
        progressBars.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
    };

    return (
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                </div>

                <div className="row skills-content">
                    <Waypoint onEnter={handleWaypointEnter}>
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="progress">
                                <span className="skill">Programming Languages (C, C++, Java) <i className="val"></i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Programming Language (Python) <i className="val"></i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">HTML-CSS-JavaScript <i className="val"></i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Angular <i className="val"></i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </Waypoint>

                    <Waypoint onEnter={handleWaypointEnter}>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="progress">
                                <span className="skill">PyTorch <i className="val"></i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Tensorflow <i className="val"></i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">AWS <i className="val"></i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">SQL-MongoDB <i className="val"></i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </Waypoint>
                </div>
            </div>
        </section>
    );
}
