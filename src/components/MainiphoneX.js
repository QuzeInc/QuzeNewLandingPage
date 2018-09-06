import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

class MainiphoneX extends Component{

    render(){

        return(
            <div style={{backgroundColor: "#55a0fa", height: "100%", overflow: "auto"}}>

                <img src={require('../img/iphonex2.png')} height={"100%"} width={"100%"}/>

            </div>
        )
    }
}

export default MainiphoneX;