import React, { Component } from 'react'
import '../styles/Modal.css'
 class Modal extends Component {
    constructor(){
        super();
        this.state={
          isHiden:'none',
          imgId:1,
          hideRight:'',
          hideLeft:''
        };
    }
    componentWillMount(){
        
        let show = this.props.show;
        this.setState({
            isHiden:show
        });
    }
    componentWillReceiveProps(){
        let show = this.props.show;
        this.setState({
            isHiden:show
        });
    }
    show = (isHiden)=>{
        this.setState({
            isHiden:isHiden
        });
    }
    onArrowClick = (direction,url)=>{
        let nextImgId = this.state.imgId;
        let image = new Image();

        switch(direction){
            case 'right':
            nextImgId=nextImgId+1;
            image.src = url+''+nextImgId+'.png';
            if (nextImgId === 4) {
                this.setState({ imgId:1 });
            } else { 
                this.setState({ imgId:nextImgId});
            }
            break;
            case 'left':
            nextImgId=nextImgId-1;
            if(nextImgId === 0){
                this.setState({ imgId:3})
            }else{
                this.setState({ imgId:nextImgId});
            }
            break;
            default:
        }
    }
  render() {
    const onArrowClick = this.onArrowClick;
    const show = this.show;
    const state = this.state;
    const props = this.props;
    const imgUrl = './images/products/'+props.data.type+''+props.data.id+'/img'
    
    return (
      <div className='modal' style={{display:state.isHiden}}>
        <div className="statement"><p>Obróć ekarn</p><img src="./images/rotate.png" alt=""/></div>
        <div className="cross" onClick={()=>{show('none')}}></div>
        <div className="aboutProduct">
            <h1>{props.data.title}</h1>
            <p className='desc'>{props.data.description}</p>
            <p className='size'>Wymiary: {props.data.size}</p>
        </div>
        <div className="gallery">
            <div className="arrowLeft" style={{display:state.hideLeft}}
            onClick={()=>onArrowClick('left',imgUrl)}></div>
            <div className="arrowRight"  style={{display:state.hideRight}}
            onClick={()=>onArrowClick('right',imgUrl)}></div>
            <img src={imgUrl+''+state.imgId+'.png'} alt=""/>
        </div>
    </div>
    )
  }
}
export default Modal
