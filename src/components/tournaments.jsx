import React from "react";

export function TournamentsAccordion(){
    return(
        <div className="container accordion" id="tournamentsAccordion">
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
              <ul style={{ paddingLeft: "20px" }}>
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
            <div class="accordion-body">
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  <a
                    href="https://bnpparibasopen.com/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Indian Wells
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.miamiopen.com/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Miami Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://montecarlotennismasters.com/en/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Monte Carlo Masters
                  </a>
                </li>
                <li>
                  <a
                    href="https://mutuamadridopen.com/en/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Madrid Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.internazionalibnlditalia.com/en/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Italian Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rbccanadianopen.com/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Canadian Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://wsopen.com/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Cincinnati Masters
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.rolexshanghaimasters.com/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Shanghai Masters
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Paris Masters
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
            <div className="accordion-body">
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Rotterdam Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Rio Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Dubai Tennis Championships
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Mexican Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Barcelona Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Queen's Club Championships
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Halle Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Hamburg European Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Washington Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    China Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Japan Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Vienna Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Swiss Indoors
                  </a>
                </li>
              </ul>
            </div>
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
            <div className="accordion-body">
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Adelaide International 1
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Tata Open Maharashtra
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Adelaide International 2
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Auckland Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Córdoba Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Open Sud de France
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Dallas Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Buenos Aires Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Delray Beach Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Open 13
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Qatar Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Chile Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    U.S. Men's Clay Court Championships
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Grand Prix Hassan II
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Estoril Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Srpska Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Bavarian International
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Geneva Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Lyon Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Stuttgart Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Stuttgart Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Rosmalen Grass Court Championships
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Mallorca Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Eastbourne International
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Infosys Hall of Fame Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Swedish Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Swiss Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Atlanta Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Croatia Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Los Cabos Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Austrian Open Kitzbühel
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Winston-Salem Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Chengdu Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Zhuhai Championships
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Astana Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    European Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Stockholm Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Moselle Open
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rolexparismasters.com/en"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Tel Aviv Open
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}