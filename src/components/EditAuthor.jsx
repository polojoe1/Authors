import React,{useState, useEffect} from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
const EditAuthor = (props) => {
    const {id}= useParams();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/"+id)
        .then(res=>setName(res.data.user.name))
        .catch(err=>console.log(err))
    },[id])
    const [name,setName]=useState("");
    const navigate = useNavigate();
    const [errors,setErrors] = useState([]);
    const makeAuthor=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/"+id,{name:name})
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

export default EditAuthor