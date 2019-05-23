import React, { Component } from 'react'
import Iframe from 'react-iframe'
import '../styles/Contact.css'
class Contact extends Component {
    constructor(){
        super();
        this.state={
            city:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579.9752192969368!2d18.563400529245214!3d54.447036398764006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd0a8f979cbea9%3A0x1632c4e715bb0c0a!2sJana+Jerzego+Haffnera+39%2C+81-701+Sopot!5e0!3m2!1spl!2spl!4v1551551881467",
            showContact:true,
            boxWidth:'30vw',
            borderLeft:'1vw solid #ddd',
            borderRight: '0'
        };
      }
      componentWillMount(){
        if(window.innerWidth<1050){
          this.setState({
            boxWidth:"70%"
          });
        }
      }
    
    onCityButtonClick = (city) =>{
        switch(city){
            case 'tricity':
            this.setState({
                city:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579.9752192969368!2d18.563400529245214!3d54.447036398764006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd0a8f979cbea9%3A0x1632c4e715bb0c0a!2sJana+Jerzego+Haffnera+39%2C+81-701+Sopot!5e0!3m2!1spl!2spl!4v1551551881467"
            });
            break;
            case 'warsaw':
            this.setState({
                city:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156389.09520221836!2d20.92111165723871!3d52.2328550425064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1551555172744"
            });
            break;
            default:
        }
    }
    onHideButtonClick=()=>{
        switch(this.state.showContact){
            case true:
            this.setState({
                showContact:false,
                boxWidth:'1%',
                borderLeft:'0',
                borderRight:'1vw solid #ddd'
            });
            break;
            case false:
            if(window.innerWidth<1050){
                this.setState({
                    showContact:true,
                    boxWidth:'70%',
                    borderRight:'0',
                    borderLeft:'1vw solid #ddd'
                    
                });
            }else{
                console.log('box');
                
                this.setState({
                    showContact:true,
                    boxWidth:'30vw',
                    borderRight:'0',
                    borderLeft:'1vw solid #ddd'
                    
                });
            }
            
            break;
            default:
        }
    }

  render() {
    return (
      <div className="contact">
        <Iframe className="map" url={this.state.city} width="800" height="600" frameborder="0" allowfullscreen>
        </Iframe>
        <div className="contactButtonsBg">
            <div className="tricityButton" onClick={()=>{this.onCityButtonClick('tricity')}}><b>Trójmiasto</b></div>
            <div className="warsawButton" onClick={()=>{this.onCityButtonClick('warsaw')}}><b>Warszawa</b></div>
        </div>
        <div className="contactInfo">
            <div className="contactBox" style={{width:this.state.boxWidth}}>
                <table>
                    <tbody>
                    <tr>
                        <td><b>Telefon:</b></td>
                        <td>793 199 715 - Trójmiasto</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>793 199 715 - Warszawa</td>
                    </tr>
                    <tr>
                        <td><b>Adres:</b></td>
                        <td>Jana Jerzego Haffnera 39 Sopot</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Arabska 4 Warszawa</td>
                    </tr>
                    <tr>
                        <td><b>E-mail: </b></td>
                        <td><a href="mailto:homastolarstwo@gmail.com">homastolarstwo@gmail.com</a></td>
                    </tr>
                    <tr>
                        <td><img src='./images/facebook-logo.png' alt="facebook"/> :</td>
                        <td>
                            <a href="https://www.facebook.com/jakub.homa97">
                                facebook.com/homastolarstwo
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="hideBoxButton"
            onTouchEnd={()=>{this.onHideButtonClick()}}
            onClick={()=>{this.onHideButtonClick()}}
            style={{right:this.state.boxWidth,cursor:'pointer'}}>
                <div className="hideBoxArrow"
                     style={{borderLeft:this.state.borderLeft,borderRight:this.state.borderRight}}></div>
            </div>
        </div>
      </div>
    )
  }
}
export default Contact