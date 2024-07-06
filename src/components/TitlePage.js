import React, { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';

export default function TitlePage() {
    const typedElement = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {
        AOS.init();

        if (typedElement.current) {
            let typed_strings = typedElement.current.getAttribute('data-typed-items');
            typed_strings = typed_strings.split(',');

            typedInstance.current = new Typed(typedElement.current, {
                strings: typed_strings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
            });
        }

        return () => {
            if (typedInstance.current) {
                typedInstance.current.destroy();
            }
        };
    }, []);

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Meet Diwan</h1>
                <p>I'm <span ref={typedElement} className="typed" data-typed-items="a Software Developer, an ML Engineer, a Philosophy Enthusiast, a Tennis Fan, an avid reader"></span></p>
            </div>
        </section>
    )
}