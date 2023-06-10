import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import './CheckoutForm.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



const CheckoutForm = ({classInfo}) => {
    const stripe = useStripe();
    const elements = useElements();

    const {user} = useContext(AuthContext)
    const [showError, setShowError] = useState('')
    const [clientSecret, setClientSecret] = useState('');

    const navigate = useNavigate();


    useEffect(()=>{
        if(classInfo?.price){
            fetch(`${import.meta.env.VITE_api_url}/create-payment-intent`,{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({price: classInfo.price})
            })
            .then(res=>res.json())
            .then(data=> {
                setClientSecret(data.clientSecret)
            })
        }
    },[classInfo])
  
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setShowError(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }

      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName,
              email: user?.email
            },
          },
        },
      );

      if (confirmError) {
        console.log('[error]', confirmError);
        setShowError(confirmError.message)
      } else {
        console.log('[paymentIntent]', paymentIntent);
        if(paymentIntent.status === 'succeeded'){
            const classPaymentInfo = {
                ...classInfo,
                transactionId: paymentIntent.id,
                date: new Date()
              }

              fetch(`${import.meta.env.VITE_api_url}/enrolledClass`,{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(classPaymentInfo)
              })
              .then(res=> res.json())
              .then(info=> {
                console.log(info)
                if(info.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Payment successful',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    navigate('/dashboard/enrolled') 
                }
              })

        }


      }

    };
  
    return (
      <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-outline btn-secondary btn-sm' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {showError && <p className='text-red-500 mt-4 ml-4'>{showError}</p>} 
      </>
    );
  };


export default CheckoutForm;