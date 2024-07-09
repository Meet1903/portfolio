import React, { useEffect } from 'react'
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
                    filter.addEventListener('click', function (e) {
                        e.preventDefault();
                        portfolioFilters.forEach((el) => {
                            el.classList.remove('filter-active');
                        });
                        this.classList.add('filter-active');

                        portfolioIsotope.arrange({
                            filter: this.getAttribute('data-filter')
                        });
                        portfolioIsotope.on('arrangeComplete', function () {
                            AOS.refresh();
                        });
                    });
                });
            }
        });
    }, []);

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Projects</h2>
                    <p></p>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-development">Development</li>
                            <li data-filter=".filter-ai">Artificial Intelligence</li>
                            <li data-filter=".filter-analysis">Analysis</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    <PortfolioItem
                        cardType='filter-development'
                        title='WebTrek - The Search Engine'
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
                        link="https://drive.google.com/file/d/1TSdLeeVqqINupxPfC_GoC2DElSghv75S/view?usp=sharing"
                    />

                    <PortfolioItem
                        cardType='filter-ai'
                        title='FineTuned LeNet-5 models & comparison'
                        technology='Python, PyTorch'
                        link="https://github.com/Meet1903/Finetuned-LeNets-comparison"
                    />

                    <PortfolioItem
                        cardType='filter-analysis'
                        title='Citibike - NYC'
                        technology='Tableau'
                        link="https://public.tableau.com/views/Citibike-NYC/Animatedvisualizationofhourlydepartures?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link"
                    />

                    <PortfolioItem
                        cardType='filter-analysis'
                        title='Diseases Dashboard by county, year, and sex'
                        technology='Tableau'
                        link="https://public.tableau.com/shared/HCNPHCTD6?:display_count=n&:origin=viz_share_link"
                    />

                    <PortfolioItem
                        cardType='filter-ai'
                        title='LayoutGAN'
                        technology='Python, PyTorch'
                        link="https://github.com/Meet1903/LayoutGAN"
                    />

                    <PortfolioItem
                        cardType='filter-analysis'
                        title="Fannie Mae's Predictive Analysis for Mitigating the 2008 Financial Crisis"
                        technology='Python, PyTorch, Tableau'
                        link="https://meetdiwan.medium.com/fannie-maes-predictive-analysis-and-alternative-strategies-assessment-for-mitigating-the-2008-db50373b15a8"
                    />

                    <PortfolioItem
                        cardType='filter-analysis'
                        title='Telecommunications Customer Churn Forecasting and Analytical Modeling'
                        technology='Python, PyTorch, Tableau'
                        link="https://meetdiwan.medium.com/telecommunications-customer-churn-forecasting-and-analytical-modeling-75bdeb74b2b9"
                    />

                    <PortfolioItem
                        cardType='filter-analysis'
                        title='Whom to Sell a Personal Loan?'
                        technology='Python, PyTorch, Tableau'
                        link="https://meetdiwan.medium.com/whom-to-sell-the-personal-loan-7e3b5add44d9"
                    />

                    <PortfolioItem
                        cardType='filter-ai'
                        title='Adaptable ResNet'
                        technology='Python, PyTorch'
                        link="https://github.com/Meet1903/Adaptable-ResNet"
                    />

                    <PortfolioItem
                        cardType='filter-analysis'
                        title='Employee Attrition Insights: Leveraging IBM HR Analytics Data'
                        technology='Python, PyTorch, Tableau'
                        link="https://meetdiwan.medium.com/employee-attrition-insights-leveraging-ibm-hr-analytics-employee-attrition-performance-data-e50122b2ecd3"
                    />

                    <PortfolioItem
                        cardType='filter-development'
                        title='Job Application Helper - Chrome Extension'
                        technology='JavaScript, HTML/CSS, Chrome Local Storage'
                        link="https://github.com/Meet1903/Job-Application-Helper-Extension"
                    />

                </div>

            </div>
        </section>
    )
}