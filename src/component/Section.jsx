import React, { useState } from "react";
import Field from "./Field";

const Section = ({
  section,
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  setDropdown,
  dropDown,
}) => {
  const [filterData, setfilterData] = useState(
    section?.fields?.sort(({ order: a }, { order: b }) => a - b)
  );

  return (
    <div>
      <h2>{section?.section}</h2>
      {filterData?.map((res, i) => {
        return (
          <Field
            key={i.toString()}
            field={res}
            name={name}
            setName={setName}
            number={number}
            setNumber={setNumber}
            email={email}
            setEmail={setEmail}
            dropDown={dropDown}
            setDropdown={setDropdown}
          />
        );
      })}
    </div>
  );
};

export default Section;
