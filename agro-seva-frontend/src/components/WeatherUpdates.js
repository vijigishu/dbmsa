import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCloudSun, FaCloudRain, FaCloudShowersHeavy } from 'react-icons/fa'; // Importing some weather icons
import './WeatherUpdates.css'; // Import the CSS file

const WeatherUpdates = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [cityName, setCityName] = useState(''); // State for city name input

    const fetchWeatherData = async (city) => {
        try {
            const apiKey = 'b08b0c79b59465cb866fc11cfc16cf60'; // Your API key
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

            if (response.status === 200) {
                setWeatherData(response.data);
            } else {
                throw new Error('Unexpected response');
            }
        } catch (err) {
            console.error('Error fetching weather data:', err);
            setError('Error fetching weather data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cityName) {
            setLoading(true);
            fetchWeatherData(cityName);
        }
    };

    useEffect(() => {
        fetchWeatherData('London'); // Default city
    }, []); // Empty dependency array means this runs once on component mount

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="weather-container">
            <h2>Weather Updates</h2>
            <form onSubmit={handleSubmit} className="city-form">
                <input 
                    type="text" 
                    placeholder="Enter city name" 
                    value={cityName} 
                    onChange={(e) => setCityName(e.target.value)} 
                    required 
                />
                <button type="submit">Get Weather</button>
            </form>
            {weatherData && (
                <div className="weather-card">
                    <h3>{weatherData.name}</h3>
                    <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    {weatherData.weather[0].main === 'Clear' && <FaCloudSun className="weather-icon" />}
                    {weatherData.weather[0].main === 'Rain' && <FaCloudRain className="weather-icon" />}
                    {weatherData.weather[0].main === 'Drizzle' && <FaCloudShowersHeavy className="weather-icon" />}
                </div>
            )}
        </div>
    );
};

export default WeatherUpdates;
