import React, {Component} from 'react';

class Footer extends Component{

    render(){

        return(
            <div>
                <footer className="footer-distributed">
                    <div className="footer-left">
                        <h3>Quze</h3>
                        <p className="footer-links">
                            <a href="#index">Quze</a>
                            .
                            <a href="#wallet">Wallet</a>
                            .
                            <a href="#learn">Learn</a>
                            .
                            <a href="#team">Team</a>
                        </p>
                        <p className="footer-company-name">Quze &copy; 2018</p>
                        <div className="footer-icons">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/quze"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <br/>
                        {/*
                        <div id="contactInfo">
                            <p>Email us at: contact@quze.co</p>
                            <p>Call us at: +91 7987948439</p>
                        </div>
                        */}
                    </div>

                </footer>
            </div>
        )
    }
}

export default Footer;