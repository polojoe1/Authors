import React, {useState,useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import '../App.css';

const ShowAll = (props) => {
    const [authors,setAuthors]=useState([]);
    const navigate = useNavigate()
    const deleteAuthor = (id)=>{
        axios.delete("http://localhost:8000/api/authors/"+id)
        .then(setAuthors(authors.filter(el=>el._id!==id?true:false)))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then(res=>setAuthors(res.data))
        .catch(err=>console.log(err))
    })
  return (
    <div>
        <Link to={"/authors/create"}>Add an author</Link>
        <br />
        <br />
        <div className='App'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author=>{
                        return (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td><button onClick={()=>navigate('/authors/edit/'+author._id)}>Edit</button> <button onClick={()=>deleteAuthor(author._id)}>Delete</button></td>
                            </tr>
                        )


                        
                    })}
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default ShowAll