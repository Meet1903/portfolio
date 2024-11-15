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
                                    <li><i className="bi bi-chevron-right"></i> <strong>Full time role:</strong> <span>Open to new opportunities</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="overview">
                            With nearly three years of experience as a Software Engineer, I bring a strong foundation in programming, data structures, algorithms, and software development.
                            My expertise lies in full-stack web application development, leveraging modern technologies such as Angular, React, TypeScript, JavaScript, and Java Spring Boot.
                            <br />
                            <br />
                            I am proficient in Java, Python, SQL, and R, with hands-on experience utilizing frameworks and libraries like TensorFlow, PyTorch, CUDA, NumPy, and Pandas for AI and data-intensive projects.
                            <br />
                            <br />
                            As I advance in my career, I am enthusiastic about exploring opportunities in Software Engineering, Data Analysis, and Machine Learning Engineering.
                            My goal is to apply my diverse skill set to solve challenging problems and contribute meaningfully to the success of forward-thinking organizations.
                            <br />
                            <br />
                            Feel free to reach out with inquiries or collaboration opportunities. I look forward to connecting and contributing to innovative projects.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}