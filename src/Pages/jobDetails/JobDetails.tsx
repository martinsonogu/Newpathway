import { useNavigate } from "react-router-dom";
import Button from "@/components/button/Button";

const JobDetails = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto bg-white py-2 md:py-4 lg:py-8 px-2 md:px-4 lg:px-8 mt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Support Worker 
      </h1>

      {/* <div className="text-lg text-gray-600 mb-1">Frontend, Engineering</div> */}
      <div className="text-gray-500 mb-6">
        Kent | United Kingdom
      </div>

      <Button variant="secondary" onClick={() => navigate("/apply/support_worker")}>
        Apply Now
      </Button>

      <div className="mt-12 space-y-10 text-gray-700 text-base leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            About the Role
          </h2>
          <p className="mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            We are seeking a compassionate and dedicated Support Worker to join our team. The
            ideal candidate will play a vital role in providing assistance and support to children,
            ensuring their well-being and development. You are expected to provide care in accordance
            with best practice and legislative requirements, reflecting policies and procedures and
            agreed standards under the direction of the service management This position requires effective
            communication skills, the ability to follow care plans, and a genuine interest in childcare.
            
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Duties
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            <li>Provide direct support to children, assisting with daily activities and personal care as needed.</li>
            <li>Implement and adhere to individual care plans, ensuring that each child's unique needs are met.</li>
            <li>Assist in the development of social skills and encourage positive interactions among peers.</li>
            <li>Maintain accurate records of child's progress and any incidents that occur during care.</li>
            <li>Do daily reports on the Clearcare system</li>
            <li>Assisting young persons with their education, whether it be taking them to and from an educational setting and/or assisting with home schooling;</li>
            <li>Communicate effectively with children, and other professionals to promote a supportive environment.</li>
            <li>Collaborate with multidisciplinary teams to ensure comprehensive support for each child.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Basic Requirements
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            <li>BS or degree in any  field</li>
            <li>Proficient in English</li>
            <li>Previous experience working with children is essential; experience in a support worker role is advantageous</li>
            <li>Strong communication skills, both verbal and written</li>
            <li>A valid driving licence is desirable for transportation purposes.</li>
            <li>A caring attitude and the ability to work collab</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Preferred Qualifications
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            <li>1+ years of experience required</li>
            <li>Strong Communication skill</li>
            <li>Experience with working with children</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Equal Opportunity
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            Newpathway1 is an Equal Opportunity employer. We value diversity and do
            not discriminate based on race, religion, gender, or disability.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Button variant="secondary" onClick={() => navigate("/apply/frontend")}>
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default JobDetails;
