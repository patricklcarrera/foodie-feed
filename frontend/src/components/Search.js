import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Search({searchTerm, changeSearch}){
    
    const handleChange = (e) => {
        changeSearch(e.target.value);
    }

    return (
        <div>
            <Form>
            <Form.Group>
                <Form.Control
                    value={searchTerm}
                    type="text"
                    placeholder='Looking for a recipe?'
                    onChange={handleChange}/>
                    </Form.Group>
                </Form>
        </div>
    )
}