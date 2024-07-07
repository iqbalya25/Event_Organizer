// "use client";

// import React, { useState } from "react";
// import PaymentList from "./paymentList";
// import { Payment } from "./paymentModel";
// import PaymentForm from "./paymentForm";
// import PaymentConfirmation from "./paymentconfirmation";

// const Paymentpage = () => {
//   const [payments, setPayments] = useState<Payment[]>([]);
//   const [currentPayment, setCurrentPayment] = useState<Payment | null>(null);

//   const handleAddPayment = (payment: Payment) => {
//     setPayments([...payments, payment]);
//     setCurrentPayment(payment);
//   };

//   return (
//     <div>
//       <section className="container mx-auto p-4">
//         <h2 className="text-2xl font-bold mb-4">Reservation</h2>
//         <PaymentForm onSubmit={handleAddPayment} />
//       </section>
//       <section className="container mx-auto p-4">
//         <h2 className="text-2xl font-bold mb-4">Payment Confirmation</h2>
//         {currentPayment && <PaymentConfirmation payment={currentPayment} />}
//       </section>
//       <section className="container mx-auto p-4">
//         <h2 className="text-2xl font-bold mb-4">Payment List</h2>
//         <PaymentList payments={payments} />
//       </section>
//     </div>
//   );
// };

// export default Paymentpage;
