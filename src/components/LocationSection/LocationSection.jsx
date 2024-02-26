import React from 'react';
import './LocationSection.css';
import { GeoFill } from 'react-bootstrap-icons';

const LocationSection = () => {
    return (
        <div className="locationSection-container">
            <div className="container locationSection-content">
                <h2>Ubicación del departamento</h2>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <p>Av. Prolongación Bolognesi Mz. B lote 10</p> 
                    <a href='https://maps.app.goo.gl/CCKNov58zMEvUdPZA' style={{background:"#FEA501", paddingLeft:"5px", padding:"10px", borderRadius:"8px"}}>
                        <GeoFill style={{fontSize:"30px"}}/> 
                        <span>maps</span> 
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LocationSection;
