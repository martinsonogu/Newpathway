const activities = [
  "Canterbury escape room.",
  "Dreamland Margate.",
  "Go ape Leads castle.",
  "Historic Dockyard Chatham.",
  "Gravity Active Bluewater.",
  "Revolution skatepark.",
  "Planet Ice."
]

const Activity = () => (
  <ul className="space-y-3">
    {activities.map((item, index) => (
      <li key={index} className="flex items-center gap-2 font-[Poppins] text-base md:text-lg lg:text-xl">
        {/* <Circle className="h-4 w-4 mt-1 text-indigo-600" size={20} /> */}
        <span className="w-3 h-3 rounded-full bg-teal-400 inline-block"></span>
        <span>{item}</span> 
      </li>
    ))}
  </ul>
);

export default Activity