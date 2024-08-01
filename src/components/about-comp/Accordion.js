import React, { useState } from "react";
import { accordionData } from "./accordionData";
import Panel from "./Panel";
import "./AboutUs.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [subActiveIndex, setSubActiveIndex] = useState(-1);

  return (
    <div className="accordion">
      {/* <h1>About US</h1> */}
      {accordionData.map((data, index) => {
        if (index === accordionData.length - 1) {
          // Special handling for the last item with sub-accordion
          return (
            <Panel
              key={index}
              title={data.title}
              isActive={activeIndex === index}
              onShow={setActiveIndex}
              index={index}
            >
              <div>
                {data.description.map((subData, subIndex) => (
                  <Panel
                    key={subIndex}
                    title={subData.title}
                    isActive={subActiveIndex === subIndex}
                    onShow={setSubActiveIndex}
                    index={subIndex}
                    isSubPanel={true}
                  >
                    {subData.description}
                  </Panel>
                ))}
              </div>
            </Panel>
          );
        } else {
          return (
            <Panel
              key={index}
              title={data.title}
              isActive={activeIndex === index}
              onShow={setActiveIndex}
              index={index}
            >
              {data.description}
            </Panel>
          );
        }
      })}
    </div>
  );
};

export default Accordion;
