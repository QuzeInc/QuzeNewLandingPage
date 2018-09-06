import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';


class Team extends Component{

    render(){
        return(
            <div style={{backgroundColor: "white", zIndex: "500"}}>
                <br/><br/><br/><br/><br/>

                <h4 style={{textAlign: "center", fontFamily: "Open Sans", color: "black"}}>CORE TEAM </h4>

                <Container fluid >

                    {/*
                    <Row  style={{textAlign: "center", borderStyle: "dotted"}}>

                        <Col    md={{size: 3, offset: 3}}
                            style={{borderStyle: "dotted"}} >md=3 offset-md=3</Col>
                        <Col    md={{size: 3, offset: 3}}>md=3 offset-md=3</Col>
                    </Row>
                    */}

                    <br/>

                    <Container style={{textAlign: "center"}}>
                        <Row>

                        <Col    className={"teamInfo"}
                                md={{size: 3, offset: "1"}} xs={{size: 12}} sm={{size: 4}} lg={{size: 4, offset: "0"}}
                                >

                            <div style={{position: "relative", float: "center"}}>
                                <img    className={"img-responsive"}
                                        src={require('../img/placeholder.png')} height={"150px"} width={"150px"}
                                        style={{borderRadius: "50%", zIndex: "600"}}/>

                                <img src={require('../img/white.png')} height={"26px"} width={"26px"} id={"linkedIN-background"}/>

                                <a href={"https://www.linkedin.com/in/stavanp/"}>
                                    <img    className="img-responsive"
                                            src={require('../img/linkedin.png')} height={"20px"} width={"20px"}
                                            id={"linkedIN-link"}/>
                                </a>

                            </div>
                            <br/>

                            Stavan
                            <br/>

                            CEO
                        </Col>


                            <Col    className={"teamInfo"}
                                    md={{size: 3, offset: 1}} sm={4} lg={{size: 4, offset: "0"}}
                                    >

                                <div style={{position: "relative", float: "center"}}>

                                    <img    className={"img-responsive"}
                                            src={require('../img/placeholder.png')} height={"150px"} width={"150px"} style={{borderRadius: "50%"}}/>

                                    <img src={require('../img/white.png')} height={"26px"} width={"26px"} id={"linkedIN-background"}/>

                                    <a href={"https://www.linkedin.com/in/stavanp/"}>
                                        <img    className="img-responsive"
                                                src={require('../img/linkedin.png')} height={"20px"} width={"20px"}  id={"linkedIN-link"} className={"fab fa-linkedin"}/>
                                    </a>

                                </div>
                            <br/>

                            JAYA

                            <br/>

                            CFO
                        </Col>

                        <Col        className={"teamInfo"}
                                    md={{size: 3, offset: 1}} sm={4} lg={{size: 4, offset: "0"}}
                                    >

                            <div style={{position: "relative", float: "top"}}>
                                <img className={"img-responsive"}
                                 src={require('../img/placeholder.png')} height={"150px"} width={"150px"} style={{borderRadius: "50%"}}/>


                                <img src={require('../img/white.png')} height={"26px"} width={"26px"} id={"linkedIN-background"}/>

                                <a href={"https://www.linkedin.com/in/stavanp/"}>
                                <img src={require('../img/linkedin.png')} height={"20px"} width={"20px"}  id={"linkedIN-link"}
                                        className={"fab fa-linkedin"} />

                                </a>

                            </div>

                            <br/>

                            AKSHAY

                            <br/>

                            CTO
                        </Col>

                        </Row>
                    </Container>

                </Container>



            </div>
        )
    }
}

export default Team;