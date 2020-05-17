import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import styled from 'styled-components';
import {publisher} from '../api/publisher'
import {Meteor} from "meteor/meteor"
import { Tracker } from 'meteor/tracker'
import { MongoObject } from 'simpl-schema';
import {Mongo} from 'meteor/mongo';
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
const PrivateHeader = (props) => {
  
  Tracker.autorun(()=>{
    Meteor.subscribe('publisher');
  }
  );
  if(publisher.find({userID:this.userID}))
  {
    return (
      <div className="header">
        <div className="header__content">
          <h1 className="header__title">{props.title}</h1>
          
          
          <button className="button button--link-text" onClick={() => Accounts.logout()}>Logout</button>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="header">
        <div className="header__content">
          <h1 className="header__title">{props.title}</h1>
          
          <StyledLink to="/add-publisher" >
              Become a publisher
          </StyledLink>
          <button className="button button--link-text" onClick={() => Accounts.logout()}>Logout</button>
        </div>
      </div>
    );
  }
 
};

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;
