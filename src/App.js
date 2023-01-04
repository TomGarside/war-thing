import { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import ReactLeafletKml from 'react-leaflet-kml';
import './App.css';


let foobar ="foobar"

function  App() {
    const [kmlText, setKmlText] = useState(null);
    useEffect(() => {
	async function getKml(){
	    const kmlTxt = new DOMParser().parseFromString( await fetch("http://192.168.50.26/doc.kml"
    ).then(response => response.text()), 'text/xml');
	    setKmlText(kmlTxt);
	}
	foobar="blat";
	getKml();
    }, []);
  return (
    <div className="App">
	<header className="App-header">
	    <div>{  foobar }</div>
      <MapContainer className="map-container" zoom={15} center={[51.00, 0.00]} >
       	 <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {kmlText && <ReactLeafletKml kml={kmlText} />} 
      </MapContainer>
      </header>
    </div>
  );
}

export default App;
