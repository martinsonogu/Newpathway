import FadeInSection from "@/components/fadeIn/FadeIn"
import IconTextRow from "@/components/icontext/IconText";
import { FaRegCheckCircle } from "react-icons/fa";

const items1 = [
  { text: "Supported Living services" },
  { text: "Residential Children home" },
  { text: "Person-centred, outcome-focused support" },
];

const items2 = [
  { text: "Enhanced DBS checks for all relevant roles" },
  { text: "Safer recruitment practices" },
  { text: "Ongoing suitability checks" },
];

const Into = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-8 " >
 <FadeInSection className="w-full md:w-1/2">
        <p className="mb-3 md:mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
              At Newpathway1 Limited, we provide high-quality Supported Living and Residential Children Home that enable people to live with dignity, independence, and confidence.
              We support adults with a range of needs in safe, welcoming environments where choice,
              respect, and wellbeing are at the centre of everything we do. Our experienced teams work
              closely with individuals, families, and professionals to deliver care that is tailored, compassionate,
              and reliable.
        </p>
        <div
            className="
              flex flex-col items-start gap-3 md:gap-4 my-2 md:my-4 text-base md:text-lg lg:text-xl font-[Poppins]
            "
            >
            {items1.map((item, index) => (
              <IconTextRow
                key={index}
                icon={<FaRegCheckCircle className="text-teal-500" />}
                text={item.text}
              />
            ))}
        </div>

      </FadeInSection>
       <FadeInSection className="w-full md:w-1/2">
        <p className="mb-3 md:mb-4 lg:mb-2 text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
          We operate robust safeguarding policies and procedures to protect individuals from harm,
          abuse, or neglect. All staff are trained to recognise and respond to safeguarding concerns
          and to act in line with best practice and regulatory requirements. We maintain safe living and
          working environments and support both physical and mental wellbeing across our services.
        </p>
        <div
              className="flex flex-col items-start gap-3 md:gap-4 my-2 md:my-4 text-base md:text-lg lg:text-xl font-[Poppins]"

            >
            {items2.map((item, index) => (
              <IconTextRow
                key={index}
                icon={<FaRegCheckCircle className="text-teal-500" />}
                text={item.text}
              />
            ))}
        </div>

    </FadeInSection>
    </div>
   
  )
}

export default Into