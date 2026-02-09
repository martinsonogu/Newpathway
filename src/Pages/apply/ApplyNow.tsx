import { useState } from "react";
import ApplyErrorModal from "@/components/modal/Modal";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  availability: string;
  message: string;
  cv: File | null;
  rightToWork: boolean;
};

const ApplyNow = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    availability: "",
    message: "",
    cv: null,
    rightToWork: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, cv: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white py-2 md:py-4 lg:py-8 px-2 md:px-4 lg:px-8 mt-24">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
         Apply Now
        </h1>
        <p className="mt-2 text-gray-600 font-normal">
          Fill in the form below and we’ll be in touch as soon as possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 rounded-lg bg-white p-8 shadow"
      >
        {/* Personal details */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-[#283646] md:text-[16px] text-[14px] font-[700] block">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-[#FEFFFF] border border-[#ECEEF0] w-full md:h-[56px] h-[46px] md:mt-5 mt-3 p-2 rounded"
            />
          </div>

          <div>
            <label className="text-[#283646] md:text-[16px] text-[14px] font-[700] block">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              required
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-[#FEFFFF] border border-[#ECEEF0] w-full md:h-[56px] h-[46px] md:mt-5 mt-3 p-2 rounded"
            />
          </div>

          <div>
            <label className="text-[#283646] md:text-[16px] text-[14px] font-[700] block">
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#FEFFFF] border border-[#ECEEF0] w-full md:h-[56px] h-[46px] md:mt-5 mt-3 p-2 rounded"
            />
          </div>

          <div>
            <label className="text-[#283646] md:text-[16px] text-[14px] font-[700] block">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-[#FEFFFF] border border-[#ECEEF0] w-full md:h-[56px] h-[46px] md:mt-5 mt-3 p-2 rounded"
            />
          </div>
        </div>

        {/* Role & availability */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-[#283646] md:text-[16px] text-[14px] font-[700] block">
              Role you’re applying for
            </label>
            <select
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="bg-[#FEFFFF] border border-[#ECEEF0] w-full md:h-[56px] h-[46px] md:mt-5 mt-3 p-2 rounded"
            >
              <option value="">Select a role</option>
              <option value="Support Worker">Support Worker</option>
              <option value="Care Assistant">Supervisor</option>
              <option value="Trainee">Volunteer</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="text-[#283646] md:text-[16px] text-[14px] font-[700] block">
              Availability
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="bg-[#FEFFFF] border border-[#ECEEF0] w-full md:h-[56px] h-[46px] md:mt-5 mt-3 p-2 rounded"
            >
              <option value="">Select availability</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        {/* CV upload */}
        <div>
          <label className="text-[#283646] md:text-[16px] text-[14px] font-[700] block">
            Upload your CV
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mt-3 block w-full text-sm text-gray-600 file:mr-4 file:rounded-md file:border-0 file:bg-teal-600 file:px-4 file:py-2 file:text-white hover:file:bg-teal-800"
          />
          <p className="mt-1 text-xs text-gray-500">
            Accepted formats: PDF, DOC, DOCX (max 5MB)
          </p>
        </div>

        {/* Message */}
        <div>
          <label className="text-[#283646] md:text-[16px] text-[14px] font-[700] block">
            Tell us about yourself (optional)
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Experience, qualifications, or why you’re applying"
            className="border border-[#B8BCCA] rounded px-2 py-2 h-[100px] md:h-[150px] w-full md:mt-5 mt-3"
          />
        </div>

        {/* Compliance */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="rightToWork"
            checked={formData.rightToWork}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
          />
          <label className="text-[#283646] md:text-[16px] text-[14px]">
            I confirm that I have the right to work in the UK
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
            className="w-full rounded-md bg-teal-600 px-6 py-3 text-sm font-medium text-white hover:bg-teal-800"
            onClick={() => setIsModalOpen(true)}
        >
          Submit application
              </button>
              {/* Modal */}
      <ApplyErrorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      </form>
    </div>
  );
};

export default ApplyNow;
