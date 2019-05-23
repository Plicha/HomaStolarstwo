import React, { Component } from 'react'
import '../styles/OfferProducts.css'
import { connect } from 'react-redux'
import Modal from './Modal';

class OfferProducts extends Component {
  constructor(){
    super();
    this.state={
      tile1:1,tile2:2,tile3:3,tile4:4,tile5:5,tile6:6,
      isModalHidden:'none',
      modalData:[0],
    };
  }
  componentDidMount(){
    this.setState({isModalHidden:'none',})
    this.setType(this.props.location.type)    
    this.setModal(1);
  }
  setType = (type) =>{
    switch(type){
      case 'table':
        this.setState({
          tile1:7,tile2:8,tile3:0,tile4:0,tile5:0,tile6:0
        });
      break;
      case 'house':
        this.setState({
          tile1:1,tile2:2,tile3:3,tile4:4,tile5:5,tile6:6,
        });
      break;
      default:
    }
  }
  getUrl = (id) =>{
    var url="";
    var title="";
    var size="";
    var display= "none";
    const { products } = this.props;
    
    products.forEach(product => {
      if(product.id === id){
      url = product.url;
      title = product.title;
      size = product.size;
      display = ""
    }
    });
    return{url,title,size,display};
  }
  setModal=(id)=>{   
    this.setState({
      isModalHidden:'',
      modalData: this.props.products[id-1],
     });
  }
  
  render() {
    const getUrl = this.getUrl;
    const state = this.state;
    
    return (
      <div className="ProductsTiles">
      <Modal data={state.modalData} show={state.isModalHidden}/>
      <div className="grid-container">
          <div className="grid-item"
            style={{display:getUrl(state.tile1).display}}>
            <img src={getUrl(state.tile1).url} alt=""
            onClick={()=>this.setModal(state.tile1)}/>
            <h1>{getUrl(state.tile1).title}</h1>
            <h2>{getUrl(state.tile1).size}</h2>
          </div>
          <div className="grid-item"
            style={{display:getUrl(state.tile2).display}}>
            <img src={getUrl(state.tile2).url} alt=""
            onClick={()=>this.setModal(state.tile2)}/>
            <h1>{getUrl(state.tile2).title}</h1>
            <h2>{getUrl(state.tile2).size}</h2>
          </div>
          <div className="grid-item"
            style={{display:getUrl(state.tile3).display}}>
            <img src={getUrl(state.tile3).url} alt=""
            onClick={()=>this.setModal(state.tile3)}/>
            <h1>{getUrl(state.tile3).title}</h1>
            <h2>{getUrl(state.tile3).size}</h2>
          </div>  
        </div>
      </div>
    )
  }
}
const  mapStateToProps = (state) =>{
  return{
    products:state.products
  }
}
export default connect(mapStateToProps)(OfferProducts);