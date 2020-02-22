import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from 'axios'

const SearchForm = ({ values }) => {

  const [query, setQuery] = useState('')
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
      {data.map(item => (
        <div>
        <h2>{item.name}</h2>
        <img src={item.image} />
        </div>
      ))}
      </div>
    </section>
  );
}


export default withFormik({
  mapPropsToValues: props => ({
    name: "",
   })
  // handleSubmit: (values, { resetForm, setStatus }) => {
  //   // console.log("Submitting!", formikBag)
  //   // POST body === {}
  //   axios
  //     .post("https://reqres.in/api/users/", values)
  //     .then(response => {
  //       setStatus(response.data);
  //       alert("Your information was submitted");
  //       resetForm();
  //     })
  //     .catch(err => console.log(err.response));
  // },
  // validationSchema: yup.object().shape({
  //   name: yup
  //     .string()
  //     .required("Required!"),
  //   email: yup
  //   .string()
  //   .email('Add a valid email'),
  //   password: yup
  //   .string()
  //   .min(8)
  // }),
})(SearchForm);