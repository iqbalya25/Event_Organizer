import React from "react";
import AddVoucherForm from "./AddVoucherForm";
import VoucherList from "./VoucherList";

const AddCoupon = () => {
  return (
    <div className="container mx-auto p-4">
      <AddVoucherForm />
      <VoucherList />
    </div>
  );
};

export default AddCoupon;
