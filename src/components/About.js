import React from "react";
import Links from "./Links";

function About(prop) {
  function getBio(){
    switch(prop.bio){
      case undefined:
        return null;
        break;
      case "":
        return null;
        break;
      default:
        return <p>{prop.bio}</p>
        break;
    }
  }

  // <p>{prop.bio}</p>

  console.log(prop.bio)

  return (
    <div id="about">
      <h2>About Me</h2>
      {getBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links {...prop.links}/>
    </div>
  );
}

export default About;
