import React from 'react';
import {Meteor } from 'meteor/meteor'
import PrivateHeader from './PrivateHeader';
import { Router,Route,Link } from 'react-router';
import styled from 'styled-components';

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
export default () => {
 

  return (
    <div>
    
        
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="description" content=""/>
    <meta name="author" content=""/>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet"/>

    <title>Publish Games</title>

    <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>


   
    <link rel="stylesheet" href="/assets/css/fontawesome.css"/>
    <link rel="stylesheet" href="/assets/css/tooplate-main.css"/>
    <link rel="stylesheet" href="/assets/css/owl.css"/>
    <link rel="stylesheet" href="/assets/css/flex-slider.css"/>
    
    <div>
      <PrivateHeader title="Home"/>
      <div className="row justify-content-end">
      <div className="col-5 ">
        <div className="main-button" >
        
               
              </div>  
      </div>
      </div>
      <div className="page-content">
        Dashboard page content.
        
      </div>

    </div>
    <script src="/vendor/jquery/jquery.min.js"></script>
    <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


    <script src="/assets/js/custom.js"></script>
    <script src="/assets/js/owl.js"></script>
    <script src="/assets/js/isotope.js"></script>
    <script src="/assets/js/flex-slider.js"></script>
    </div>
  );
};


