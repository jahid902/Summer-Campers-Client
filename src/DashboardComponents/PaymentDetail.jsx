import React, { useContext, useEffect, useState } from "react";
import Title from "../Shared/Title";
import { AuthContext } from "../Provider/AuthProvider";

const PaymentDetail = () => {
  const [payments, setPayments] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_api_url}/userEnrolledClasses?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPayments(data);
      });
  }, []);

  return (
    <>
      <div className="w-11/12 mx-auto my-2 md:my-4">
        <Title title="Payment History" text={`${user?.displayName} here is your payment history in case of any need.`} subText="" colorText=""></Title>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-md">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Payment ID</th>
              <th>Payment Date</th>
              
            </tr>
          </thead>
          <tbody>

          {payments.map((payment,i)=>(
                <tr key={payment?._id}>
                <th>{i+1}</th>
                <td>{payment?.name}</td>
                <td>{payment?.transactionId}</td>
                <td>{payment?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </>
  );
};

export default PaymentDetail;
