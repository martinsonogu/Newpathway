import Title from "@/components/title/Title"
import VacancyCard from "@/components/vacancyCard/Vacancycard"

const Vacancy = () => {
  return (
    <section className="bg-white py-2 md:py-4 lg:py-8 px-2 md:px-4 lg:px-8 mt-24">
  <Title text="Vacancy" className="mb-2 md:mb-4 lg:mb-6" />

  <div className="flex flex-wrap justify-start items-stretch -mx-4">
    <VacancyCard
      title="Support Worker"
          description="Do you have previous experience as a support worker, care assistant? 
          We are looking for someone who is passionate, who want to make a difference to people’s lives."
      applyRoute="/apply/frontend"
      moreRoute="/details"
    />
    <VacancyCard
      title="Nurse"
      description="Work on APIs, databases, and scalable backend services using Node.js."
      applyRoute="/apply/backend"
      moreRoute="/jobs/details"
    />
    <VacancyCard
      title="Home Manager"
      description="Craft intuitive and beautiful user experiences that delight users."
      applyRoute="/apply/uiux"
      moreRoute="/jobs/details"
    />
  </div>
</section>

  )
}

export default Vacancy