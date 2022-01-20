import { useState } from "react";
import "./header.css";
import headerImg from "./image1.png";
import SliderOffice from "../SliderOffice";
import SliderKitchen from "../SliderKitchen";

function Header() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <img src={headerImg} alt="header" width="100%" />
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Office
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Kitchen
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2 className="title">Office Project</h2>

            <SliderOffice />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2 className="title">Kitchen Project</h2>

            <SliderKitchen />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>Content 3</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
