import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            accessibility: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src={require('../img/verify1.png')} height={"100%"} width={"100%"}/>
                </div>
                <div>
                    <img src={require('../img/verify2.png')} height={"100%"} width={"100%"}/>
                </div>
                <div>
                    <img src={require('../img/verify1.png')} height={"100%"} width={"100%"}/>
                </div>

            </Slider>
        );
    }
}

export default SimpleSlider;