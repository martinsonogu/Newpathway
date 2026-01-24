import FacilityRow from "../../components/facility_row/FacilityRow";
import Relaxation from "../../assets/relaxation.jpg"

const Facilities: React.FC = () => {
  return (
    <section className=" mx-auto px-4 py-12">
      <h2 className="text-2xl mb-10 font-bold font-[poppins] text-teal-500">
        Facilities and Activities
      </h2>

      <FacilityRow
        title="Games Room"
        description="The games room supports social interaction, teamwork, and communication skills through structured and informal activities, including board games and interactive gaming."
        image={Relaxation}
        alt="Games room at the outreach centre"
      />

      <FacilityRow
        title="Sensory Room"
        description="The sensory room is designed to support emotional regulation and reduce anxiety. It provides a calm, low-stimulus environment with sensory equipment tailored to individual sensory needs."
         image={Relaxation}
        alt="Sensory room designed for emotional regulation"
        reverse
      />

      <FacilityRow
        title="Communal and Relaxation Areas"
        description="Shared spaces are available for young people to relax, engage in conversation, listen to music, or participate in group discussions and activities."
         image={Relaxation}
        alt="Communal relaxation area"
      />
    </section>
  );
};

export default Facilities;
