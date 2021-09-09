import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";



const Form = () => {
    
    //what are the categories from the API call? Store them in state
    const [categories, setCategories] = useState([])
    
    //what are the clients inputs from the form? Store them in state
    //for use in dynamic API url endpoints
    const [formInfo, setFormInfo] = useState({
        category:"planets",
        id:""
    })

    //useHistory is intialized to help us redirect to different endpoints
    const history = useHistory();

    //use axios to get categories ---> GET request
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response=>{
                console.log("response looks like -->", response)
                console.log(Object.keys(response.data))
                setCategories(Object.keys(response.data))
            })
            .catch(err=>console.log(err))
    },[])


    //inputs to form 
    const changeHandler= (e)=>{
        console.log("Client entering new information******")
        console.log(e.target.value, e.target.name)
        setFormInfo({
            ...formInfo, 
            [e.target.name]:e.target.value
        })
    }

    //use dynamic variables for client inputs to query endpoints
    const submitHandler= (e) => {
        e.preventDefault();
        console.log("Query Inputs Submitted*******")
        console.log(formInfo)
         //redirects us to new route on submit
        history.push(`/${formInfo.category}/${formInfo.id}`)
    }


    return (
        <div className="d-flex mx-auto mt-4">
            <form 
            onSubmit = {(e) => {submitHandler(e)
            }} 
            className="form-inline row g-3 align-items-center"
            >
                <div className="col-auto input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupCategories">Categories</label>
                    </div>
                    <select 
                    onChange ={(e)=> {changeHandler(e)
                    }} 
                    name="category" 
                    className="custom-select"
                    id="inputGroupCategories"
                    >
                        {
                        categories.map((category,i) =>{
                            return <option key ={i} value={category}>{category}</option>
                            })
                        }
                    </select>
                </div>
                <div className="col-auto input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Id Number</span>
                    </div>
                    <input 
                    onChange ={(e)=> {changeHandler(e)
                    }}
                    name ="id"  
                    type="number" 
                    className="formControl"
                    /> 
                </div>
                <div className="col-auto input-group mb-3">
                    <input 
                    onChange ={(e)=> {changeHandler(e)
                    }}
                    type="submit"  
                    value="Search" 
                    className="btn btn-secondary"
                    />   
                </div>            
            </form>  
        </div>
    );
};


export default Form;