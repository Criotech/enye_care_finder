import React from 'react';
import { Select } from 'antd';
import "./mainScreenStyles.css"

const { Option } = Select;

declare var google: any;

const InputSearch = (prop: any) => {

    const handleRadiusChange = (value:string) => {
        prop.setRadius(parseInt(value))
    }

    const handleTypeChange = (value:string) => {
        prop.setSearchType(value)
    }

    return (
        <div className="searchInputBox">
            <div className="inputWrapper">
                <div className="inputFlex">
                    <Select defaultValue="Select Care Service To Locate Around You" onChange={handleTypeChange} size='large' style={{flex: 1}} >
                    <Option value="disabled" disabled>
                            Select Care Service To Locate Around You
                    </Option>
                        <Option value="hospital">Hospital</Option>
                        <Option value="pharmacy">Pharmacy</Option>
                        <Option value="hospital">Clinic</Option>
                        <Option value="hospital">Medical Offices</Option>
                    </Select>

                    <Select defaultValue="Select Radius" size="large" onChange={handleRadiusChange} style={{ width: 120 }} >
                        <Option value="disabled" disabled>
                            Select Radius
      </Option>
                        <Option value="500">500</Option>
                        <Option value="600">600</Option>
                        <Option value="700">700</Option>
                        <Option value="800">800</Option>
                        <Option value="900">900</Option>
                        <Option value="1000">1000</Option>
                        <Option value="1000">2000</Option>
                        <Option value="5000">5000</Option>


                    </Select>
                </div>
               
            </div>


        </div>
    );
}

export default InputSearch;