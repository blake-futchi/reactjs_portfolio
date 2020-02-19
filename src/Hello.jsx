import React from "react";


const Hello = () => {
  return ( 
    <div class="hero-image" style={{ background: 'url("./src/img/cover.jpeg")', backgroundSize: 'cover', height: '100vh'}}>
      <div class="hero-text">
        <h1>I am Blake Erickson</h1>
        <h4>Entrepreneur | Junior Developer | Adventure Seeker</h4>
        <div class="item"><a class="ui button" onClick={event =>  window.location.href='/About'}>Read More</a>
        <a class="ui primary button" href="mailto:blake@futchi.com" subject="Hey Blake! Let's work together">Contact Me</a></div>
      </div>
    </div>
  );
}
export default Hello;