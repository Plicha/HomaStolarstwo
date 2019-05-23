import React, { Component } from 'react'
import '../styles/Offer.css'
import {Link} from 'react-router-dom'
class Offer extends Component {
  constructor(){
    super();
    this.state={
      text:'Stoły',
      text2:'Narzędziownie',
      textColor:'#ddd'
    };
  }
  onInactiveHover = ()=>{
      this.setState({
        text:"Tymczasowo niedostępne",
        textColor:"#d40000",
        bgImage:"radial-gradient(#fff, #f8f8f8)"
      });
}
  render() {
    
    return (
      <div>
        <div className="offer">
        <Link className="link" to={{pathname:'/Offer'}} >
          <div className="offerIcon">
            <h3 style={{color:'#aaa'}}>Narzędziownie <br/> (Czasowo<br/>  Niedostępne)</h3>
            <img src="./images/toolHouseIcon.png" alt="1"/>
          </div>
        </Link>
        <Link className="link" to={{pathname:'/Product',type:'house'}} >
          <div className="offerIcon">
            <h3>Place zabaw</h3>
            <img src="./images/playgroundIcon.png" alt="2"/>
          </div>
        </Link>
        <Link className="link" to={{pathname:'/Offer'}}>
          <div className="offerIcon"
            style={{cursor:'default',textAlign:'center',backgroundImage:this.state.bgImage}}
            onMouseEnter={this.onInactiveHover}
            onClick={this.onInactiveHover} >
            <h3 style={{color:'#aaa'}}>Stoły <br/> (Czasowo<br/>  Niedostępne)</h3>
            <img src="./images/tableIcon.png" alt="3"/>
          </div>
        </Link>
        </div>
      </div>
    )
  }
}
export default Offer;