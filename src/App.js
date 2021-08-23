import logo from './logo.svg';
import './App.css';
import {useState, useRef} from 'react';
import {SearchBar} from './SearchBar';
function App() {

  const personName = useRef("");
  const personEmail = useRef("");
  
  const [personList, setPersonList] = useState([]);
  
  const [personDetailsView, setpersonDetailsView] = useState("");

  function addPersonDetailsView(){
    setpersonDetailsView("addView");
  }


  function personEditView(person){
      console.log(person);
    //setpersonDetailsView("EditView");
  }
  

  function addPersonDetails(){
    setPersonList([...personList, {id:personList.length+1, name: personName.current.value, email: personEmail.current.value }]);
  }


  function getPersonList(){
    return personList.map((person) => {
        return (
            <tr key={person.id} onClick={personEditView(person)}>
            <td>
            {person.id}
          </td>

          <td  >
          {person.name}
          </td>
          <td >
          {person.email}
          </td>
          </tr>
          
        );
    });
  }

  const [currentSearch, setCurrentSearch] = useState("");
  function setSearch(value){
      setCurrentSearch(value);
  }


  return (
    <div className="App">
      <div>
      <SearchBar onUserInput={setSearch} ></SearchBar>
         <button style={{marginTop: "10px"}} type="button" onClick={addPersonDetailsView} className="btn btn-success pull-right">Add</button>
      </div>
      
    <div>
      <span>
            
            <table border="1">
            <thead>
             <tr>
             <th>
             Id
             </th>
             <th>
             Name
             </th>

             <th>
             Email id
             </th>

             </tr>

            </thead>
            <tbody>
            {getPersonList()}
            </tbody>
            </table>
        </span>


        <span>
           { personDetailsView == "addView" &&
               <div> <div>id: {personList.length+1}</div>
                    <div>name: <input type="text"  ref={personName} /></div>
                    <div>email: <input type="text"  ref={personEmail} /></div>
                    <button style={{marginTop: "10px"}} type="button" onClick={addPersonDetails} className="btn btn-success pull-right">Submit</button>
               </div>

               
              
                    
           }
           { personDetailsView == "EditView" &&
               "Edit"
               
           }

        </span>
        </div>






    </div>
  );
}

export default App;
