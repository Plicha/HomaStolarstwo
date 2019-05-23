import React, { Component } from 'react'
import '../styles/Home.css'

class Home extends Component {
  constructor(){
    super();
    this.state={
        hexagonImgSrc:"./images/table.png",
        hexagonBgColor:"#c0d6e2",
        hexagonPartsHeight:"11vh",
        temporaryModal:''
    };
  }
  componentDidMount(){
    if(window.innerWidth<770){
      this.setState({
        hexagonPartsHeight:"4vh"
      });
    }
    if(window.innerWidth<1050 && window.innerWidth>770){
      this.setState({
        hexagonPartsHeight:"6vh"
      });
    }
  }

  onCrossClick =()=>{
    this.setState({
      temporaryModal:"none"
    })
  }
  
  onHexagonHover = () =>{
    switch(this.state.hexagonBgColor){
      case "#c0d6e2":
      this.setState({
        hexagonImgSrc:"./images/table2.png",
        hexagonBgColor:"#eeb796"
      });
      break;
      case "#eeb796":
      this.setState({
        hexagonImgSrc:"./images/table3.png",
        hexagonBgColor:"#EEE396"
      });
      break;
      case "#EEE396":
      this.setState({
        hexagonImgSrc:"./images/table.png",
        hexagonBgColor:"#c0d6e2"
      });
      break;
      default:
    }
  }
  
  render() {
    return (
      <div className="home">
        {/* <div className="temporaryModal"  style={{display:this.state.temporaryModal}}>
          <div class="modalCon">
          <span class="close" onClick={()=>{this.onCrossClick()}}>&times;</span>
            <p>Uwaga! Strona jest w fazie prototypu. Treść na niej zawarta jest przypadkowa.</p>
          </div>
        </div> */}
        <ul className="bigLogo">
            <li><h1>H</h1></li>
            <li>
              <div className="hexagonArea" onMouseEnter={this.onHexagonHover}>
                <div className="hexagonTop" 
                style={{borderBottom:
                      this.state.hexagonPartsHeight+
                      ' solid '+
                      this.state.hexagonBgColor,
                      }}
                />  
                  <div className="hexagonMid" 
                  style={{backgroundColor:this.state.hexagonBgColor}}>
                    <img src={this.state.hexagonImgSrc} alt="O"/>
                  </div>
                <div className="hexagonBot"  
                style={{borderTop:
                      this.state.hexagonPartsHeight+
                      ' solid '+
                      this.state.hexagonBgColor}}
                />
              </div>
            </li>
            <li><h1>MA</h1></li>
        </ul>
        <div>
          <p>
            Stolarstwo
          </p>
        </div>
        
      </div>
    )
  }
}
export default Home;
