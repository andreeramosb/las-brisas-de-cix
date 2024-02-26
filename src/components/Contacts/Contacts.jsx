import { useEffect, useRef } from 'react';
import { TelephoneFill } from 'react-bootstrap-icons';
import './Contacts.css';

const Contacts = () => {
    const contactsRef = useRef(null); // Crear una referencia para el contenedor de contactos

    useEffect(() => {
        // Esta función se ejecutará cuando el componente se monte
        contactsRef.current.scrollIntoView({ behavior: "smooth" }); // Hace que la página se desplace hacia el contenedor de contactos
    }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente

    return (
        <div ref={contactsRef} className="container mt-5 mb-5 contacts-container">
            <h2 className='title-contacts'>Contactos</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3 style={{ color: '#FFA500' }}><TelephoneFill /> Contactos anfitrión / co-anfitriona</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Manuel: (+51) 943042322</li>
                        <li className="list-group-item">Jackeline: (+51) 951435942</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3 style={{ color: '#FFA500' }}><TelephoneFill /> Contactos</h3>
                    <ul className="list-group">
                        <li className="list-group-item">La Italiana Pizzería: +51 971 013 886</li>
                        <li className="list-group-item">Taxi Pinos: (074) 223752</li>
                        <li className="list-group-item">Puede descargar la app de PedidosYa</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3 style={{ color: '#FFA500' }}><TelephoneFill /> Contactos de Emergencia</h3>
                    <ul className="list-group">
                        <li className="list-group-item">P.N.P. Comisaría del Norte: (074) 229697</li>
                        <li className="list-group-item">Central Policía Nacional del Perú: 105</li>
                        <li className="list-group-item">Bomberos “Salvadora Chiclayo”: (074)  452997</li>
                        <li className="list-group-item">Central Bomberos: 116.</li>
                        <li className="list-group-item">Hospital, “Luis Heysen Incháustegui”: (074) 208035</li>
                        <li className="list-group-item">Servicio de Atención Médica de Urgencia  (SAMU) – Lambayeque: <br></br>(+51) 979176400 / (+51) 949603321.</li>
                        <li className="list-group-item">Central SAMU: 106</li>
                        {/* Agrega más elementos según sea necesario */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
