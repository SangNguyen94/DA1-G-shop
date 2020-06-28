import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import {Link, Router, Route, browserHistory } from 'react-router';
import styled from 'styled-components';
import {publisher} from '../api/publisher'
import {Meteor} from "meteor/meteor"
import { Tracker } from 'meteor/tracker'
import { MongoObject } from 'simpl-schema';
import carts from './Cart';
import {Mongo} from 'meteor/mongo';
import CartContainer from './HOC/CartContainer';
const StyledLink= styled(Link)`
  background-color: #3a8bcd;
  border-radius: 5px;
    padding: 10px 15px;
  display: inline-block;
  color: #fff;
  font-size: 10px;
    text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.4px;
  text-decoration: none;
  transition: all 0.5s;
  &:hover{
    opacity: 0.7;
  }
 `;
class PrivateHeader extends Component {

  constructor(props)
  {
    super(props);
  };



 
  // if(isPub)
  // {
  //   return (
  //    <div>
  //     <meta charSet="utf-8"/>
  //           <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  //           <meta name="description" content=""/>
  //           <meta name="author" content=""/>

  //           <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet"/>


  //           <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        
           
  //           <link rel="stylesheet" href="/assets/css/fontawesome.css"/>
  //           <link rel="stylesheet" href="/assets/css/tooplate-main.css"/>
  //           <link rel="stylesheet" href="/assets/css/owl.css"/>
  //           <link rel="stylesheet" href="/assets/css/flex-slider.css"/>
      
  //           <nav className="navbar navbar-expand-sm navbar-inverse flex-nowrap justify-content-center">
  //           <span className="navbar-brand w-50 "  href="#">
  //             <img src="/brand.png" width="150" height="80" alt="G-Shop"/>
  //           </span>
           
  //           <ul className="nav nav-pills nav-fill flex-column flex-sm-row justify-content-center w-100 " >
            
  //           <li className="nav-item active" >
  //             <a className="nav-link" href="index.html">Home</a>
  //             <span className="sr-only">(current)</span>
  //           </li>
  //           <li className="nav-item" style={{ color: "#0c1621" }}>
  //             <a className="nav-link" href="products.html">Products
              
  //             </a>
  //           </li>
  //           <li className="nav-item" style={{ color: "#0c1621" }}>
  //             <a className="nav-link" href="about.html">About Us</a>
  //           </li>
  //           <li className="nav-item " style={{ color: "#0c1621" }}>
  //             <a className="nav-link" href="contact.html">Contact Us</a>
              
  //           </li>
           
  //         </ul>
         
  //         <button className="button button--link-text" onClick={() => {
  //           Accounts.logout();
            
  //         }}>Logout</button>
          
  //       </nav>
        
  //           <div id="pre-header">
              
                
  //                 <div className="col-md-12">
  //                   <span>Welcome Gamers</span>
  //                 </div>
                
              
  //           </div>
          
          
  //           </div>
      
  //   );
  // }
  // else 
  render(){
    let currentPageIsHome=false;
    let current=this.props.currentpath;
    let activeHome;
    let activeGames;
    let currentPageIsAddPubs=false;
    let currentPageIsAddGames=false;
    let currentPageIsGamesList=false;
    if(current=="/"||current=="/logged")
    {
      currentPageIsHome=true;
      activeHome="active";
    }
    if(current=="/GamesList")
    {
      currentPageIsGamesList=true;
      activeGames="active";
    }
    
  if(this.props.user) {
    return  <div>
    <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="description" content=""/>
          <meta name="author" content=""/>

          <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet"/>


          <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
      
         
          <link rel="stylesheet" href="/assets/css/fontawesome.css"/>
          <link rel="stylesheet" href="/assets/css/tooplate-main.css"/>
          <link rel="stylesheet" href="/assets/css/owl.css"/>
          <link rel="stylesheet" href="/assets/css/flex-slider.css"/>
       
    
          <nav className="navbar navbar-expand-sm navbar-inverse flex-nowrap justify-content-center">
          <span className="navbar-brand w-50 "  href="#">
            <img src="/brand.png" width="150" height="80" alt="G-Shop"/>
          </span>
         
          <ul className="nav nav-pills nav-fill flex-column flex-sm-row justify-content-center w-100 " >
          
          <li className={"nav-item "+ activeHome} >
            <a className="nav-link" onClick={()=>browserHistory.push('/logged')}>Home</a>
            <span className="sr-only">(current)</span>
          </li>
          <li className={"nav-item" + activeGames} style={{ color: "#0c1621" }}>
            <a className="nav-link" href="products.html">Products
            
            </a>
          </li>
          <li className="nav-item" style={{ color: "#0c1621" }}>
            <a className="nav-link" href="about.html">About Us</a>
          </li>
          <li className="nav-item " style={{ color: "#0c1621" }}>
            <a className="nav-link" href="contact.html">Contact Us</a>
            
          </li>
          
          
        </ul>
       <CartContainer className="w-50"></CartContainer>
       <br></br>
        <button className="button button--link-text" onClick={() => {
          Accounts.logout();
          browserHistory.replace("/");
        }}>Logout</button>
        
      </nav>
      
          
        
        
          </div>
    
  
   
    }
    else{
      return <div>
      <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>

            <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet"/>


            <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        
           
            <link rel="stylesheet" href="/assets/css/fontawesome.css"/>
            <link rel="stylesheet" href="/assets/css/tooplate-main.css"/>
            <link rel="stylesheet" href="/assets/css/owl.css"/>
            <link rel="stylesheet" href="/assets/css/flex-slider.css"/>
      
            <nav className="navbar navbar-expand-sm navbar-inverse flex-nowrap justify-content-center">
            <span className="navbar-brand w-50 "  href="#">
              <img src="/brand.png" width="150" height="80" alt="G-Shop"/>
            </span>
           
            <ul className="nav nav-pills nav-fill flex-column flex-sm-row justify-content-center w-100 " >
            
              <li className={"nav-item "+activeHome} >
                <a className="nav-link" onClick={()=>browserHistory.push('/logged')}>Home</a>
                <span className="sr-only">(current)</span>
              </li>
              <li className={"nav-item"+ activeGames} style={{ color: "#0c1621" }}>
                <a className="nav-link" href="products.html">Products
                
                </a>
              </li>
              <li className="nav-item" style={{ color: "#0c1621" }}>
                <a className="nav-link" href="about.html">About Us</a>
              </li>
              <li className="nav-item " style={{ color: "#0c1621" }}>
                <a className="nav-link" href="contact.html">Contact us</a>
                
              </li>
              
             </ul>
             <button className="button button--link-text " onClick={() => browserHistory.push('/signup')}>Signup</button>
  
             <button className="button button--link-text" onClick={() => browserHistory.push('/login')}>Login</button>
        </nav>
        
            
          
            </div>
    }
  
 

}

}

export default withTracker( ( props ) => {
  const currentpath=browserHistory.getCurrentLocation().pathname;
  
  const user=Meteor.userId();

  return {
    currentpath,
    user,
  };
})(PrivateHeader);
