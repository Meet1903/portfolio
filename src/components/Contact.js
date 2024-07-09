import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Feel free to reach out to me for any internship or full-time opportunity.</p>
                </div>

                <div className="row" data-aos="fade-in">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">

                            <div className="email">
                                <a href="mailto:meet.diwan@nyu.edu">
                                    <i className="bi bi-envelope"></i></a>
                                <h4>Email:</h4>
                                <p>meet.diwan@nyu.edu</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+1 347-382-2483</p>
                            </div>

                            <div className="calendly">
                                <a
                                    href="https://calendly.com/md5517-nyu"
                                    target="_blank"
                                ><i className="bi bi-calendar"></i></a>
                                <h4>Calendly:</h4>
                                <p><a
                                    href="https://calendly.com/md5517-nyu"
                                    target="_blank"
                                >Schedule time with me</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}