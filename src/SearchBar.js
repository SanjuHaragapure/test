import { useState } from 'react';

export function SearchBar(props){
    const [inputSearch, setInputSearch] = useState("");
    
    function handleChange(e){
        console.log(e);
    }
      return (
        <div style={{marginTop: "10px"}}>
          Search :<input type="text"  value={inputSearch} onChange={handleChange()}/>
        </div>
  
      );
  
  }