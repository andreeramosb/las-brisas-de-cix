import React, { useEffect, useState } from 'react';
import Card from '../Car/Card';
import '../Main/Main.css'; // Importa los estilos comunes
import '../Main/Main.css'; // Importa los estilos específicos de Nearvy
import data from '../../data/data.json';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import { CarFrontFill, ChevronDoubleUp, HouseDoor } from 'react-bootstrap-icons';

const Nearvy = () => {
    const [selectedType, setSelectedType] = useState('all');
    const nearvyPlaces = data.nearvy;
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [loading, setLoading] = useState(true); // Estado para controlar la carga

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Simulación de tiempo de carga de 1000ms
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const renderIcon = (value) => {
        return value === 1 ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-walking" viewBox="0 0 16 16">
                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
                <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
            </svg>
        ) : (
            <CarFrontFill />
        );
    };

    return (

        <>
            <div className="main-container pt-5">
                {/* Utiliza el Link de react-router-dom para la navegación */}
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}><Link to="/" className="btn-move-page-link mb-4"><HouseDoor /></Link></div>
                {loading ? ( // Mostrar el loader si loading es true
                    <div className="loader-container">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p>Las Brisas de Cix</p>
                        <div style={{ color: "#5489EF", background: "white", padding: "4px" }}>Buscando lugares recomendados...</div>
                    </div>
                ) : (
                    <div className="image-and-cards-container">
                        <div className="cards-container">
                            {nearvyPlaces.map((place, index) => (
                                <Card
                                    key={place.id}
                                    index={index + 1} // Suma 1 al índice para comenzar desde 1 en lugar de 0
                                    title={place.title}
                                    description={place.description}
                                    district={place.district}
                                    province={place.province}
                                    time={place.time}
                                    distance={place.distance}
                                    carOrWalk={place.carOrWalk}
                                    icon={renderIcon(place.carOrWalk)}
                                    image={place.image}
                                    location={place.location}
                                />
                            ))}
                        </div>
                    </div>
                )}
                <div className="container m-3 d-flex flex-column justify-content-center align-items-center p-3" style={{ background: "#083758", color: "white", textAlign: "center" }}>
                    <p>"Las Cevicherías al paso" que se muestran en el listado, son considerados las mejores de Chiclayo.</p>
                    <p>Además cerca al departamento encontrarás Farmacia, Restaurantes y más.</p>
                </div>
                <button className={`scroll-to-top-button ${showScrollButton ? 'show' : ''}`} onClick={scrollToTop}>
                    <ChevronDoubleUp />
                </button>
            </div>
        </>
    );
};

export default Nearvy;
