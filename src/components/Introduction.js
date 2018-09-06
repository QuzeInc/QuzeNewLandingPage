import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import IntroSlider from "./IntroSlider";

class Introduction extends Component{

    render(){

        return(
            <div style={{backgroundColor: "black", height: "100vh", width: "100vw", overflow: "auto", padding: "25px"}}>

                    <Row>
                    <Col md={12}>

                        <p style={{fontSize: "3em",color: "white", textAlign: "center", fontFamily: "Open Sans",
                    verticalAlign: "center", paddingTop: "auto", paddingBottom: "auto"}}>
                    TO PUT EDUCATION ON BLOCKCHAIN, WORLDWIDE. </p>

                    </Col>

                    <p id={"intro-text"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    In metus vulputate eu scelerisque felis imperdiet. Nisi porta lorem mollis aliquam ut porttitor leo a diam.
                    Sit amet dictum sit amet justo donec enim diam vulputate. In est ante in nibh mauris cursus. Lectus nulla at volutpat diam.
                    Turpis nunc eget lorem dolor sed viverra. Faucibus in ornare quam viverra orci sagittis eu volutpat odio.
                    Magna etiam tempor orci eu lobortis elementum. Fusce id velit ut tortor pretium. Sed egestas egestas fringilla phasellus.
                    Augue ut lectus arcu bibendum at varius vel pharetra. Pellentesque diam volutpat commodo sed egestas egestas.
                    Tincidunt id aliquet risus feugiat in. Nunc eget lorem dolor sed viverra. Tristique senectus et netus et.
                    Commodo ullamcorper a lacus vestibulum sed arcu non odio. Sit amet consectetur adipiscing elit.
                    Vulputate mi sit amet mauris commodo quis imperdiet.

                </p>
                    </Row>



                        <Col md={{size: 6}} xs={{size: 12}} style={{ borderStyle:"dotted"}} >

                                <IntroSlider />

                        </Col>

                        <Col md={6}>
                        </Col>




            </div>
        )
    }
}

export default Introduction;