import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchForm from "./SearchForm";

export default function CharacterList() {

 

  return (

  <div>
    <div><Link to={'/'}><h1>Home</h1></Link></div>
    <SearchForm />
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
