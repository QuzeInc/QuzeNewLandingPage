    import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import SimpleSlider from "./Slider";

class Certificates extends Component{

    render(){

        return(
            <div style={{backgroundColor: "#55a0fa", height: "100%", overflow: "auto", padding: "10px"}}>

                <Row>

                    <Col md={6}>


                        <SimpleSlider/>



                    </Col>

                    <Col md={6} className={"certificate-para"}>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Amet risus nullam eget felis eget nunc lobortis. Vestibulum lectus mauris ultrices eros in.
                        Ut pharetra sit amet aliquam id diam. Lorem ipsum dolor sit amet consectetur adipiscing.
                        Volutpat commodo sed egestas egestas. Id aliquet lectus proin nibh nisl condimentum id.
                        Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu.
                        A iaculis at erat pellentesque adipiscing commodo elit at. Molestie nunc non blandit massa enim.
                        Nisl vel pretium lectus quam id leo in vitae turpis. Mi sit amet mauris commodo quis imperdiet.
                        Pellentesque elit ullamcorper dignissim cras tincidunt.

                    </Col>

                </Row>

            </div>
        )
    }
}

export default Certificates;