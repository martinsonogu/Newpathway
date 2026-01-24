import VacancyCard from "@/components/vacancyCard/Vacancycard"

const Vacancy = () => {
  return (
    <section className="p-4">
  <h1 className="text-3xl font-bold mb-6">Vacancies</h1>

  <div className="flex flex-wrap justify-start items-stretch -mx-4">
    <VacancyCard
      title="Support Worker"
      description="Join our team and build scalable web interfaces using React and TypeScript."
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