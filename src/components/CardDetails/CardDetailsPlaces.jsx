import React, { useEffect } from 'react';
import data from '../../data/data.json';
import './CardDetailsNearvy.css';
import CardWithButton from '../CardWithButton/CardWithButton';
import Card from '../Car/Card';

const CardDetailsNearvy = () => {
    const places = data.places;

    useEffect(() => {
        // Esta función se ejecutará cuando el componente se monte
        const handleScrollToTop = () => {
            window.scrollTo(0, 0); // Hace que la página se desplace hacia arriba al montar el componente
        };

        // Llama a la función para asegurarse de que la página esté en la parte superior al montar el componente
        handleScrollToTop();

        // Limpia el efecto al desmontar el componente
        return () => window.removeEventListener('scroll', handleScrollToTop);
    }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente

    return (
        <div className="container mt-5 mb-5">
            <div className="row cards-container-details">
                {places.map(place => (
                    <div key={place.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                        {place.typeCard === 1 ? (
                            <CardWithButton
                                id={place.id}
                                title={place.title}
                                description={place.description}
                                location={place.location}
                                image={place.image}
                                district={place.district}
                                province={place.province}
                                direction={place.direction}
                                partOfDay={place.partOfDay}
                                carOrWalk={place.carOrWalk}
                                time={place.time}
                            />
                        ) : (
                            <Card
                                id={place.id}
                                title={place.title}
                                description={place.description}
                                location={place.location}
                                image={place.image}
                                district={place.district}
                                province={place.province}
                                direction={place.direction}
                                partOfDay={place.partOfDay}
                                carOrWalk={place.carOrWalk}
                                time={place.time}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardDetailsNearvy;
