import React from 'react';
import {Container,Form,Col,Button, Table, Modal, Row} from 'react-bootstrap'
// import './payment_modal.css'

const PaymentModal = ({ orderId, name, amount }) => {
    
  // Put the payment variables here
  var payment = {
    sandbox: true, // if the account is sandbox or real
    merchant_id: '1218592', // Replace your Merchant ID
    return_url: 'http://143.244.133.116:3000/',
    cancel_url: 'http://143.244.133.116:3000/MyBookings',
    notify_url: 'http://143.244.133.116:3000',
    order_id: orderId,
    items: name,
    amount: amount, 
    currency: 'LKR',
    first_name: 'Saman',
    last_name: 'Perera',
    email: 'samanp@gmail.com',
    phone: '0771234567',
    address: 'No.1, Galle Road',
    city: 'Colombo',
    country: 'Sri Lanka',
    delivery_address: 'No. 46, Galle road, Kalutara South', // optional field
    delivery_city: 'Kalutara', // optional field
    delivery_country: 'Sri Lanka', // optional field
    custom_1: '', // optional field
    custom_2: '', // optional field
  };
    
  // Called when user completed the payment. It can be a successful payment or failure
  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
    //Note: validate the payment and show success or failure page to the customer
  };

  // Called when user closes the payment without completing
  window.payhere.onDismissed = function onDismissed() {
    //Note: Prompt user to pay again or show an error page
    console.log("Payment dismissed");
  };

  // Called when error happens when initializing payment such as invalid parameters
  window.payhere.onError = function onError(error) {
    // Note: show an error page
    console.log("Error:"  + error);
  };

  function pay(){
    window.payhere.startPayment(payment);
  }

  return (<Button  
  style={{
      minHeight: "5rem",
      minWidth: "10rem",
      // padding: "0rem 0rem 0rem 38rem",
      marginTop: "6rem",
      marginLeft: "38rem",
      textAlign: "center",
      color: "red",
      }} onClick={pay}>Pay with Payhere</Button> 
       )
};

export default PaymentModal;