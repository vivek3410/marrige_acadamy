import titleData from "../../data/TitleData";
import { Card, Cources, ThreeButtons, Title } from "../Elements";
import "./Membership.css";
import React from "react";

function template() {
  return (
    <div className="text-left mt-20 ml-40">
      {titleData.map((title) => (
        <>
          <Title title={title.title} link={title.link} Button={"Course Library"} />
          <ThreeButtons target={title.title} />
          <div className="flex flex-row mb-10">
          <Card time={"5 minutes"} />
          <Card time={"5 minutes"} />
          <Card time={"5 minutes"} />
          </div>

        </>
      ))}
    </div>
  );
};

export default template;
