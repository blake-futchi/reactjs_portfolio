import React from "react";


const Projects = () => {
  return ( 
    <div className="super">
      <div className="case-study">
        <div className="fold-1" style = {{background: 'url("./src/img/futchi-player.png")', backgroundSize: 'cover', height: '50vh'}}>       
          <div className="info-box">
            <h3>Cofounded and launched Futchi, a social soccer sport that 
                has been played in over 20 countries across North America, EMEA, and APAC. </h3>
                <a class="ui red basic button" href="https://www.playfutchi.com" target="blank">Go to futchi.com</a>
          </div>
         </div>
        </div>
        <div className="fold-1" style = {{background: 'url("./src/img/buildings.png")', backgroundSize: 'cover', height: '50vh'}}>       
          <div className="info-box box-1">
            <h3>Developed and executed go to market strategy for Fast, a G.Fast provider that delivers gigabit internet over legacy wiring.</h3>
                <a class="ui red basic button" href="https://fastsystems.net" target="blank">Go to fast.com</a>
          </div>
      </div>
      <div className="fold-1" style = {{background: 'url("./src/img/westside.jpg")', backgroundSize: 'cover', height: '50vh'}}>       
          <div className="info-box box-2">
            <h3>Directed experience mapping initiative for dermatology practice, throttling growth through technology, best practices, and marketing. </h3>
                <a class="ui red basic button" href="https://www.wsderm.com" target="blank">Go to wsderm.com</a>
          </div>
      </div>
      <div className="fold-1" style = {{background: 'url("./src/img/balance.jpg")', backgroundSize: 'cover', height: '60vh'}}>       
          <div className="center-box">
            <div className="info-box box-3">
              <h3> Sometimes a new perspective is all you need to tackle your business's greatest challenge. </h3>
                <a class="ui red basic button" href="https://www.instagram.com/blakeyerickson" target="blank">Follow my journey through space and time</a>
            </div>
          </div>
      </div>
    </div>
  );
}
export default Projects;