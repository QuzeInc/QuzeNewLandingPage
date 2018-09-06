import React from "react";
import Slider from "react-slick";

class IntroSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            draggable: false,
            accessibility: false,
            autoplay: false,
            autoplaySpeed: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            adaptHeight: false,
            variableWidth: false,
            useTransform: false,
            touchMove: false

        };
        return (
            <Slider {...settings} >
                <div >
                    <img src={require('../img/verify2.png')} height={"100px"} width={"80px"} style={{marginLeft: "50px"}}/>
                </div>
                <div>
                    <img src={require('../img/verify1.png')} height={"100px"} width={"80px"}/>
                </div>
                <div>
                    <img src={require('../img/verify2.png')} height={"100px"} width={"80px"}/>
                </div>

            </Slider>
        );
    }
}

export default IntroSlider;