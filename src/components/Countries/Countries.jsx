import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const handleVisited = country => {
        console.log('add this to your visited country')
        console.log(country);
    }
    return (
        <div>
            <h3>Counries: {countries.length}</h3>
            <div>
                <h4>Visited Countries: </h4>
                <ul>

                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country handleVisited={handleVisited} key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;