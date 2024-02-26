import React from 'react';
import BannerBackpacker from '../../assets/img/banner.png';
import FoodIcon from '../../assets/img/eat.png';
import BackpackerIcon from '../../assets/img/icon-travel.png';
import './Banner.css';

const Banner = () => {
    return ( 
        <div className="banner-container">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-6 col-sm-12 col-banner"> {/* Cambio de col-md-6 a col-sm-12 */}
                        <div className="text-container">
                            <h2>Disfruta de Chiclayo</h2>
                            <p>¡Bienvenidos a Chiclayo, "Ciudad de la Amistad", una ciudad llena de historia y encanto! </p>
                            <div className="d-flex align-items-start mb-3">
                                <div className="icon-container">
                                    <img src={BackpackerIcon} alt="" className="icon" />
                                </div>
                                <div>
                                    <h3>Explora la ciudad y sus alrededores</h3>
                                    <p>Conoce Chiclayo y sus alrededores, explora sus atracciones turísticas únicas y sumérgete en su vibrante cultura.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start">
                                <div className="icon-container">
                                    <img src={FoodIcon} alt="" className="icon" />
                                </div>
                                <div>
                                    <h3>Estar en Chiclayo es comer rico</h3>
                                    <p>Estar en Chiclayo es enamorarse de su gastronomía única. Cada plato es una obra maestra que celebra la riqueza cultural de la región.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 banner-container-img col-banner"> {/* Cambio de col-md-6 a col-sm-12 */}
                        <img src={BannerBackpacker} alt="Banner" className="img-banner" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;
