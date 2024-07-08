import React from "react";

export default function Resume() {
    return (
        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                    <h2>Resume <a href="https://drive.google.com/file/d/1B2CTxtBG6HBKqwSH1n2l7aFQ7GPyWOh3/view?usp=sharing" target="_blank"><i className="fa fa-paperclip resume-link"></i></a></h2>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>Meet Nirav Diwan</h4>
                            <p><em>Eagerly waiting to apply my academic knowledge to the real world applciations.</em></p>
                            <ul>
                                <li>629 92nd st, Brookly, New York, NY</li>
                                <li>(347) 382-2483</li>
                                <li>meet.diwan@nyu.edu</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Master of Science in Computer Engineering</h4>
                            <h5>2022 - present</h5>
                            <p><em>New York University</em></p>
                            <p>Courses: Machine Learning, Deep Learning, Introduction to High Performance Machine Learning, Data Science for Business</p>
                            <p>University Employment: Engagement Ambassador, Graduate Teaching Assistant</p>
                        </div>
                        <div className="resume-item">
                            <h4>Bachelor of Engineering in Computer Engineering</h4>
                            <h5>2017 - 2021</h5>
                            <p><em>Gujarat Technological University</em></p>
                            <p>Involvement:</p>
                            <p>Chairperson of IEEE Computer Society</p>
                            <p>Web Development Head of Indian Society for Technical Education </p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Software Engineer</h4>
                            <h5>2021 - 2022</h5>
                            <p><em>Subex Limited, Bangalore, India</em></p>
                            <ul>
                                <li>Constructed the Expression operator, which enables end users to write complex expressions employing auto-suggestion
                                    features to perform operations on data from multiple sources, utilizing Angular for the front end and the Spring framework
                                    for the back-end tasks.</li>
                                <li>Contributed to the design and development of three out of the nine operators within Subex's flagship product,
                                    HyperSense Business Management Studio.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Software Development Intern</h4>
                            <h5>2021</h5>
                            <p><em>Crest Data Systems, Ahmedabad, India</em></p>
                            <ul>
                                <li>Collaborated with the Google LLC team to design, develop, and deploy continuous,
                                    real-time data migration software, enabling the live export of data from the Google Cloud Platform to Elasticsearch.</li>
                                <li>Created insightful dashboards on Kibana, leveraging Elasticsearch data imported from the Google Cloud Platform to monitor
                                    machine status effectively. Implemented alert notifications on the dashboard to ensure swift action in case of adverse machine
                                    conditions.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}