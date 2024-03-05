import React, { useState } from "react";
import Section from "./Section";
import { companyData } from "../screen/dummyData/DummyData";
const DynamicForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dropDown, setDropdown] = useState("");

  return (
    <form>
      {companyData &&
        companyData.company?.map((section, index) => (
          <Section
            key={index}
            section={section}
            setName={setName}
            setNumber={setNumber}
            name={name}
            number={number}
            email={email}
            setEmail={setEmail}
            dropDown={dropDown}
            setDropdown={setDropdown}
          />
        ))}
    </form>
  );
};

export default DynamicForm;
