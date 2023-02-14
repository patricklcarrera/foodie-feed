import React from 'react';

export default function Search({searchTerm, changeSearch}){
    
    const handleChange = (e) => {
        changeSearch(e.target.value);
    }

    return (
        <div>
            <input
                value={searchTerm}
                type="text"
                placeholder='Looking for a recipe?'
                onChange={handleChange}/>
        </div>
    )
}