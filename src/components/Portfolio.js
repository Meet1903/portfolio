import React, {useEffect} from 'react'
import Isotope from 'isotope-layout'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PortfolioItem from './PortfolioItem'

export default function Portfolio() {

    useEffect(() => {
        AOS.init();

        window.addEventListener('load', () => {
            let portfolioContainer = document.querySelector('.portfolio-container');
            if (portfolioContainer) {
                let portfolioIsotope = new Isotope(portfolioContainer, {
                    itemSelector: '.portfolio-item'
                });

                let portfolioFilters = document.querySelectorAll('#portfolio-flters li');

                portfolioFilters.forEach((filter) => {
                    filter.addEventListener('click', function(e) {
                        e.preventDefault();
                        portfolioFilters.forEach((el) => {
                            el.classList.remove('filter-active');
                        });
                        this.classList.add('filter-active');

                        portfolioIsotope.arrange({
                            filter: this.getAttribute('data-filter')
                        });
                        portfolioIsotope.on('arrangeComplete', function() {
                            AOS.refresh();
                        });
                    });
                });
            }
        });
    }, []);

    return (
        <section id="portfolio" class="portfolio section-bg">
            <div class="container">

                <div class="section-title">
                    <h2>Projects</h2>
                    <p></p>
                </div>

                <div class="row" data-aos="fade-up">
                    <div class="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" class="filter-active">All</li>
                            <li data-filter=".filter-development">Development</li>
                            <li data-filter=".filter-ai">Artificial Intelligence</li>
                            <li data-filter=".filter-analysis">Analysis</li>
                        </ul>
                    </div>
                </div>

                <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    <PortfolioItem
                        cardType='filter-development'
                        title='WebTrek'
                        technology='React, Python, Flask, Elasticsearch'
                        link="https://github.com/Meet1903/WebTrek-The-Search-Engine"
                    />

                    <PortfolioItem
                        cardType='filter-development filter-ai'
                        title='Finetuning of BLIP model for Art Image Captioning'
                        technology='Python, PyTorch, Flask, HTML/CSS'
                        link="https://github.com/Meet1903/Finetuning-BLIP-for-Art-Image-Captioning"
                    />

                    <PortfolioItem
                        cardType='filter-ai'
                        title='Adversarial Attack and Training on Forward Forward Network'
                        technology='Python, PyTorch'
                        link="https://github.com/Meet1903/Adversarial-Attack-on-Forward-Forward-Network"
                    />

                    <PortfolioItem
                        cardType='filter-ai'
                        title='FineTuned LeNet-5 models & comparison'
                        technology='Python, PyTorch'
                        link="https://github.com/Meet1903/Finetuned-LeNets-comparison"
                    />

                </div>

            </div>
        </section>
    )
}