import React from "react";
import { UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import './welcomScreenStyle.css';

const Welcome: React.FC = (props: any) => { 
    return (
        <div className="Welcome">
            <div className="container">
                <div className="flex">
                    <div className="top">
                        <div className="logobox">
                            <span>FIND CARE</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="flex-bottom">
                            <h2>Welcome to Find Care</h2>
                            <div className="rowFlex">
                            <UserOutlined />
                            <input className="input" type="text" placeholder="Enter your Name" />
                            </div>
                            <Link className="button"  to={{
                            pathname: '/main',
                        }} >
                                Continue
                            </Link>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;