import logo from './logo.svg';
import './App.css';
import {useState, useRef} from 'react';
import {SearchBar} from './SearchBar';
function App() {

  const personName = useRef("");
  const personEmail = useRef("");

  
  const [personList, setPersonList] = useState([]);
  
  const [personDetailsView, setpersonDetailsView] = useState("");
  const [personEdit, setPersonEdit] = useState({id:"", name:"", email:""});

  function addPersonDetailsView(){
    setpersonDetailsView("addView");
  }


  function personEditView(person){
      console.log(person);
      setpersonDetailsView("EditView");
      setPersonEdit(person);
  }
  

  function addPersonDetails(){
    setPersonList([...personList, {id:personList.length+1, name: personName.current.value, email: personEmail.current.value }]);
    setpersonDetailsView("");
  }

  function editPersonDetails(person){
    console.log("person=",person);
    let newPersonList = personList.reduce((listEle, ele) =>
        {  
            if(!listEle){
                listEle =[];
            }
            if(ele.id!=person.id){
                listEle.push(ele);
            }
            else{
                listEle.push(person);
            }
            return listEle;
        }, []);

    setPersonList(newPersonList);
    setpersonDetailsView("");
  }


  function getPersonList(){
    return personList.filter(person => 
        currentSearch === "" ? true: person.name.includes(currentSearch) ).map((person) => {
        return (
            <tr key={person.id} data-item={person} onClick={() => personEditView(person)}>
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
      
    <div className="personView">
      <div>
            
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
        </div>


        <div>
           { personDetailsView == "addView" &&
               <div>Add <div>id: {personList.length+1}</div>
                    <div>name: <input type="text"  ref={personName} /></div>
                    <div>email: <input type="text"  ref={personEmail} /></div>
                    <button style={{marginTop: "10px"}} type="button" onClick={addPersonDetails} className="btn btn-success pull-right">Submit</button>
               </div>
           }
           { personDetailsView == "EditView" &&
               
               <div>Edit
                <div>id: {personEdit.id}</div>
                    <div>name: <input type="text" defaultValue={personEdit.name} ref={personName}  /></div>
                    <div>email: <input type="text" defaultValue={personEdit.email} ref={personEmail}    /></div>
                    <button style={{marginTop: "10px"}} type="button" onClick={()=>editPersonDetails({id: personEdit.id, name: personName.current.value, email:personEmail.current.value })} className="btn btn-success pull-right">Submit</button>
               </div>
               
           }
        </div>
        </div>
    </div>
  );
}

export default App;
