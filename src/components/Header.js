import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy'

class Header extends Component{

    render(){
        return(
            <div>

                <nav className="navbar navbar-expand-lg navbar-light navbar-c" id={"nav-scr"}
                style={{position: "fixed", backgroundColor: "rgba(255,255,255,1)"}}>

                    <button className="navbar-toggler" id={"ham-menu"} type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-logo" href="#">
                        <img src={require('../img/logo.png')} height={"30px"} width={"30px"} style={{marginLeft: "50px", marginRight: "20px"}}/>
                    </a>
                    <a className="navbar-brand nav-link navbar-right" style={{textAlign: "right!important"}}> </a>


                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                        <div className="navbar-nav" >
                            <li>
                                <a className="navbar-brand nav-item  nav-link"  href="#quze">QUZE</a>
                            </li>
                            <li>
                                <a className="navbar-brand nav-item nav-link" href="#wallet">WALLET</a>
                            </li>
                            <li>
                                <a className="navbar-brand nav-item nav-link" href="#learn">LEARN</a>
                            </li>
                            <li>
                                <a className="navbar-brand nav-item nav-link" href="#team">TEAM</a>
                            </li>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }

}

export default Header;