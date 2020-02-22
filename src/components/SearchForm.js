import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from 'axios'
import CharacterCard from './CharacterCard'

const SearchForm = ({ values }) => {

  const [data, setData] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then(response =>{
      const characters = response.data.results.filter(item =>
      item.name.toLowerCase().includes(values.name.toLowerCase())
      );
  
      setData (characters);
      console.log(data)
      console.log(values.name)
    })
    .catch(error => console.log(error));
  }, [values]);
 



  return (
    <section className="search-form">
     <Form>
       <label>
         <h2>Search A Character</h2>
         <Field name='name' type='text' placeholder='Search a Character' />
       </label>
     </Form>
     <div className="character-list">
      <CharacterCard data={data} />
      </div>
    </section>
  );
}


export default withFormik({
  mapPropsToValues: props => ({
    name: "",
   })
 
})(SearchForm);