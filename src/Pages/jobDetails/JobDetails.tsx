import { useNavigate } from "react-router-dom";
import Button from "@/components/button/Button";

const JobDetails = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Support Worker 
      </h1>

      {/* <div className="text-lg text-gray-600 mb-1">Frontend, Engineering</div> */}
      <div className="text-gray-500 mb-6">
        Kent | United Kingdom
      </div>

      <Button variant="primary" onClick={() => navigate("/apply/frontend")}>
        Apply Now
      </Button>

      <div className="mt-12 space-y-10 text-gray-700 text-base leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            About the Role
          </h2>
          <p>
                      lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum
                      lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            What You'll Do
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumloremdards.</li>
            <li>lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorempplications, supports multi-browser environments.</li>
            <li>lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumloremcomponents to solve business problems.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Basic Qualifications
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>BS or higher in any technical field</li>
            <li>Proficient in English</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Preferred Qualifications
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>1+ years of </li>
            <li>Strong Communication skill</li>
            <li>Experience with working with children</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Equal Opportunity
          </h2>
          <p>
            Newpathway1 is an Equal Opportunity employer. We value diversity and do
            not discriminate based on race, religion, gender, or disability.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Button variant="primary" onClick={() => navigate("/apply/frontend")}>
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default JobDetails;
