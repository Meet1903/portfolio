import React from "react";
import AboutImage from '../assets/img/AboutPage.jpeg'

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p></p> {/* May add it later*/}
                </div>
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src={AboutImage} className="img-fluid" alt="" />
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
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>MS in Computer Engineering</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href="mailto:meet.diwan@nyu.edu">meet.diwan@nyu.edu</a></span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Full time role:</strong> <span>Available from May 2024</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="overview">
                        With around 2 years of experience as a Software Engineer, I possess a solid background in programming languages, data structures, algorithms, and software development. 
                        My expertise extends to full-stack web application development, leveraging technologies such as Angular, React, TypeScript, JavaScript, and Java Spring Boot. Notably, 
                        I have contributed to Subex's flagship product, HyperSense Business Management Studio, by creating various modules.
                        <br />
                        <br />
                        I am a recent graduate with a Master's in Computer Engineering from NYU, I have also served as a Graduate Teaching Assistant 
                        for a course on Data Analytics and Visualization in Healthcare. 
                        <br />
                        <br />
                        As I embark on the next phase of my career journey, I am open to opportunities in Software Engineering, Data Analysis, and Machine Learning Engineering roles. 
                        Eager to apply my diverse skill set to tackle new challenges, I am committed to contributing to the success of any organization I join. 
                        <br />
                        <br />
                        Please feel free to reach out if you have any inquiries or would like to connect. I look forward to exploring potential opportunities where I can make meaningful contributions.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}