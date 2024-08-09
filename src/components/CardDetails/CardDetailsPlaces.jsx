import React, { useState, useEffect } from 'react';
import data from '../../data/data.json';
import './CardDetailsNearvy.css';
import CardWithButton from '../CardWithButton/CardWithButton';
import Card from '../Car/Card';

const CardDetailsPlaces = () => {
    // Extrae los tipos únicos de lugares del JSON
    const allTypes = [...new Set(data.places.map(place => place.type))];
    // Añade "todos" al inicio y coloca "otros" al final
    const uniqueTypes = ['todos', ...allTypes.filter(type => type !== 'otros'), 'otros'];

    const [selectedType, setSelectedType] = useState(uniqueTypes[0]); // Selecciona "todos" por defecto

    // Filtra los lugares según el tipo seleccionado
    const filteredPlaces = selectedType === 'todos'
        ? data.places
        : selectedType === 'otros'
        ? data.places.filter(place => place.type === 'otros')
        : data.places.filter(place => place.type === selectedType);

    useEffect(() => {
        // Desplaza hacia arriba al montar el componente
        const handleScrollToTop = () => {
            window.scrollTo(0, 0);
        };

        handleScrollToTop();

        return () => window.removeEventListener('scroll', handleScrollToTop);
    }, [selectedType]); // Se ejecuta cuando cambia el tipo seleccionado

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12 mb-4">
                    <select
                        className="form-select form-select-lg"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        {uniqueTypes.map(type => (
                            <option key={type} value={type}>
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row cards-container-details">
                {filteredPlaces.map(place => (
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

export default CardDetailsPlaces;
