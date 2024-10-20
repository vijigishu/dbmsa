import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'; // Import any CSS file you may have

const Services = () => {
    // Sample data for services; replace with actual data or fetch from an API
    const servicesData = [
        { id: 1, name: 'Service 1', description: 'Description for Service 1' },
        { id: 2, name: 'Service 2', description: 'Description for Service 2' },
        { id: 3, name: 'Service 3', description: 'Description for Service 3' },
        { id: 4, name: 'Service 4', description: 'Description for Service 4' },
    ];

    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <div className="services-grid">
                {servicesData.map((service) => (
                    <div key={service.id} className="service-card">
                        <Link to={`/services/${service.id}`}>
                            <h2>{service.name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
