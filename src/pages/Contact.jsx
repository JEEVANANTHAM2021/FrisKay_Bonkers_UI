import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { assets } from '../assets/assets'
import Textation from '../components/Textation'
import { useState } from 'react'

const enquiryFields = {
  general: [
    { name: "email",  label: "Email", type: "email"},
    { name: "message", label: "Message", type: "textarea" },
    
  ],
  support: [
    { name: "orderId", label: "Order ID", type: "text" },
    { name: "date", label: "Order Date", type: "date" },
    { name: "issue", label: "Issue Description", type: "textarea" },
  ],
  feedback: [
    { name: "rating", label: "Rating (1–5)", type: "number" },
    { name: "comments", label: "Comments", type: "textarea" },
  ],
  collaboration: [
    { name: "collab", label: "Collab ID", type: "text" },
    { name: "proposal", label: "Proposal Details", type: "textarea" },
  ],
};

const Contact = () => {
      const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    enquiryType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };
  return (
    <section className='w-full overflow-x-hidden bg-[#FFEBC3]'>
        <div className='px-4 md:px-8 lg:px-16 py-4'>
            <Navbar />
        </div>
    {/*-------- Contact Area ------------ */}
        <div className='px-4 md:px-8 lg:px-16 py-4'>
    {/* ------- Left Side Content ---------- */}
            <div className='flex flex-col gap-8 lg:flex-row border border-gray-100 rounded-4xl shadow-md bg-white p-6 md:p-6 mt-6'>
            <div className="flex-1 justify-center">
            <h3 className="font-['FatFrank'] text-3xl sm:text-4xl lg:text-7xl font-bold text-[#FFEBC3] mb-4">
            GET IN TOUCH
            </h3>

            <p className="font-['RooneySansRegular'] text-sm text-start sm:text-base lg:text-lg font-normal text-gray-900">
            If you’ve got snacks on the brain and want to drop us a line, 
            (or have a pet meme you want to share) we’d love to hear from you.
            </p>

            <form onSubmit={handleSubmit}
                className="w-full max-w-xl bg-white/80 rounded-2xl shadow-lg p-8">
    {/* First Name */}
            <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-1/2 mb-4 px-4 py-3 font-['rooneySansRegular'] flex-1 "/>

    {/* Last Name */}
            <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-1/2 mb-4 px-4 py-3 font-['rooneySansRegular'] flex-1"/>

    {/* Enquiry Type */}
            <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                required
                className="w-full flex mb-6 px-4 py-3 font-['rooneySansRegular'] border rounded-lg">
                <option value="">Select Enquiry Type</option>
                <option value="general">General Enquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
                <option value="collaboration">Collaboration</option>
            </select>

    {/* Dynamic Fields */}
            {enquiryFields[formData.enquiryType]?.map((field) => (
                <div key={field.name} className="mb-4">
                    <label className="block mb-1 font-['Dinosaur']">
                    {field.label}
                    </label>

            {field.type === "textarea" ? (
                <textarea
                    name={field.name}
                    rows="4"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border font-['rooneySansRegular'] rounded-lg"/>
                ) : (
                <input
                    type={field.type}
                    name={field.name}
                    onChange={handleChange}
                    required
                    className="w-1/2 px-4 py-2 font-['rooneySansRegular'] border rounded-lg"/>
                )}
                </div>
            ))}

    {/* Submit */}
            <button
                type="submit"
                className="px-8 justify-center font-['Dinosaur'] items-center mt-6 bg-amber-400 hover:bg-amber-500 py-3 rounded-xl font-bold transition">
                Submit
            </button>
            </form>
        </div>

      {/* ------- Right Side Banner ---------- */}
            <div className="flex-1 flex sticky items-start">
                <img
                className="w-full max-w-md lg:max-w-full rounded-3xl object-cover"
                src={assets.carousel_image3}
                alt="banner_image"/>
            </div>
        </div>
    </div>
     {/* --------- Textation Motion ---------- */}
    <Textation className="font-['Dinosaur'] bg-[#FFD715]">
       <span className="mx-8"> YUMMO</span>
        <span className="mx-8"> MULTI-AWARD WINNING</span>
        <span className="mx-8"> OVER 15000 FIVE STAR REVIEWS</span>
        <span className="mx-8"> NO ARTIFICIAL NASTIES</span>
        <span className="mx-8"> FORMULATED BY ANIMALS NUTRITIONISTS</span>
        <span className="mx-8"> VIRAL TIK-TOK TREAT</span>
    {/* duplicate for seamless loop */}
        <span className="mx-8"> YUMMO</span>
        <span className="mx-8"> MULTI-AWARD WINNING</span>
        <span className="mx-8"> OVER 15000 FIVE STAR REVIEWS</span>
        <span className="mx-8"> NO ARTIFICIAL NASTIES</span>
        <span className="mx-8"> FORMULATED BY ANIMALS NUTRITIONISTS</span>
        <span className="mx-8"> VIRAL TIK-TOK TREAT</span>
    </Textation>

{/*----------- Footer ---------------- */}
      <Footer />
    </section>
  )
}

export default Contact
