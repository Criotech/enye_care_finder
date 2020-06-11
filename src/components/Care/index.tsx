import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Spin } from 'antd';
import axios from 'axios';
import './hospitalStyles.css';

const Hospitals = (props: any) => {
    let type: any;
    let history = useHistory();
    const hospitalData = props.location.state.hospitalData;
    const radius = props.location.state.radius;
    const [status, toggleStatus] = useState<boolean>(false)

    if (props.location.state.type) {
        type= props.location.state.type
    }

    const viewMap = (props: any) => {
        toggleStatus(!status)
        axios.post('https://freeplace.herokuapp.com/places', {
            name: props.name,
            vicinity: props.vicinity,
            radius: props.radius,
            location: props.location
        }).then((result: any) => {
            history.push('/main', { center: result.data.location, radius: result.data.radius, name: result.data.name, vicinity: result.data.vicinity });
        })
    }

    return (
        <div>
            <div className="title">{(type==='history')?'Search History': 'Search Results'}</div>
            {
                (hospitalData.length > 0) ?
                    hospitalData.map((item: any, index: number) => {
                        return (
                            <div className="hospitalContainer" key={index}>
                                <div className="hospitalDetails">
                                    <h3>{item.name}</h3>
                                    <p>{item.vicinity}</p>
                                    {type==='history' && <p style={{color: 'grey', marginTop: -10}}>{item.created_at}</p> }
                                </div>
                                {
                                    type==='main' &&
                                    <div className="mapBtn">
                                        <button onClick={() => viewMap({ location: item.geometry.location | item.location[0], name: item.name, vicinity: item.vicinity, radius: radius })}>{(status) ? (<Spin size="small" />) : 'View on map'}</button>
                                    </div>
                                }

                            </div>
                        )
                    }) : (<div>No Hospital Found, Try To Increase Your Search Raduis</div>)
            }


        </div >
    );

}

export default Hospitals;


