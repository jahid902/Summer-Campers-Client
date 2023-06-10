import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../Shared/Title';

const Payment = () => {

    const {id} = useParams()
    console.log(id);

    return (
        <>
        <Title 
        title="Make Payment !!" 
        text="Make payment to successfully enroll for the class."
        subText=""
        colorText=""
        ></Title>
        
        </>
    );
};

export default Payment;