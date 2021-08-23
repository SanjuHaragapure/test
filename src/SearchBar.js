import { useRef } from 'react';

export function SearchBar(props){
    const inputSearch = useRef("");
    
    function handleChange(e){
        console.log(e.target.value);
        props.onUserInput(e.target.value);
    }
      return (
        <div style={{marginTop: "10px"}}>
          Search :<input type="text"  ref={inputSearch} onChange={(e)=>handleChange(e)}/>
        </div>
  
      );
  
  }