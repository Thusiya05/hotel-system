
import React from 'react';
// import './App.css';
import PaymentModal from '../PaymentModal/PaymentModal';

function Payment() {
  return (
    <div className="Payment">
      <PaymentModal
	// Use a unique value for the orderId
	orderId={45896588}
	name="Adventure Base Camp, Kitulgala"
	amount="4500"
      />
    </div>
  );
}

export default Payment;