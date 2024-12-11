import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisited }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleClick = () => {
        setVisited(!visited);
    }
    console.log(handleVisited);
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'green' }}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Land Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <div className='btn-align'>
                <button className='country-btn' onClick={handleClick}>{visited ? "Visited" : "Going"}</button>
                <button className='mark-btn'>Mark Bucket List</button>
            </div>
            {
                visited ? 'I have visited this country' : 'I want to visit this country'
            }
        </div>
    );
};

export default Country;