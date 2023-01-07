import React from "react";

export default function About(props) {
  // const [darkMode, setdarkMode] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let darkMode = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#4a525b":"white"
  }



  return (
    <div className="container pb-1kl" style={darkMode}>
      <h1 className="mt-3 ms-2">About us</h1>
      <div className="accordion mt-3" id="accordionExample">
        <div className="accordion-item" style={darkMode}>
          <h2 className="accordion-header" id="headingOne">
            <button
              style={darkMode}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkMode}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              aspernatur.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={darkMode}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={darkMode}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Edit text
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkMode}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, deserunt. Quaerat assumenda recusandae modi quo?
            </div>
          </div>
        </div>
        <div className="accordion-item" style={darkMode}>
          <h2 className="accordion-header" id="headingThree">
            <button
              style={darkMode}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkMode}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              pariatur nesciunt nulla repellendus asperiores, minus quibusdam
              accusamus placeat corrupti adipisci.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
