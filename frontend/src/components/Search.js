import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Search({searchTerm, changeSearch}){
    
    const handleChange = (e) => {
        changeSearch(e.target.value);
    }

    return (
      
        <InputGroup className="mb-3" style={{"padding": "10px", "width" : "50%", "margin": "auto"}}>
          <InputGroup.Text id="inputGroup-sizing-default">
            Search
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={searchTerm}
            type="text"
            placeholder='Looking for a recipe?'
            onChange={handleChange}
          />
        </InputGroup>

    )
}