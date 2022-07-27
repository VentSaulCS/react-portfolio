import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

const AboutMe = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (<main className="container text-center border border-primary">
        <h2 className="sectionheading">About Me</h2>


        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={process.env.PUBLIC_URL + "/images/ProfilePic.jpeg"}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Full Stack Webdeveloper</h3>
                    <p>HTML, CSS, Express, Hanlebars, REACT, MERN, MuSQL, Mongoose, Sequelize, NodeJS, Javascript,</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/images/ProfilePicTwo.jpeg"}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Dallas, TX</h3>
                    <p>Hiker, pet lover.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/images/ProfilePic.jpeg"}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Dedicate, sincere, professional, cater to client needs</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </main>)
}

export default AboutMe;