import Banner from '../Banner/Banner';
import SummaryCard from '../SummaryCard/SummaryCard'

const Home = () => {
    return (
        <div>
            <SummaryCard title={"Lugares Cercanos"} array={"nearvy"} />
            <Banner />
            <SummaryCard title={"Atracciones turísticas"} array={"places"} />
           
        </div>
    );
}

export default Home;
