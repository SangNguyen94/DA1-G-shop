import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory,DefaultRoute } from 'react-router';
import PublishGames from '../ui/PublishGames';
import Signup from '../ui/Signup';


import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer } from 'react-router-redux';
//import reducers from './reducers';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import AddPublisher from '../ui/AddPublisher'
import Hometempt from '../ui/Hometempt'
import FileUpload from "../ui/FileUpload"
import AddGames from '../ui/AddGames'

import DashBoardContainer from '../ui/HOC/DashBoardContainer';
import AddGamesContainer from '../ui/HOC/AddGamesContainer';
import GameDetailsContainer from '../ui/HOC/GameDetailsContainer';
import GameDetails from '../ui/GameDetails';
import checkout from '../ui/CheckOut';
import Library from '../ui/Library';
import UpdateGames from '../ui/GameUpdate';
import SearchPage from '../ui/SearchPage';
import Statistic from '../ui/Statistic';
import { publisher } from '../api/publisher';
import { any } from 'prop-types';
import UpdateProfile from '../ui/UpdateProfile';
const unauthenticatedPages = ['/', '/signup','/login'];
const authenticatedPages = ['/add-publisher','/publish-games','/logged'];
let isPublisher=false;
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/login');
  }
};
checkIsPub=()=>{
  let pubs;
  Tracker.autorun(()=>{
  Meteor.subscribe('publisher');
  
   pubs=publisher.find({userId:Meteor.userId()}).fetch();
       console.log(pubs);
  });
  
  console.log(pubs);
  return pubs;
}
const onEnterPublisherPage = () =>{
    let pu=checkIsPub();
    if(Array.isArray(pu) && pu.length)
    {
    }
    else
    {
      browserHistory.push('/logged');
    }
    
    
}
export const onPublisher=(pubs)=>{
  if(typeof pubs==='undefined')
  {
    isPublisher=false;
  }
  else{
    isPublisher=true;
  }
  console.log(isPublisher);
}
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  
  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/logged');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};
const store = createStore(
  combineReducers({
    
    routing: routerReducer
  })
)

 
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)
 

export const routes = (
  <Provider store={store}>
  <Router history={history}>
    
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/" component={DashBoardContainer}/>
    <Route path='/logged' component={DashBoardContainer} />
    <Route path='/library' component={Library} onEnter={onEnterPrivatePage}/>
    <Route path='/statistic' component={Statistic} onEnter={onEnterPublisherPage}/>
    <Route path='/update-profile' component={UpdateProfile} onEnter={onEnterPublisherPage}/>
    <Route path='/search-games/:searchParam' component={SearchPage}/>
    <Route path='/update-game/:gameID' component={UpdateGames} onEnter={onEnterPublisherPage}/>
    <Route path='/view-game-details/:gameID'  component={GameDetails}/>
    <Route path='/checkout' component={checkout} onEnter={onEnterPrivatePage}/>
    <Route path='/add-games' component={AddGamesContainer} onEnter={onEnterPublisherPage}/>
    <Route path="/temp" component={Hometempt} onEnter={onEnterPrivatePage}/>
    <Route path="/add-publisher" component={AddPublisher} onEnter={onEnterPrivatePage}/>
    <Route path="/publish-games" component ={PublishGames} onEnter={onEnterPublisherPage}/>
    <Route path="*" component={NotFound}/>
    
  </Router>
  </Provider>
);
