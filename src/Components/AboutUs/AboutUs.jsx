import React from 'react';
import './AboutUs.css';

import Del from '../Assests/image1.jpg';
import Del1 from '../Assests/image2.jpg';
import Del3 from '../Assests/image3.jpg';
import Del4 from '../Assests/image4.jpg';
import online from '../Assests/online.jpg';
import instores from '../Assests/stores.jpg';


const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="vision">
                <h1>Our Vision</h1>
                <p>A world where eyewear helps you Do More, Be More.</p>
            </section>

            <section className="focus">
                <h2>Changing Eyewear for Good</h2>
                <p>We started with the aim to disrupt eyewear every step of the way. And today, we stand as a leading eyewear brand.</p>
            </section>

            <section className="features">
                <div className="feature">
                    <img src={Del1} alt="Fine Pair of Glasses" />
                    <h3>Fine Pair of Glasses</h3>
                    <p>We are known for designing, producing, and delivering the best eyewear, focusing on quality and style.</p>
                </div>
                <div className="feature">
                    <img src={Del} alt="Powered by Tech" />
                    <h3>Powered by Tech</h3>
                    <p>We leverage technology to ensure 100% precision in delivering your glasses.</p>
                </div>
                <div className="feature">
                    <img src={Del4} alt="Eyewear for Every Pocket" />
                    <h3>Eyewear for Every Pocket</h3>
                    <p>We ensure that every product delivers the highest quality at an affordable price.</p>
                </div>
                <div className="feature">
                    <img src={Del3} alt="Full Service Optometry" />
                    <h3>Full Service Optometry</h3>
                    <p>All our stores are equipped with state-of-the-art optometry services.</p>
                </div>
            </section>

            <section className="for-everyone">
                <h2>For Everyone</h2>
                <div className="segments">
                    <div className="segment">
                        <img src={online} alt="Online" />
                        <p>Online</p>
                    </div>
                    <div className="segment">
                        <img src={instores} alt="In Stores" />
                        <p>In Stores</p>
                    </div>
                    {/* <div className="segment">
                        <img src={home} alt="At Home" />
                        <p>At Home</p>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;