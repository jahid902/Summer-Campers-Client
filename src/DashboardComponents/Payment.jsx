import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../Shared/Title';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../PaymentForm/CheckoutForm';
import { useState } from 'react';

const stripePromise = loadStripe(`${import.meta.env.VITE_PK_KEY}`);

const Payment = () => {

    const {id} = useParams()
    const [classInfo, setClassInfo] = useState(null);
    
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_api_url}/oneClass/${id}`)
        .then(res=> res.json())
        .then(data=> {
            setClassInfo(data)
        })
    },[])
    

    return (
        <>
        <Title 
        title="Make Payment $" 
        text="Make payment to successfully enroll for the class."
        subText=""
        colorText=""
        ></Title>
        
        <Elements stripe={stripePromise}>
            <div className='w-3/4 mx-auto bg-gray-200 rounded-md p-10' >
            <CheckoutForm classInfo={classInfo}></CheckoutForm>
            </div>
        </Elements>
        
        </>
    );
};

export default Payment;