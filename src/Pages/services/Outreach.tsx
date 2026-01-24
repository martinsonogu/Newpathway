import Title from "@/components/title/Title"
import Facilities from "./Facilities"
import OutreachSupport from "./OutreachSupport"


const Outreach = () => {
  return (
      <div className="bg-white py-2 md:py-4 lg:py-8 px-2 md:px-4 lg:px-8 mt-24">
      <Title text="Outreach Center" className="mb-2 md:mb-4 lg:mb-6" />
      <p className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
        Our Outreach Centre provides a structured yet relaxed environment for young people to access,
        support, social opportunities, and meaningful activities outside of their home setting.
        The service is designed to promote independence, emotional wellbeing, and positive social
        engagement in a safe and supportive space.
      </p>
      <p className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
        The centre operates from a comfortable, home-like setting and is staffed by trained professionals
        who provide appropriate supervision, guidance, and encouragement tailored to individual needs.
      </p>
      <Facilities />
      <OutreachSupport/>
      </div>
  )
}

export default Outreach