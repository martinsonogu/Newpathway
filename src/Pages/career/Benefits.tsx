import { Check } from 'lucide-react';

const benefits = [
  "Staff training.",
  "Professional support and supervision.",
  "Flexible working patterns.",
  "Good pay rates with additional rates for sleep-in duties.",
  "Career opportunities with an established organisation.",
  "Challenging and exceptionally rewarding roles."
]

const BenefitsList = () => (
  <ul className="space-y-3">
    {benefits.map((item, index) => (
      <li key={index} className="flex items-start gap-2 font-[Poppins] text-base md:text-lg lg:text-xl">
        <Check className="text-teal-600 mt-1" size={20} />
        <span>{item}</span> 
      </li>
    ))}
  </ul>
);

export default BenefitsList