import React, { useEffect } from 'react'
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useHistory } from 'react-router-dom'



function Home() {
    const history = useHistory();

    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div id="hero" class="hero d-flex align-items-center ,Back" 
        style= {{backgroundImage:`url(/Image/hero-bg.png)`}} >
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">Get Your Message Across</h1>
                        <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <div class="text-center text-lg-start">
                                <a class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                                onClick={() => {
                                    history.push('/form')
                                }}>
                                    <span>Get Started</span>
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src="../../../Image/hero-img.png" class="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
