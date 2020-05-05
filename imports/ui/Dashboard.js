import React from 'react';
import {Meteor } from 'meteor/meteor'
import PrivateHeader from './PrivateHeader';

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
      <div className="page-content">
        Dashboard page content.
        <div className="main-button">
                <button onClick={Meteor.call('addRoles',{roles: 'publisher'})}>Become a publisher!</button>
              </div>  
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


