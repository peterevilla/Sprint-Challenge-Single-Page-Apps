import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then(response => {
      setData(response.data.results)
    })
    .catch(error => console.log(error));
  }, []);

console.log(data)

  return (

  <div>
    <div><Link to={'/'}><h1>Home</h1></Link></div>
    <SearchForm data={data} />
    <section className="character-list">
      
      {/* {data.map(item => (
        <div>
        <h2>{item.name}</h2>
        <img src={item.image} />
        </div>
      ))} */}
    </section>
  </div>
  );
}
