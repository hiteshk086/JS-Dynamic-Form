import React from "react";
import Section from "./Section";
import { companyData } from "../screen/dummyData/DummyData";
const DynamicForm = () => {
  return (
    <form>
      {companyData &&
        companyData.company?.map((section, index) => (
          <Section key={index} section={section} />
        ))}
    </form>
  );
};

export default DynamicForm;
