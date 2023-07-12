import React from "react";
import Flag from "../components/flag";
import { PlayerPictures } from "../components/playersPictures";
import { LikeButton } from "../components/buttons/likeButton";
import { InstagramButton } from "../components/buttons/instagramButton";
import { TwitterButton } from "../components/buttons/twitterButton";
import PlayerProfile from "../components/profileSummary";
import "../App.css";
import RankingBox from "../components/rankingBox";

export function Profile() {
  return (
    <div className="container">
      {" "}
      {/*div for entire page*/}
      <div style={{ display: "flex" }}>
        {" "}
        {/* div for the top part of the page including summary of player info and picture */}
        <div
          className="container"
          style={{ border: "1px solid black", padding: "10px" }}
        >
          {" "}
          {/*div for top left including just the summary of the player and ranking*/}
          <div
            className="container"
            style={{
              padding: "10px",
            }}
          >
            {" "}
            {/*div for top left including just the summary of the player and WITHOUT ranking */}
            <div style={{ display: "flex", paddingLeft: "16px" }}>
              {" "}
              {/* flag + player name */}
              <Flag countryCode="italy" altText="Italy Flag" />
              <p style={{ marginLeft: "10px" }}>Jannik Sinner</p>
            </div>
            <div
              className="container"
              style={{
                display: "flex",
              }}
            >
              {" "}
              {/* div for social media buttons */}
              <InstagramButton />
              <TwitterButton />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                {" "}
                {/* div for summary info for the player */}
                <PlayerProfile name="Jannik Sinner" />
              </div>
              <div style={{ display: "flex" }}>
                {" "}
                {/* div for ranking */}
                <RankingBox name="Jannik Sinner" />
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          {/* div for top right of the page including just profile picture and the like button on it */}
          <PlayerPictures playerLastName="sinner" />
          <LikeButton />
        </div>
      </div>
    </div>
  );
}
