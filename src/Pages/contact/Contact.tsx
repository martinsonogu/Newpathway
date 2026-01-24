import React, { useState } from 'react'
import Button from '../../components/button/Button';
import ContactImg from '../../assets/ContactImg.svg'

const Contact = () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value.slice(0, 1000);
    setInputValue(newValue);
  };
 

  return (

<section id="contact" className="w-full bg-primary_color_white">
  <div className="my-10 w-full max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row w-full">
      {/* LEFT COLUMN */}
      <div className="w-full lg:w-[57%] lg:bg-[#F8F9FA] md:p-10 py-3 px-2">
        <h1 className="md:text-left text-center md:text-[48px] text-[30px] font-[700] md:mt-[16px] mt-[10px]">
          Get in Touch
        </h1>

        <p className="text-[#999999] md:text-[16px] text-[14px] font-normal mt-[16px] md:text-left md:w-3/4 w-full text-justify">
          Our team is available to answer questions, provide information, and explore care options tailored to individual needs.
        </p>
        <p className="mb-[40px] text-[#999999]">
            Alternatively, Reach us anytime at{" "}
            <a
            href="mailto:info@newpathway1.co.uk"
            className=" underline text-teal-500"
            >
            info@newpathway1.co.uk
            </a>
        </p>
        <div className="flex md:flex-row flex-col items-center gap-4">
          <div className="flex flex-col items-start w-full">
            <label className="text-[#283646] md:text-[16px] text-[14px] font-[700]">
              Full Name
            </label>
            <input
              type="text"
              className="bg-[#FEFFFF] border border-[#ECEEF0] w-full md:h-[56px] h-[46px] md:mt-5 mt-3 p-2"
              placeholder="Input your full name in here"
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <label className="text-[#283646] md:text-[16px] text-[14px] font-[700]">
              Email address
            </label>
            <input
              type="email"
              className="bg-[#FEFFFF] border border-[#ECEEF0] w-full md:h-[56px] h-[46px] md:mt-5 mt-3 p-2"
              placeholder="Input your email address in here"
            />
          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          <label className="text-[#283646] md:text-[16px] text-[14px] md:mt-5 mt-3 font-[700]">
            Subject
          </label>
          <input
            type="text"
            className="bg-[#FEFFFF] border border-[#ECEEF0] w-full md:h-[56px] h-[46px] md:mt-5 mt-3 p-2"
          />
        </div>

        <p className="text-left text-[#283646] md:text-[16px] text-[14px] font-[700] md:mt-5 mt-3">
          Messages
        </p>

        <textarea
          value={inputValue}
          onChange={handleChange}
          className="border border-[#B8BCCA] rounded px-2 py-2 h-[100px] md:h-[150px] w-full md:mt-5 mt-3"
          placeholder="Write your message in here"
          style={{ resize: "none" }}
        />

        <div className="mt-10">
          <Button variant="secondary">Send message</Button>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="hidden lg:block lg:w-[43%]">
        <img
          src={ContactImg}
          alt="Contact"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>

  )
}

export default Contact