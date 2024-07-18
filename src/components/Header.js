import React, { useEffect, useState } from 'react';
import DisplayImage from '../assets/img/Display.jpg';

export default function Header() {
    const [clickCount, setClickCount] = useState(0)
    const handleClick = () => {
        setClickCount(prevCount => prevCount + 1);

        if (clickCount + 1 === 3) {
            // Need to implement a secret page here.
            window.open('https://yqs5cllniez.typeform.com/to/PF3q7YDs', '_blank')
            setClickCount(0)
        }
    };
    useEffect(() => {
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)];
            } else {
                return document.querySelector(el);
            }
        };

        const scrollto = (el) => {
            let elementPos = select(el).offsetTop;
            window.scrollTo({
                top: elementPos,
                behavior: 'smooth',
            });
        };

        const onScrollToClick = (e) => {
            if (select(e.currentTarget.hash)) {
                e.preventDefault();

                let body = select('body');
                if (body.classList.contains('mobile-nav-active')) {
                    body.classList.remove('mobile-nav-active');
                    let navbarToggle = select('.mobile-nav-toggle');
                    navbarToggle.classList.toggle('bi-list');
                    navbarToggle.classList.toggle('bi-x');
                }

                let navLinks = select('#navbar .nav-link', true);
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                });

                e.currentTarget.classList.add('active');
                scrollto(e.currentTarget.hash);
            }
        };

        const navbarlinks = select('#navbar .scrollto', true);
        const navbarlinksActive = () => {
            let position = window.scrollY + 200;
            navbarlinks.forEach((navbarlink) => {
                if (!navbarlink.hash) return;
                let section = select(navbarlink.hash);
                if (!section) return;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active');
                } else {
                    navbarlink.classList.remove('active');
                }
            });
        };

        window.addEventListener('load', navbarlinksActive);
        document.addEventListener('scroll', navbarlinksActive);

        navbarlinks.forEach((link) => {
            link.addEventListener('click', onScrollToClick);
        });

        return () => {
            window.removeEventListener('load', navbarlinksActive);
            document.removeEventListener('scroll', navbarlinksActive);
            navbarlinks.forEach((link) => {
                link.removeEventListener('click', onScrollToClick);
            });
        };
    }, []);

    return (
        <div id='header'>
            <div className="d-flex flex-column">
                <div className="profile">
                    <div onClick={handleClick}>
                        <img src={DisplayImage} alt="" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px', border: 'none' }} />
                    </div>
                    <h1 className="text-light"><a href="index.html">Meet Diwan</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="https://github.com/Meet1903/" className="google-plus" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
                        <a href="https://meetdiwan.medium.com/" className="medium" target="_blank" rel="noopener noreferrer"><i className="bi bi-medium"></i></a>
                        <a href="http://linkedin.com/in/meetdiwan" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><a href="#home" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-user"></i> <span>Skills</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
