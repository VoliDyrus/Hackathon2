import { useState } from "react";
import "./header.css";
import headerImg from "./image1.png";

const divisions = [
  "Office",
  "Kitchen",
  "Bathroom",
  "Bedroom",
  "Living Room",
  "Dining Room",
  "Garden",
  "Balcony",
];

function Header() {
  const [toggleState, setToggleState] = useState("Office");

  const toggleTab = (name) => {
    setToggleState(name);
  };

  return (
    <>
      <img src={headerImg} alt="header" width="100%" />
      <div className="container">
        <div className="bloc-tabs">
          {divisions.map((division) => (
            <button
              key={division}
              className={toggleState === division ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(division)}
            >
              {division}
            </button>
          ))}
        </div>

        <div className="content-tabs">
          {divisions.map((category) => (
            <div
              className={
                toggleState === category ? "content  active-content" : "content"
              }
            >
              <h2>{category} Project</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati praesentium incidunt quia aspernatur quasi quidem
                facilis quo nihil vel voluptatum?
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
