import React, { useEffect, useState } from "react";
import axios from 'axios'
import SearchForm from "./SearchForm";
import LocationCard from './LocationCard'

const LocationsList = () => {

    const [ data, setData] = useState([])
    const [query, setQuery] = useState('')
  
    const handle = value => {
  
      setQuery(value)
      console.log(query)
  
    }
  
    useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
      .get(`https://rickandmortyapi.com/api/location`)
      .then(response =>{
        const locations = response.data.results.filter(item =>
        item.name.toLowerCase().includes(query.name.toLowerCase())
        );
    
        setData (locations);
        console.log(query)
    
      })
      .catch(error => console.log(error));
    }, [query]);
  
    return (
  <section>
    <div>
    <h2>Search a Location</h2>
      <SearchForm handle={handle} data={data}  />
    </div>
     <div className="character-list">
    
    {data.map(item => (
     <LocationCard data={item} />
    ))}
    </div>
  </section>
    );
  }

export default LocationsList;