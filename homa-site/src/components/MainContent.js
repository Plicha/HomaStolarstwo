import React, { Component } from 'react'
import Nav from './Nav'
import About from './About'
import Home from './Home'
import Socials from './Socials'
import '../styles/MainContent.css'
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom'
import Offer from './Offer';
import Contact from './Contact';
import OfferProducts from './OfferProducts';

class MainContent extends Component {
  constructor(){
    super();
    this.state={
        home:"none",
        about:"none"
    };
  }
  render() {
    const Page404 = ({ location }) => (
      <div>
         <h3>Nie znaleziono adresu <code><b>homastolarstwo.pl{location.pathname}</b></code></h3>
         <p><a href="/">>> Kliknij by przejść do strony startowej </a></p>
      </div>
   );
    return (
      <BrowserRouter>
      <div className="MainContent">
        <Nav/>
      <div className="logo">
          <Link to='/'>Homa.</Link>
        </div>
            <Switch>
              <Route exact path='/'component={Home}/>
              <Route path='/About'component={About}/>
              <Route path='/Offer'component={Offer}/>
              <Route path='/Contact'component={Contact}/>
              <Route path='/Product' component={OfferProducts}/>
              <Route component={Page404} />
            </Switch>
        <Socials/>
      </div>
      </BrowserRouter>
    )
  }
}
export default MainContent;