import React from "react";
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import './homeScreenStyle.css';

const Home: React.FC = () => {
    return (
        <div className="Home">
            <div className="containerw">
                <div className="topw">
                    <img src={logo} height='70px' width='70px' alt="logo"/>
                    <h1>FIND CARE</h1>
                    <p>Application</p>
                </div>

                <Link
                className='btn'
                        to={{
                            pathname: '/welcome',
                        }}
                        style={{textDecoration: 'none', color: '#722359'}}
                         >
                    Get Started
                </Link>

                <div className="bottomw">
                    <p>By signin up you aggree to the</p>
                    <p className="p2">Terms of Use, Privacy Policy and Rules</p>
                </div>
            </div>
        </div>
    );
}

export default Home;