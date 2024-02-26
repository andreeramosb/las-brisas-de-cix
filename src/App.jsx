import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LocationSection from "./components/LocationSection/LocationSection";
import Footer from "./components/Footer/Footer";
import CardDetailsNearvy from "./components/CardDetails/CardDetailsNearvy";
import CardDetailsPlaces from "./components/CardDetails/CardDetailsPlaces";
import DetailsPlaceForCard from "./components/DetailsPlaceForCard/DetailsPlaceForCard";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lugares-cercanos" element={<CardDetailsNearvy />} />
          <Route path="/atractivos-turisticos" element={<CardDetailsPlaces />} />
          <Route path="/atractivos-turisticos/:id" element={<DetailsPlaceForCard />} />
          <Route path="/contactos" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <LocationSection />
      <Footer />
    </>
  );
}

export default App;
