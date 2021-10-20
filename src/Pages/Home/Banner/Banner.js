import { Carousel } from 'react-bootstrap';
import React from 'react';
import img1 from './Images/cover.jpg';
import img2 from './Images/banner-1.jfif';
import img3 from './Images/banner-2.jfif';

const Banner = () => {
    return (
        <div className="mt-2 mb-2">
            <Carousel>
            <Carousel.Item>
                <img                
                className="d-block w-100 img-fluid"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Ensure healthy lives</h3>
                <p>Ensure that you secure your future with us.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Be sure to join us</h3>
                <p>Health is the root of all</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Our Plans</h3>
                <p>Secure your family with us.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>          
        </div>
    );
};

export default Banner;