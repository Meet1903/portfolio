import React, {useEffect} from 'react'
import Isotope from 'isotope-layout'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ExtraCurricularItem from './ExtraCurricularItem'
import ExtraCurricularNYU from '../assets/img/extracurricular-nyu.jpeg'
import ExtraCurricularIEEE from '../assets/img/extracurricular-ieee.jpeg'
import ExtraCurricularCourant from '../assets/img/extracurricular-courant.png'
import ExtraCurricularISTE from '../assets/img/extracurricular-iste.jpeg'

export default function ExtraCurricular() {

    useEffect(() => {
        AOS.init();

        window.addEventListener('load', () => {
            let extracurricularContainer = document.querySelector('.extracurricular-container');
            if (extracurricularContainer) {
                let extracurricularIsotope = new Isotope(extracurricularContainer, {
                    itemSelector: '.extracurricular-item'
                });

                let extracurricularFilters = document.querySelectorAll('#extracurricular-flters li');

                extracurricularFilters.forEach((filter) => {
                    filter.addEventListener('click', function(e) {
                        e.preventDefault();
                        extracurricularFilters.forEach((el) => {
                            el.classList.remove('filter-active');
                        });
                        this.classList.add('filter-active');

                        extracurricularIsotope.arrange({
                            filter: this.getAttribute('data-filter')
                        });
                        extracurricularIsotope.on('arrangeComplete', function() {
                            AOS.refresh();
                        });
                    });
                });
            }
        });
    }, []);

    return (
        <section id="extracurricular" className="extracurricular section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Leadership, Involvement & University Employment</h2>
                    <p></p>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="extracurricular-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-undergrad">Undergraduation</li>
                            <li data-filter=".filter-grad">Graduation</li>
                        </ul>
                    </div>
                </div>

                <div className="row extracurricular-container" data-aos="fade-up" data-aos-delay="100">
                    <ExtraCurricularItem
                        cardType='filter-undergrad'
                        title='Chairperson'
                        link="/"
                        image={ExtraCurricularIEEE}
                    />

                    <ExtraCurricularItem
                        cardType='filter-undergrad'
                        title='Web Development Head'
                        link="/"
                        image={ExtraCurricularISTE}
                    />

                    <ExtraCurricularItem
                        cardType='filter-grad'
                        title='Graduate Teaching Assistant'
                        link="/"
                        image={ExtraCurricularCourant}
                    />

                    <ExtraCurricularItem
                        cardType='filter-grad'
                        title='Engagement Ambassador'
                        link="/"
                        image={ExtraCurricularNYU}
                    />

                </div>

            </div>
        </section>
    )
}