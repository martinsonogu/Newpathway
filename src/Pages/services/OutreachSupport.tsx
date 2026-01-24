import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import IconTextRow from "@/components/icontext/IconText"; 
import ContentRow from "@/components/content_row/ContentRow";

// Example items; replace with your actual content
const items2 = [
  { text: "Reduce social isolation" },
  { text: "Support emotional regulation and wellbeing" },
  { text: "Encourage positive peer interaction" },
  { text: "Develop confidence, independence, and life skills" },
  { text: "Provide a safe and constructive alternative environment" },
];

const items3 = [
  { text: "Person-centred and outcomes-focused" },
  { text: "Adapted to individual needs, abilities, and preferences" },
  { text: "Delivered in line with care and support plans" },
  { text: "Designed to promote choice, dignity, and independence" },
];



// Main section component
const OutreachSupport: React.FC = () => {
  return (
    <ContentRow
      left={
        <>
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4 font-[Poppins]">
            Purpose of the Outreach Centre
          </h3>

          <p className="text-base md:text-lg lg:text-xl font-[Poppins] text-justify mb-4">
            The Outreach Centre aims to:
          </p>

          <div className=" text-base md:text-lg lg:text-xl font-[Poppins]">
            {items2.map((item, index) => (
              <IconTextRow
                key={index}
                icon={<FaRegCheckCircle className="text-teal-500" />}
                text={item.text}
              />
            ))}
          </div>
        </>
      }
      right={
        <>
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4 font-[Poppins]">
            Individualised Support
          </h3>

          <p className="text-base md:text-lg lg:text-xl font-[Poppins] text-justify mb-4">
            Support at the Outreach Centre is:
          </p>

          <div className=" mb-4 text-base md:text-lg lg:text-xl font-[Poppins]">
            {items3.map((item, index) => (
              <IconTextRow
                key={index}
                icon={<FaRegCheckCircle className="text-teal-500" />}
                text={item.text}
              />
            ))}
          </div>

          <p className="text-base md:text-lg lg:text-xl font-[Poppins] text-justify">
            Young people are encouraged to participate at their own pace,
            with staff providing consistent and respectful support that
            promotes dignity, independence, and positive outcomes.
          </p>
        </>
      }
    />
  );
};

export default OutreachSupport;
