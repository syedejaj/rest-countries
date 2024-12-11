import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setvisitedFlags] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const handleVisited = country => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags = flag => {
        const newVisitedFlag = [...visitedFlags, flag];
        setvisitedFlags(newVisitedFlag);
    }
    return (
        <div>
            <h3>Counries: {countries.length}</h3>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country handleVisitedFlags={handleVisitedFlags} handleVisited={handleVisited} key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;