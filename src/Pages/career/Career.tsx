import Title from "../../components/title/Title"
import Button from "../../components/button/Button"
import BenefitsList from "./Benefits"
import { Link } from 'react-router-dom';

const Career = () => {
  return (
      <section id="career" className="bg-white py-2 md:py-4 lg:py-8 px-2 md:px-4 lg:px-8 mt-24">
      <Title text="Careers" className="mb-2 md:mb-4 lg:mb-6" />
      <p className="mb-4 lg:mb-2  text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
        Newpathway1 provide residential, fostering and education placements for children who have had
        difficult starts to life and are unable to live at home with their families.
      </p>
      <p className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">Our staff teams adopt a positive parental approach to the care and development of the children
        we look after and are required to be consistent, positive role models at all times. The primary
        aim of our team is to develop a secure base from which children can grow and develop. At times,
        this can be both challenging and rewarding.
      </p>
      <p className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
        Consequently, good levels of resillience and empathy are essential when helping children to achieve
        their best social, emotional and educational outcomes. Successful team members are kind, caring, compassionate
        by nature, have boundless enthusiasm and energy and a strong desire to succeed.
      </p>

      <div className="flex flex-col-reverse md:flex-row items-start gap-8 mt-6">
        <div className=" md:w-1/2 w-full">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold font-[poppins] mb-2 md:mb-4 text-teal-500">Who we are looking for</h2>
          <p className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            We are always interested to hear from experienced care workers, education staff, managers and specialists, as well
            as people that are considering a career working with children and young people for the very first time.
          </p>
          <p className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            As a progressive and fast growing organisation, we often have vacancies in a number of fields and look to recruit
            individuals of all ages from a wide variety of backgrounds and professions.
          </p>
          <p className="mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            Newpathway1 operate and actively promote equal opportunities and value diversity in all areas of our work and in
            the recruitment of team members and foster carers. To support this, we are keen to increase currently
            under-represented sections of our communities and encourage applications from a cross-section of society,
            irrespective of gender, sexual orientation, ethnicity, faith, age or disability.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold font-[poppins] mb-2 md:mb-4 text-teal-500">What we offer</h2>
          <BenefitsList/>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center mt-6 lg:mt-12">
        <Link to="/vacancy">
          <Button variant="secondary">Apply for current Vacancies</Button>
        </Link>
      </div>
      
    </section>
  )
}

export default Career