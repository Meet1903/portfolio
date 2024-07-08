import React from 'react'
import DisplayImage from '../assets/img/Display.jpg'
export default function Header() {
    return (
        <div id='header'>
            
            <div className="d-flex flex-column">

            <div className="profile">
                <img src={DisplayImage} alt="" className="img-fluid rounded-circle" style={{width: '150px', height: '150px', border: 'none'}} />
                <h1 className="text-light"><a href="index.html">Meet Diwan</a></h1>
                <div className="social-links mt-3 text-center">
                    <a href="https://github.com/Meet1903/" className="google-plus" target="_blank"><i className="bx bxl-github"></i></a>
                    <a href="https://meetdiwan.medium.com/" className="medium" target="_blank"><i className="bi bi-medium"></i></a>
                    <a href="http://linkedin.com/in/meetdiwan" className="linkedin" target="_blank"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
            <ul>
                <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-user"></i> <span>Skills</span></a></li>
                <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                <li><a href="#extracurricular" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Extra Curricular</span></a></li>
                <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
            </nav>
            </div>
        </div>
    )
    
}