import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllTeachers = () => {

    const [teachers, setTeachers] = useState();

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_api_url}/allTeachers`)
        .then(data=>{
            console.log(data.data);
            setTeachers(data.data)
        })
    },[])

    return (
        <div>
            {teachers.length}
        </div>
    );
};

export default AllTeachers;