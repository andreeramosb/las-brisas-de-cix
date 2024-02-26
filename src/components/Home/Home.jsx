import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import SummaryCard from '../SummaryCard/SummaryCard';

const Home = () => {
    useEffect(() => {
        // Esta función se ejecutará cuando el componente se monte
        window.scrollTo(0, 0); // Hace que la página se desplace hacia arriba al montar el componente
    }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente

    return (
        <div>
            <SummaryCard title={"Lugares Cercanos"} array={"nearvy"} />
            <Banner />
            <SummaryCard title={"Atracciones turísticas"} array={"places"} />
        </div>
    );
}

export default Home;
