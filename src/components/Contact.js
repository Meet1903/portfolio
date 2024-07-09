import React from "react";

export default function Contact() {
    return (
        <section id="contact" class="contact">
            <div class="container">

                <div class="section-title">
                    <h2>Contact</h2>
                    <p>Feel free to reach out to me for any internship or full-time opportunity.</p>
                </div>

                <div class="row" data-aos="fade-in">

                    <div class="col-lg-5 d-flex align-items-stretch">
                        <div class="info">

                            <div class="email">
                                <a href="mailto:meet.diwan@nyu.edu">
                                    <i class="bi bi-envelope"></i></a>
                                <h4>Email:</h4>
                                <p>meet.diwan@nyu.edu</p>
                            </div>

                            <div class="phone">
                                <i class="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+1 347-382-2483</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}