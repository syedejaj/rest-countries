import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisited, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleClick = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'green' }}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Land Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <div className='btn-align'>
                <button className='country-btn' onClick={handleClick}>{visited ? "Visited" : "Going"}</button>
                <button onClick={() => handleVisited(country)} className='mark-btn'>Mark Visited</button>
                <button onClick={() => handleVisitedFlags(country.flags.png)} className='mark-btn'>Add Flag</button>
            </div>
            {
                visited ? 'I have visited this country' : 'I want to visit this country'
            }
        </div>
    );
};

export default Country;