import React, { Component } from 'react'
import '../styles/Nav.css'
import {Link} from 'react-router-dom'
class Nav extends Component {
  constructor(){
    super();
    this.state={
      colors:["#c0d6e2","#eeb796","#EEE396"],
      mobileNavClick:0,
      display:'none',
    };
  }

  onBurgerClick=()=>{
      let status = this.state.mobileNavClick;
      switch(status){
        case 0:
        this.setState({ mobileNavClick:1,display:'list-item',})
        break;
        case 1:
        this.setState({ mobileNavClick:0,display:'none'})
        break
        default:
      }
  }
  render() {
    
    return (
      <div className="Nav">
        
        <div className="burger" onClick={()=>{this.onBurgerClick()}}>
          <div/><div/><div/>
        </div>
        
        <ul>
        <li><Link to="/Contact">Kontakt</Link></li>
        <li><Link to="/Offer">Oferta</Link></li>
        <li><Link to="/About">O firmie</Link></li>
        <li><Link to="/">Strona główna</Link></li>
        </ul>

        <ul className="mobileNav" style={{opacity:this.state.mobileNavClick}}>
        <li style={{display:this.state.display}} onClick={()=>{this.onBurgerClick()}}><Link to="/Contact">Kontakt</Link></li>
        <li style={{display:this.state.display}} onClick={()=>{this.onBurgerClick()}}><Link to="/Offer">Oferta</Link></li>
        <li style={{display:this.state.display}} onClick={()=>{this.onBurgerClick()}}><Link to="/About">O firmie</Link></li>
        <li style={{display:this.state.display}} onClick={()=>{this.onBurgerClick()}}><Link to="/">Strona główna</Link></li>
        </ul>
      </div>
    )
  }
}
export default Nav;