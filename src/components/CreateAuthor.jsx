import React,{ useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

import '../App.css';
const CreateAuthor = (props) => {
    const [name,setName]=useState("");
    const navigate = useNavigate();
    const [errors,setErrors] = useState([]);
    
    const makeAuthor=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors",{name:name})
        .then(res=>navigate('/'))
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
              errorArr.push(errorResponse[key].message)
          }
          // Set Errors
          setErrors(errorArr);
      })
    }
  return (
    <div className='App'>
        <Link to={"/"}>Home</Link>
        
        <br />
        <br />
        
        <form onSubmit={makeAuthor}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
            Name:
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <br />
            <br />
            <button style={{backgroundColor:"deeppink",color:"white"}}>Add</button>
        </form>
        <br />
        <button style={{backgroundColor:"darkblue",color:"white"}} onClick={()=>navigate('/')}>Cancel</button>
    </div>
  )
}

export default CreateAuthor