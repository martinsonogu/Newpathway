import Title from "@/components/title/Title";
import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className=" max-w-6xl mx-auto bg-white py-2 md:py-4 lg:py-8 px-2 md:px-4 lg:px-8 mt-24">
      {/* <h1 className="mb-8 text-3xl font-bold text-[#283646]">
        Privacy Policy
      </h1> */}
           <Title text="Privacy Policy" className="mb-8 " />
{/* mx-auto max-w-4xl px-4 py-16 */}
      <section className="space-y-6 text-gray-700 leading-relaxed">
        <p className="mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you use our website or submit an
          application.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-[#283646] mb-2">
            Who we are
          </h2>
          <p className="mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            Newpathway1 is responsible for the processing of personal data
            collected through this website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#283646] mb-2">
            What information we collect
          </h2>
          <ul className="list-disc pl-6 space-y-1 mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            <li>Name and contact details</li>
            <li>Email address and phone number</li>
            <li>CVs and application information</li>
            <li>Any information you provide via contact or application forms</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#283646] mb-2">
            How we use your information
          </h2>
          <ul className="list-disc pl-6 space-y-1 mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            <li>To process job applications</li>
            <li>To respond to enquiries</li>
            <li>To improve our services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#283646] mb-2">
            CVs and job applications
          </h2>
          <p className="mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            Any CVs or application details you submit will be used solely for
            recruitment purposes. We will not share your information with third
            parties without your consent unless required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#283646] mb-2">
            Data retention
          </h2>
          <p className="mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            We will only retain your personal data for as long as necessary to
            fulfil the purposes outlined in this policy or as required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#283646] mb-2">
            Your rights
          </h2>
          <p className="mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            Under UK GDPR, you have the right to request access to, correction
            of, or deletion of your personal data. You may also object to or
            restrict certain types of processing.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#283646] mb-2">
            Contact us
          </h2>
          <p className="mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            If you have any questions about this Privacy Policy or how your data
            is handled, please contact us at:
          </p>
          <p className="font-medium mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            info@newpathway1.co.uk
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
