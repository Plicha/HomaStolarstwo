import React, { Component } from 'react'
import '../styles/About.css'

class About extends Component {
  constructor(){
    super();
    this.state={
        tricity:["none",0,"#ececec"],
        warsaw:["",1,"#e2e2e2"]
    };
  }

  changeMainText = (content) =>{
    switch(content){
      case 'tricity':
      this.setState({
        tricity:["",1,"#e2e2e2"],
        warsaw:["none",0,"#ececec"]
      });
      break;
      case 'warsaw':
      this.setState({
        tricity:["none",0,"#ececec"],
        warsaw:["",1,"#e2e2e2"]
      });
      break;
      default:
    }
  }
  
  render() {
    return (
      <div className="about">
      {/* Left side */}
      <div className="bgSection">
      <div className="imgBgsquare">
        <div className="animatedImage">
          <div>
          <img src="./images/about-image.png" style={{zIndex:3}} alt=" "></img>
          <svg id='Warstwa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'>
              <path className='st0' d='M0.5,48.5l145-10l176,10c0,0,9-1,9,4s2,6-3,8s-192,54-192,54s-10,4-21,3s-114-13-114-13'/>
              <path className='st0' d='M0.5,84.5c0,0,106,9,120,9c0.96,0,2.76-0.21,5.29-0.6c34.3-5.29,201.89-43.85,201.89-43.85'/>
              <line className='st0' x1='124.3' y1='117.24' x2='120.5' y2='93.5' />
              <path className='st0' d='M117.24,117.66C111.5,125.5,0.5,232.5,0.5,232.5'/>
              <line className='st0' x1='124.5' y1='119.5' x2='0.5' y2='236.5' />
              <path className='st0' d='M0.5,275.5l135,175c0,0,13,13,3,10s-139-44-139-44'/>
              <path className='st0' d='M-0.5,287.5l128,158c0,0,14,13-7,6s-120-39-120-39'/>
              <path className='st0' d='M281.5,78.5l-66,54c0,0-6,9-13,0s-24.36-29.88-24.36-29.88'/>
              <path className='st0' d='M294.84,71.27L133.5,209.5c0,0-6,5,0,5s145,22,145,22s12,5,3-7S173.93,103.8,173.93,103.8'/>
              <path className='st0' d='M137.5,209.5l68-58c0,0,2-4,7,3s62,72,62,72s12,10-8,6s-124-20-124-20L137.5,209.5z'/>
          </svg></div>
        </div>
      </div>
      <div className="imgBgTriangle"></div>
      </div>
      {/* Right site */}
        <div className="info">
          <h1 className="localization">
            Nasza firma posiada dwie lokalizację.
          </h1>
          <div className="buttonSection">
            <div className="leftButton" 
              onClick={() => {this.changeMainText("tricity")}}
              style={{backgroundColor:this.state.tricity[2]}}>
              Trójmiato
            </div>
            <div className="rightButton" 
              onClick={()=>{this.changeMainText("warsaw")}}
              style={{backgroundColor:this.state.warsaw[2]}}>
              Warszawa
            </div>
          </div>
          <div className="mainTextAbout">
            <hr></hr>
            <p className="tricityInfo"  
            style={{display:this.state.tricity[0], 
                    opacity:this.state.tricity[1]}}>
                Kierowanie zamówień dla rynku trójmiejskiego jest możliwe jedynie od wrzeźnia do czerwca. Z czasem planujemy umożliwić sprzedaż również w trakcie lata.
            </p>
            <p className="warsawInfo" 
            style={{display:this.state.warsaw[0],
                    opacity:this.state.warsaw[1]}}>
                Jest to główny punkt dystrybucji wytwarzanych przez nas produktów, co jest równoznaczne możliwie najkrótszym czasem realiacji zamówień.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default About;