
import react from "react";
import "../../styles/find-car-form.css";
/*ikke helt sikker på hvorfor man importerer 2 gange*/
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";


const FindCarForm = () => {
    return ( 
        <Form className="form">
    <div className="d-flex align-items-center justify-content-between flex-wrap">

        <FormGroup className="form__group">
            <input type="text" placeholder="Fra Addresse" required />
        </FormGroup>


        <FormGroup className="form__group">
            <input type="text" placeholder="Til Addresse" required/>
        </FormGroup>

        <FormGroup className="form__group">
            <input type="date" placeholder="Fra Dato" required/>
        </FormGroup>

        <FormGroup className="form__group">
            <input type="time" placeholder="Tid" required/>
        </FormGroup>

        <FormGroup className="select__group">
        <select>
        <option value="Brugt">Brugt Bil</option>    
        <option value="IkkeBrugt">Ikke Brugt Bil</option>
        </select>
        </FormGroup>

        <FormGroup className = "form__group">
            <button className="btn find__car-btn">Find Bil</button>
        </FormGroup>
    </div>
    </Form>
  );  
};

export default FindCarForm;