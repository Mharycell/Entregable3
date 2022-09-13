import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Location = ({url}) => {

    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`${url}`)
            .then(res => {
                setData(res.data)
                console.log(res.data)})           
    })

    
    return (
        <div>
            <h1>{data.name}</h1>
            <img src={data.image} alt="" />
        </div>
    );
};

export default Location;