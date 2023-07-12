import React from "react";

export function PlayersDetailedInfo() {
  return (
    <div>
      <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#scrollspyHeading1"
              style={{ color: "black" }}
            >
              Bio
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#scrollspyHeading2"
              style={{ color: "black" }}
            >
              Activity
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#scrollspyHeading3"
              style={{ color: "black" }}
            >
              Win/Loss
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#scrollspyHeading4"
              style={{ color: "black" }}
            >
              Titles/Finals
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#scrollspyHeading5"
              style={{ color: "black" }}
            >
              Stats
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#scrollspyHeading6"
              style={{ color: "black" }}
            >
              Ranking History
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabindex="0"
      >
        <h4 id="scrollspyHeading1"></h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam
          officiis, necessitatibus ad minima rem sit soluta ipsa modi, deleniti
          amet culpa magnam perspiciatis voluptatibus cupiditate placeat nisi
          veritatis accusantium esse fugiat beatae illum, reprehenderit ea qui.
          Nulla sit quod placeat cum, fuga sapiente in fugiat animi officiis id
          repudiandae temporibus cumque suscipit nemo atque maiores deserunt
          voluptas assumenda, corrupti aliquam aspernatur quasi. Alias possimus,
          quaerat obcaecati et necessitatibus provident quam dolore saepe aut
          numquam blanditiis? Dolorem est qui blanditiis voluptates sint iusto
          similique omnis provident vero in quos a libero cum, suscipit
          consequuntur hic ex sapiente id recusandae impedit!
        </p>
        <h4 id="scrollspyHeading2"></h4>
        <p>...</p>
        <h4 id="scrollspyHeading3"></h4>
        <p>...</p>
        <h4 id="scrollspyHeading4"></h4>
        <p>...</p>
        <h4 id="scrollspyHeading5"></h4>
        <p>...</p>
      </div>
    </div>
  );
}
