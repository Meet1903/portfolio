import React from "react";
import ResumeItem from "./ResumeItem";

export default function Resume() {
    return (
        <section id="resume" className="resume">
            <div className="container">
                <div className="section-title">
                    <h2>Resume <a href="https://drive.google.com/file/d/1o7sW-l6PvauLxMGMYMYNETXJiBFJvkRG/view?usp=drive_link" target="_blank"><i className="fa fa-paperclip resume-link"></i></a></h2>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Summary</h3>
                        <ResumeItem
                            isOnlyItem={true}
                            title="Meet Nirav Diwan"
                            description="Eagerly waiting to apply my academic knowledge to the real world applciations."
                            listItem={["629 92nd st, Brooklyn, New York, NY",
                                "(347) 382-2483",
                                "meet.diwan@nyu.edu"]}
                        />

                        <h3 className="resume-title">Education</h3>
                        <ResumeItem
                            isOnlyItem={false}
                            title="Master of Science in Computer Engineering"
                            duration="September 2022 - May 2024"
                            description="New York University"
                            listItem={["Courses: Machine Learning, Deep Learning, Introduction to High Performance Machine Learning, Data Science for Business, Big Data, Data Center and Cloud Computing",
                                "University Employment: Engagement Ambassador, Graduate Teaching Assistant"]}
                        />
                        <ResumeItem
                            isOnlyItem={true}
                            title="Bachelor of Engineering in Computer Engineering"
                            duration="August 2017 - July 2021"
                            description="Gujarat Technological University"
                            listItem={["Secured the top position across all engineering disciplines in the Winter 2017 University examination.",
                                "Chairperson of IEEE Computer Society",
                                "Web Development Head of Indian Society for Technical Education"]}
                        />
                        <h3 className="resume-title">On-Campus Employment</h3>
                        <ResumeItem
                            isOnlyItem={false}
                            title="Graduate Assistant"
                            duration="August 2023 - January 2024"
                            description="Courant Institute of Mathematical Sciences, NYU"
                            listItem={["Assisted in teaching Data Analytics and Visualization in Healthcare course (CSCI-GA.3033-096), focusing on data interpretation and advanced visualization techniques.",
                                "Engineered and maintained educational software applications using Java and React.js, integrating Redux for state management and ensuring smooth user interactions, which supported over 500 students in their learning activities.",
                                "Utilized GitHub for version control to manage source code and collaborate on academic software projects with faculty and student teams, ensuring code integrity and streamlining project workflows, which improved project completion times by 25%."
                            ]}
                        />
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        <ResumeItem
                            isOnlyItem={false}
                            title="Software Engineer"
                            duration="August 2021 - August 2022"
                            description="Subex Limited"
                            listItem={["Engineered robust full-stack applications using Java Spring Boot, with React and JavaScript for front end.",
                                "Redesigned a Data Processing Module with an auto-suggestion feature for complex queries and an inbuilt query tester, reducing user input time by 70% and enabling seamless integration across applications, saving 25% in overall development costs.",
                                "Leveraged Spring JPA and PostgreSQL for efficient data persistence and retrieval, writing over 100 efficient SQL queries, ensuring data integrity, and supporting seamless operations across various application modules.",
                                "Implemented CI/CD pipelines to automate build, test, and deployment processes, increasing SDLC efficiency."
                            ]}
                        />
                         <ResumeItem
                            isOnlyItem={false}
                            title="Software Development Intern"
                            duration="January 2021 - July 2021"
                            description="Crest Data Systems"
                            listItem={["Integrated real-time data migration from Google Cloud Platform to Elasticsearch, facilitating streamlined machine monitoring via Kibana dashboards.",
                                "Ensured data integrity and provided actionable insights for better decision-making by managing Elasticsearch databases for efficient data storage and retrieval, and utilizing Kibana to visualize and monitor application data.",
                                "Developed RESTful APIs for seamless backend communication and Dockerized application for consistent deployment."
                            ]}
                        />
                        <ResumeItem
                            isOnlyItem={true}
                            title="Software Developer Intern"
                            duration="March 2020 - October 2020"
                            description="Ouranos Technologies"
                            listItem={["Improved data processing capabilities by 30% by engineering robust data-driven applications using Python and leveraging NumPy and Pandas for efficient data manipulation and analysis.",
                                "Designed and implemented dynamic and responsive user interfaces with Angular, writing over 10,000 lines of code, which improved user engagement and experience on multiple devices.",
                                "Developed and integrated RESTful API using Flask, enabling seamless communication between front-end and back-end systems, resulting in a 20% improvement in data exchange efficiency."
                            ]}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}