import React, { useState } from "react";
import Field from "./Field";

const Section = ({ section }) => {
  const [filterData, setfilterData] = useState(
    section?.fields?.sort(({ order: a }, { order: b }) => a - b)
  );

  return (
    <div>
      <h2>{section?.section}</h2>
      {filterData?.map((res, i) => {
        return <Field key={i.toString()} field={res} />;
      })}
    </div>
  );
};

export default Section;
