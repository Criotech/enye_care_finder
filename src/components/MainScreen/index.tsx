import React, {useState, useEffect} from "react";
import { Map, GoogleApiWrapper, Circle, Marker, InfoWindow } from 'google-maps-react';

import Input from './Input';
import Footer from './Footer';

interface Props {
    google: any; 
    zoom: number; 
    style: { width: string; height: string;};
    initialCenter: { lat: number; lng: number; };
}

const Main: React.FC<Props> = (props:any) => {
    let careLocation
    const [center, setCenter] = useState<any|null>(null);
    const [activeMarker, setActiveMarker] = useState<any|null>({});
    const [showingInfoWindow, setShowingWindow] = useState<boolean>(false);
    const [searchType, setSearchType] = useState<string>('hospital')
    const [radius, setRadius] = useState<number>(500);
    const [searchResult, updateSearchResult] = useState<any>([]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          let center = { lat: position.coords.latitude, lng: position.coords.longitude }
          setCenter(center)
        },
          (error) => {
            console.log(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }, []);

    const mapStyles = {
        width: '100%',
        height: '100%',
        position: "relative"
    };

    const onMarkerClick = (props:any, marker:any) => {
      setActiveMarker(marker)
      setShowingWindow(true)
    };

  const onMapClicked = (props: any) => {
    if (showingInfoWindow) {
        setActiveMarker(null)
        setShowingWindow(false)
      }
  };

    if (props.location.state && props.location.state.center !== undefined) {
     careLocation= props.location.state.center;
     setTimeout(() => {
      setRadius(props.location.state.radius)
     }, 2000);
    }

    return (
        <div className="Main">
            {center &&
            <Map
                google={props.google}
                onClick={onMapClicked}
                zoom={15}
                style={mapStyles}
                initialCenter={center}
            >
                <Marker position={center} title="location">
                  <InfoWindow marker={activeMarker} google={props.google} map={props.map} visible={showingInfoWindow}>
                    <div>
                    <h1>hello</h1>
                    </div>
                  </InfoWindow>
                </Marker> 
                {
                  careLocation &&
                  <Marker position={careLocation} onClick={onMarkerClick} title="Care Location" />
                }
                {
                  searchResult && 
                  searchResult.map((data:any, index:number) => {
                    return (
                  <Marker key={index} onClick={onMarkerClick} position={data.geometry.location} title="Care Location" /> 
                    )
                  })
                }
                <InfoWindow marker={activeMarker} google={props.google} map={props.map} visible={showingInfoWindow}>
                    <div>
                    <h1>hello</h1>
                    </div>
                  </InfoWindow>
        {
            radius &&
                <Circle
        radius={radius}
        center={center}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}
      />
    }
                <Input setRadius={setRadius} setSearchType={setSearchType} />
                <Footer lat={center.lat} lng={center.lng} searchType={searchType} radius={radius} updateSearchResult={updateSearchResult}/>
            </Map>
            }

        </div>
    );
}

// export default Main;
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBxjbTCoo-xXCJ-ms2SaqSTsz1jMjqLi5M'
})(Main);