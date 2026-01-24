import Title from "../../components/title/Title"
// import Button from "../button/Button"
import Activity from "./Activities"
import Map from "./Map"
import FunPic from "../../assets/fun.jpg"

const About = () => {
  return (
      <section id="about" className="bg-white py-2 md:py-4 lg:py-8 px-2 md:px-4 lg:px-8 mt-24">
      <Title text="About" className="mb-2 md:mb-4 lg:mb-6" />
      <p className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
        NewPathway1 Limited is a UK-based care organisation delivering Supported Living and Residential
        Children home designed around individual needs and aspirations. We believe everyone deserves
        to live in an environment where they feel safe, respected, and empowered. Our services promote
        independence while ensuring the right level of support is always available. We we recognise each
        resident as a unique individual and provide holistic care, which fulfils their individual needs.
      </p>
       {/* Staff */}
      <div>
      <h2 className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify bold text-teal-500">STAFF</h2>
      <p className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
        Our trained and dedicated staff provides 24 hour care and support to help you maintain your chosen lifestyle.
        Adapting as your needs change. We pride ourselves on our low staff turnover; the longest serving member of staff
        has been in post for 5 years!
        </p>
        <p className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
          All staff who are employed are given induction training plus reference checks.
        </p>
      </div>
       {/* Activities main */}
      <div>
        <h2 className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify bold text-teal-500">ACTIVITIES PROGRAMME</h2>
        <p className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
          Our Activities Co-Ordinator works to deliver a structured activities program which aims to provide variety and to cater for numerous hobbies and individual requirements; we deliver activities that enhance the physical and mental wellbeing of our residents.

          Our residents choose where they would like to go for outings, and are driven to their activity of choice!
        </p>
        <p className="lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
          This year’s outings have included:
        </p>
      </div>
      {/* list of activities */}
      <div className="flex flex-col md:flex-row items-start gap-8 mt-6">
  {/* Activity */}
  <div className="w-full md:w-1/2 bg-gray-100 md:p-4">
    <Activity />
  </div>

  {/* Image */}
  <div className="w-full md:w-1/2">
    <img
      src={FunPic}
      alt="Kids having fun"
      className="w-full h-64 md:h-full object-cover rounded-lg"
    />
  </div>
</div>
      {/* Location */}
      <div className="mt-6">
        <h2 className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify bold text-teal-500">
          LOCATION
        </h2>
        <p className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
          We are proudly based in London, with three active sites currently operating in Gravesend and an additional location
          in Chatham. As we continue to grow, we are planning to expand our presence with more sites opening across the
          country, bringing our services closer to communities nationwide.
        </p>
        <Map/>
      </div>
     </section>
  )
}

export default About