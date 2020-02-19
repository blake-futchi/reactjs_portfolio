import React from "react";

const Hello = () => {
  return (
    <div class="hero-image">
  <div class="hero-text">
    <h1>I am Blake Erickson</h1>
    <h4>Entrepreneur | Junior developer | freelancer</h4>
    <p class="mt-4"> Climber | Surfer | Gymnast | Footballer | Adventure Seeker</p>
    <div class="item"><a class="ui button" onClick={event =>  window.location.href='/About'}>Read More</a>
    <a class="ui primary button" href="mailto:blake@futchi.com" subject="Hey Blake! Let's work together">Contact Me</a></div>
  </div>
</div>
  );
}
export default Hello;