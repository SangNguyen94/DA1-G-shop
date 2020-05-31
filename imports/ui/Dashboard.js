import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor } from 'meteor/meteor'
import PrivateHeader from './PrivateHeader';
import { Router,Route,Link,browserHistory } from 'react-router';
import styled from 'styled-components';
import {publisher} from '../api/publisher';
import GameDisplayContainer from './GameDisplayContainer';

// const StyledLink= styled(Link)`
//   background-color: #3a8bcd;
//   border-radius: 5px;
//     padding: 10px 15px;
//   display: inline-block;
//   color: #fff;
//   font-size: 10px;
//     text-transform: uppercase;
//   font-weight: 300;
//   letter-spacing: 0.4px;
//   text-decoration: none;
//   transition: all 0.5s;
//   &:hover{
//     opacity: 0.7;
//   }
//  `;
export default class DashBoard extends Component {

  constructor(props)
  {
    super(props);
    console.log(this.props.isPub)
  };
  banner(){
    //return banner if user not publisher
    
      if(this.props.isPub.length===0)
      { 
     return <div>
       
            <div className="banner">
       <div className="container">
         <div className="row">
           <div className="col-md-12">
             <div className="caption">
               <h2>Become a games publisher now!</h2>
               <div className="line-dec"></div>
               <p>This is a new website and we are in dire need of games publisher to support us.We will give the full of privilege of <strong>zero cuts</strong> included. You can use this privilege for as much as we like 
               <br></br>Please tell your friends about <a rel="nofollow" href="">G-shop</a> Thank you. Photo credit goes to <a rel="nofollow" href="https://bethesda.net/game/doom">Doom eternal</a>.</p>
               <div className="main-button">
                 <a href="" onClick={()=>browserHistory.push('/add-publisher') }>Become a game publisher now!</a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     </div>
     
    }
    else
    {return <div>
      <div className="banner">
       <div className="container">
         <div className="row">
           <div className="col-md-12">
             <div className="caption">
               <h2>Publish your games!</h2>
               <div className="line-dec"></div>
               <p>Press the button below to add games to our collection and publish them with <strong>full privilege</strong> included. 
               <br></br>Please tell your friends about <a rel="nofollow" href="">G-shop</a> Thank you. Photo credit goes to <a rel="nofollow" href="https://bethesda.net/game/doom">Doom eternal</a>.</p>
               <div className="main-button">
                 <a href=""  onClick={()=>browserHistory.push('/add-games',{company:this.props.isPub.company})}>Add your games now!</a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     </div>
    }
  
  }
  render(){
    //Header and accounts info
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
      
        
  
    
    <div>
      <PrivateHeader title="g-shop"/>
      <div id="pre-header">
              
                
                  <div className="col-md-12">
                    <span>Welcome Gamers</span>
                  </div>
                
              
            </div>
     </div>
     {this.banner()}
     <GameDisplayContainer>

     </GameDisplayContainer>
  </div>
  
 

  }

  
 
};



