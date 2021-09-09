import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import ewok from './ewok.jpg'

const Display = () => {

    //declare the object parameters for use in the component
    const {category, id} = useParams();
    
    //use state to store the info targeted from the API call using the params
    const [info, setInfo] = useState({})

    // const ewok = require("./public/ewok.jpeg")

    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response=> {
                console.log(response)
                setInfo(response.data)
            })
            .catch(err=>console.log(err))
    }, [category, id])

//run the useEffect() for initial rendering of component
//and when the params category or id change re-render

    return (
        <div className = "card">
            <div className = "card-body mx-5">
                <h2>Details from: <em>{category} #{id}</em></h2>
                
                {
                category === "people"?
                <>
                    <h3>Name: {info.name}</h3>
                    <h3>Height: {info.height}</h3>
                    <h3>Mass: {info.mass}</h3>
                </>:
                category === "planets"?
                <>  
                    <h3>Name: {info.name}</h3>
                    <h3>Climate: {info.climate}</h3>
                    <h3>Terrain: {info.terrain}</h3>
                </>:
                category === "species"?
                <>  
                    <h3>Name: {info.name}</h3>
                    <h3>Classification: {info.classification}</h3>
                    <h3>Designation: {info.designation}</h3>
                </>:
                    <div>
                        <em><h4>Keep spaceship sailing through the ether...</h4></em>
                        <img src={ewok} style={{width:"500px"}} />
                    </div>

                }
            </div>
        </div>
    );
};

export default Display;