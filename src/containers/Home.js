import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import {Link} from 'react-router-dom';
import Scrollspy from 'react-scrollspy'


//Components
import Header from '../components/Header';
import Footer from "../components/Footer";
import Team from "../components/Team";
import Introduction from "../components/Introduction";
import Particles from 'react-particles-js';
import Interactive from 'react-interactive';
import MainiphoneX from "../components/MainiphoneX";
import Certificates from "../components/Certificates";
import Slider from "../components/Slider";
import SimpleSlider from "../components/Slider";

class Home extends Component{
    render(){
        return(
            <div>

                <Header/>
                {/*
                <br/><br/><br/>

                <Slider/>
*/}

                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 200,
                            },
                            color: {
                                value: ['#000000']
                            },
                            line_linked: {
                                color: '#a4abb5',
                                opacity: 1
                            },
                            move :{
                                speed : 6
                            },
                            interactivity : {
                                    detect_on : 'canvas',

                                    event : {
                                        onhover : {
                                            enable : true,
                                            mode : "repulse"
                                        },
                                        onclick :{
                                            enable : true,
                                            mode : "grab"
                                        },
                                        resize : true

                                    }
                            },
                            repulse:{
                                duration: 10,
                                opacity: 1,
                                distance: 500
                            }

                        }
                    }}

                    style={{
                        zIndex: 500,
                    }}
                />



                <Introduction/>

                <MainiphoneX/>

                <Certificates/>

                <Team/>

                {/*
                TEAM
                */}

                {/*
                <div className="section scrollspy" data-target="nav-scr" data-offset="0" id="team" data-spy="scroll">
                    <div className="container" id={"team"}>

                        <br/>
                        <br/><br/><br/>
                            <h4 style={{textAlign: "center"}}> Core Team</h4>
                            <br/>
                                <div className="row">
                                    <div className="col s12 m3 offset-m2" id="stavanReadMore">
                                        <div className="card-avatar">
                                            <div className="waves-effect waves-block waves-light">
                                                <img className="activator responsive-img" src={require('../img/phlogo.png')}/>
                                            </div>
                                            <div className="card-content">
                                                <h5><span className="card-title activator grey-text text-darken-4">Stavan<br/>
							<small><em>CEO</em></small></span></h5>
                                                <p id="stavanMoreInfo"
                                                   style={{textAlign: "justify", padding: "20px", display: "none"}}>
                                                    Stavan is the CEO &amp; Founder of Quze, which is a blockchain-based
                                                    education platform that aims to connect learners, educators,
                                                    employers and more. Stavan is a blockchain evangelist and wants to
                                                    show people the value of this disruptive technology. He also shares
                                                    a passion for teaching and has varied experience simplifying complex
                                                    technological concepts to masses around the world. He has taught
                                                    around Americas, Europe, Africa and Asia and understands how the
                                                    education system can be evolved to fit the student of today. Before
                                                    Quze, Stavan was working with Microsoft, developing custom-cloud
                                                    solutions for Fortune-500 clients and creating intuitive user
                                                    experiences.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m3" id="akshayReadMore">
                                        <div className="card-avatar">
                                            <div className="waves-effect waves-block waves-light">
                                                <img className="activator responsive-img" src={require('../img/phlogo.png')}/>
                                            </div>
                                            <div className="card-content">
                                                <h5><span className="card-title activator grey-text text-darken-4">Akshay<br/>
							<small><em>Technical Advisor</em></small>
						</span></h5>
                                                <p style={{textAlign: "justify", padding: "20px", display: "none"}}
                                                   id="akshayMoreInfo">
                                                    Akshay brings his experience in blockchain development, algorithms
                                                    and building large scale software systems to Quze. As a Software
                                                    Development Engineer in Amazon transportation, Akshay was
                                                    responsible for designing a new optimization system that reduced
                                                    $150mn in transportation costs annually, as well as graph algorithms
                                                    for identifying missed opportunities in the transportation network.
                                                    Akshay has an engineering degree with honors and a minor in business
                                                    from University of Illinois at Urbana-Champaign.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m3" id="jayaReadMore">
                                        <div className=" card-avatar">
                                            <div className="waves-effect waves-block waves-light">
                                                <img className="activator responsive-img" src={require('../img/phlogo.png')}/>
                                            </div>
                                            <div className="card-content">
                                                <h5><span className="card-title activator grey-text text-darken-4">
							Jaya<br/>
							<small><em>CFO</em></small>
						</span></h5>
                                                <p style={{textAlign: "justify", padding: "20px", display: "none"}}
                                                   id="jayaMoreInfo">
                                                    Jaya is a business management graduate specializing in risk
                                                    management and investment banking. Being interested in how people
                                                    make deep connections with each through learning - mostly online,
                                                    she is now focused on helping create a learning platforms using
                                                    future tech to rewire the learning ecosystem. She has worked with
                                                    various social organizations to understand the people and their
                                                    needs better. During her graduation she scored a scholarship program
                                                    with the University of Economics Varna and immidiately after the
                                                    graduation, a scholarship program for investment banking with the
                                                    Bombay Stock Exchange.
                                                    She aims work in various sector and build a world where everyone is
                                                    able to have basic needs of their life fulfilled.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12 m3 offset-m2" id="nisargReadMore">
                                        <div className=" card-avatar">
                                            <div className="waves-effect waves-block waves-light">
                                                <img className="activator responsive-img" src={require('../img/phlogo.png')}/>
                                            </div>
                                            <div className="card-content">
                                                <h5><span className="card-title activator grey-text text-darken-4">Nisarg<br/>
							<small><em>Backend Developer</em></small></span></h5>
                                                <p style={{textAlign: "justify", padding: "20px", display: "none"}}
                                                   id="nisargMoreInfo">
                                                    Pursuing his undergraduate studies in computer sciences, Nisarg is a
                                                    software designer and developer with interests in developing
                                                    decentralized systems based on technologies like blockchain and
                                                    integrating them with the power of Data analytics and Machine
                                                    Learning algorithms to create applications that are intelligent,
                                                    community-driven and scalable. Nisarg is currently working on
                                                    blockchain based solutions for digital credentials storage and
                                                    identity management for quze platform.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m3" id="kartikeyaReadMore">
                                        <div className="card-avatar">
                                            <div className="waves-effect waves-block waves-light">
                                                <img className="activator responsive-img" src={require('../img/phlogo.png')}/>
                                            </div>
                                            <div className="card-content">
                                                <h5><span className="card-title activator grey-text text-darken-4">Kartikeya<br/>
							<small><em>Frontend Developer</em></small></span></h5>
                                                <p style={{textAlign: "justify", padding: "20px", display: "none"}}
                                                   id="kartikeyaMoreInfo">
                                                    Pursuing his undergraduate studies in computer sciences, Kartikeya
                                                    is a software designer and developer with interests in developing
                                                    beautiful interfaces and designs that feel natural to interact with.
                                                    He is also passionate about working in the educational space to
                                                    bring skill development opportunities to all the students through
                                                    technology.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m3" id="samayReadMore">
                                        <div className="card-avatar">
                                            <div className="waves-effect waves-block waves-light">
                                                <img className="activator responsive-img" src={require('../img/phlogo.png')}/>
                                            </div>
                                            <div className="card-content">
                                                <h5><span className="card-title activator grey-text text-darken-4">Samay<br/>
							<small><em>Blockchain Analyst</em></small></span></h5>
                                                <p style={{textAlign: "justify", padding: "20px", display: "none"}}
                                                   id="samayMoreInfo">
                                                    Doing his undergraduate studies in business, Samay is a blockchain
                                                    enthusiast with great interest in the integration of this technology
                                                    in future businesses. Having written a variety of papers on
                                                    blockchain, Samay is planning of completing his degree with a
                                                    research paper on blockchain as well.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>


                    </div>
                </div>*/}

                <div id={"more-info"} style={{backgroundColor: "#55a0fa"}}>

                    <p> FOR MORE INFO</p>

                    <button id={"contact-button"}> SCHEDULE A CALL</button>
                    <br/>

                    <br/>
                    <button id={"contact-button"}> CONTACT US</button>

                </div>

                <Footer/>
            </div>
        )
    }
}

export default Home;