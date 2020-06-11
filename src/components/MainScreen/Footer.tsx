import React, {useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Spin } from 'antd';
import { HistoryOutlined, SearchOutlined } from '@ant-design/icons';
import "./mainScreenStyles.css"

const Footer = (props:any) => {
    let history = useHistory();
    const [status, changeStatus] = useState<boolean>(false)
    const [historyStatus, changeHistoryStatus] = useState<boolean>(false)

    const fetchHospitals =  () => {
        changeStatus(true)
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${props.lat},${props.lng}&type=${props.searchType}&radius=${props.radius}&key=AIzaSyBxjbTCoo-xXCJ-ms2SaqSTsz1jMjqLi5M`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
              },
        })
        .then((result:any)=>{
            history.push('/hospitals', {hospitalData: result.data.results, radius: props.radius, type: 'main'});
        })
    }

    const fetchHistory = () => {
        changeHistoryStatus(true)
        axios.get('https://freeplace.herokuapp.com/places').then((result:any)=>{
            history.push('/hospitals', {hospitalData: result.data, type: 'history'});
        })
    }

    return (
        <div className="Footer">
            <div className="footerContentContainer">
                <div>
                <button className="circlebtn1" onClick={fetchHistory}    >
                    {(historyStatus)? <Spin size="large" />: <HistoryOutlined style={{fontWeight: "bold"}} /> }
                </button>
                </div>
                <div>
                <button onClick={fetchHospitals} className="circlebtn2">
                    {(status)? <Spin size="large" />: <SearchOutlined style={{fontWeight: "bold"}} /> }
                </button>
                </div>
           </div>
        </div>
    );
}

export default Footer;
