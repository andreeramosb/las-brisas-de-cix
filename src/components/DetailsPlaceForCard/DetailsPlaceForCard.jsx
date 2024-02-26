import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { GeoAltFill, DistributeHorizontal, ClockFill } from 'react-bootstrap-icons';
import data from '../../data/data.json';
import './DetailsPlaceForCard.css';

const DetailsPlaceForCard = () => {
    const { id } = useParams();
    const place = data.places.find(place => place.id === parseInt(id));

    if (!place) {
        return <div>Lugar no encontrado</div>;
    }

    // Función para convertir las etiquetas HTML en elementos JSX
    const createMarkup = (htmlString) => {
        return { __html: htmlString };
    };

    const detailsRef = useRef(null); // Mover useRef dentro del componente

    useEffect(() => {
        // Esta función se ejecutará cuando el componente se monte
        detailsRef.current.scrollIntoView({ behavior: "smooth" }); // Hace que la página se desplace hacia el contenedor detailsRef
    }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente

    return (
        <>
            <div className='container mt-5 mb-5 container-description-details' ref={detailsRef}>
                <h2 className=''>{place.title}</h2>
                <p dangerouslySetInnerHTML={createMarkup(place.description)} className='pt-4'></p>
            </div>
            <div className='video-container'>
                <div className="container player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        url={place.video}
                        controls={true}
                        width="100%"
                        height="500px" // Ajusta el tamaño del reproductor aquí
                        config={{
                            youtube: {
                                playerVars: { modestbranding: 1 }
                            }
                        }}
                    />
                </div>
            </div>

            <div className='container mt-5 mb-5'>
                <h2 className='mb-4 info-palce-important'>Informacion importante</h2>
                <div className="row important-checks-place">
                    <div className="col-md-3">
                        <GeoAltFill className='icon-info' />
                        <span>Distrito: {place.district}</span>
                    </div>
                    <div className="col-md-3">
                        <GeoAltFill className='icon-info' />
                        <span>Provincia: {place.province}</span>
                    </div>
                    <div className="col-md-3">
                        <DistributeHorizontal className='icon-info' />
                        <span>Distancia: {place.distance} km</span>
                    </div>
                    <div className="col-md-3">
                        <ClockFill className='icon-info' />
                        <span>Tiempo: {place.time}</span>
                    </div>
                    <div className='pt-3'>*El tiempo y la distancia es un aproximado, teniendo en cuenta como punto de partida el departamento.</div>
                    <div className='pt-3'>Mapa: <a href={place.location}>Ubicación</a></div>
                </div>
            </div>
        </>
    );
}

export default DetailsPlaceForCard;
