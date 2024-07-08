import React, { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillItem from './SkillItem';

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
                            <SkillItem 
                                title="Programming Languages (C, C++, Java)"
                                val="85"
                            />
                            <SkillItem 
                                title="Programming Language (Python)"
                                val="90"
                            />
                            <SkillItem 
                                title="HTML | CSS"
                                val="80"
                            />
                            <SkillItem 
                                title="Angular | React"
                                val="90"
                            />
                        </div>
                    </Waypoint>

                    <Waypoint onEnter={handleWaypointEnter}>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <SkillItem 
                                title="JavaScript | TypeScript"
                                val="90"
                            />
                            <SkillItem 
                                title="PyTorch | TensorFlow"
                                val="85"
                            />
                            <SkillItem 
                                title="Amazon Web Services"
                                val="75"
                            />
                            <SkillItem 
                                title="SQL | MongoDB"
                                val="80"
                            />
                        </div>
                    </Waypoint>
                </div>
            </div>
        </section>
    );
}
