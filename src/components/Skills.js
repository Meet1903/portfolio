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

    const skills = [
        { title: "Programming Languages (C, C++, Java)", val: 85 },
        { title: "Programming Language (Python)", val: 90 },
        { title: "HTML | CSS", val: 80 },
        { title: "Angular | React | Next", val: 90 },
        { title: "JavaScript | TypeScript", val: 90 },
        { title: "PyTorch | TensorFlow", val: 85 },
        { title: "Amazon Web Services", val: 75 },
        { title: "postgreSQL | MongoDB", val: 95 }
    ];

    return (
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                </div>

                <div className="row skills-content">
                    <Waypoint onEnter={handleWaypointEnter}>
                        <div className="col-lg-6" data-aos="fade-up">
                            {skills.slice(0, 4).map((skill) => (
                                <SkillItem title={skill.title} val={skill.val} />
                            )
                            )}
                        </div>
                    </Waypoint>

                    <Waypoint onEnter={handleWaypointEnter}>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            {skills.slice(4,).map((skill) => (
                                <SkillItem title={skill.title} val={skill.val} />
                            )
                            )}
                        </div>
                    </Waypoint>
                </div>
            </div>
        </section>
    );
}
