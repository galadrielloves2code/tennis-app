import React from "react";

export function TournamentsAccordion() {
  return (
    <div className="accordion" id="tournamentsAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Grand Slamns
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#tournamentsAccordion"
        >
          <div class="accordion-body">
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
                <a
                  href="https://ausopen.com"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Autralian Open
                </a>
              </li>
              <li>
                <a
                  href="https://www.usopen.org/index.html"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  US Open
                </a>
              </li>
              <li>
                <a
                  href="https://www.rolandgarros.com"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  French Open (Roland Garros)
                </a>
              </li>
              <li>
                <a
                  href="https://www.wimbledon.com"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Wimbledon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 class="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            ATP Masters
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#tournamentsAccordion"
        >
          <div class="accordion-body"></div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 class="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            ATP 500
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#tournamentsAccordion"
        >
          <div className="accordion-body"></div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            ATP 250
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body"></div>
        </div>
      </div>
    </div>
  );
}
