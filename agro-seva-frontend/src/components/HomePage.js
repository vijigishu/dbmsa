import React from 'react';
import './HomePage.css'; // Make sure to import your CSS

const HomePage = () => {
    return (
        <div>
            <header>
                <h1>Agro Seva Portal</h1>
                {/* Add navigation links here */}
            </header>
            <div className="hero">
                <h2>Welcome to Agro Seva</h2>
                <p>Empowering Farmers for a Better Tomorrow</p>
            </div>
            {/* Add other sections here */}
        </div>
    );
};

export default HomePage;
