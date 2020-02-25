import React from "react";
import { withFormik, Form, Field } from "formik";
import CharacterCard from './CharacterCard'

const SearchForm = ({ values, handle }) => {

 
 handle(values)



  return (
    <section className="search-form">
     <Form>
       <label>
         <Field name='name' type='text' placeholder='Search a Character' />
       </label>
     </Form>
    
    </section>
  );
}


export default withFormik({
  mapPropsToValues: props => ({
    name: "",
   })
 
})(SearchForm);