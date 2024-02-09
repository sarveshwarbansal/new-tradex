import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import scanner from '../assets/scanner.png'

const Subscription = () => {
  return (
    <div className="w-full bg-slate-950 h-full">
      <div className="w-full p-8 flex justify-between items-center pb-16 px-16">
        <a href="/">
          <Image src={logo} alt="optionx" loading="lazy" />
        </a>
        <button className="text-white"> Close</button>
      </div>

      <div className="w-full flex sm:gap-8 md:gap-48 items-center p-16 sm:px-8 md:px-32">
        <div className="w-full sm:w-1/2 md:w-1/3 text-white border border-2 rounded-md border-[#281D54]">
          <h3 className="flex items-center justify-center text-2xl my-6">Payment</h3>
          <div className="flex items-center justify-between text-white px-4 py-2">
            <p className="text-[#ABACB7]">Plan</p>
            <p className=""> Quarterly</p>
          </div>
          <div className="flex items-center justify-between text-white px-4 py-2">
            <p className="text-[#ABACB7]">Price</p>
            <p className=""> ₹ 6597.00</p>
          </div>
          <div className="flex items-center justify-between text-white px-4 mb-4">
            <p className="text-[#ABACB7]">Discount</p>
            <p className=""> - ₹ 3898.00</p>
          </div>
          <hr className=""/>
          <div className="flex items-center justify-between text-white p-4 ">
            <p className="text-[#ABACB7] font-medium text-[22px]">Amount</p>
            <p className="text-[22px]"> ₹ 2699.00</p>
          </div>
          <div className="flex flex-col items-center justify-center py-8">
        <Image src={scanner} alt="scanner" loading="lazy" />
        <p className="text-blue-300">Scan this QR to pay</p>
        </div>
        </div>

        <div className="sm:w-1/2 md:w-2/3 ">
         <div className="text-center py-8">
           <span className="text-white text-2xl  ">Once Sucessfully paid,
           <br/>
           </span>
           <span className="text-white text-2xl py-4"> Please Enter </span>
           <span className="text-emerald-200 text-2xl">last 5 digit</span>
           <span className="text-white text-2xl"> of your UPI transaction ID</span>
         </div>
       
         <div className="flex justify-center items-center space-x-4 py-4">
      {/* Add five input fields for OTP */}
      <input type="text" className="w-10 h-10 text-center border-b border-dashed border-white bg-slate-950 text-white" />
      <input type="text" className="w-10 h-10 text-center border-b border-dashed border-white bg-slate-950 text-white"  />
      <input type="text" className="w-10 h-10 text-center border-b border-dashed border-white bg-slate-950 text-white"  />
      <input type="text" className="w-10 h-10 text-center border-b border-dashed border-white bg-slate-950 text-white" />
      <input type="text" className="w-10 h-10 text-center border-b border-dashed border-white bg-slate-950 text-white"  />
    </div>
         <div className="flex flex-col justify-center items-center py-4">
           <input type="tel" name="phone" id="phone" placeholder="Enter Phone Number" className="bg-slate-950 text-white border border-2 border-[#281D54] px-2.5 mb-4"/>
           <button className="flex justify-center items-center  text-white border-indigo-500 rounded-full bg-indigo-500 p-2">
             Confirm Payment

           </button>
           
         </div>
<div className="flex justify-center">
         <p className="text-slate-600 text-center">Having Trouble through QR ?</p>
         <a href="#" className="text-indigo-500 underline text-base">click here</a>
         </div>
         <p className="text-center text-gray-400 py-8">Your subscription will be activated immediately after payment!</p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
