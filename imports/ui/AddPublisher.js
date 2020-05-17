import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor'
import shortid from 'shortid';
import {FileUploadComponent} from './FileUpload'
import { Router, Route, browserHistory } from 'react-router';
import FileUploadContainer from '../routes/FileUploadContainer';
export default class AddPublisher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let pubName= this.refs.name.value.trim();
    let pubCompany= this.refs.company.value.trim();
    let descr= this.refs.descr.value.trim();
    Meteor.call('publisher.insert',pubName,pubCompany,descr,(err, res) => {
        if (err) {
          alert(err);
        } 
          
        
      });
    
    browserHistory.push('/home');


}
  render() {
    return( 
        <div>  
          
        
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
            <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet"/>
        
            <title>Add publisher</title>
        
            <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        
        
           
            <link rel="stylesheet" href="/assets/css/fontawesome.css"/>
            <link rel="stylesheet" href="/assets/css/tooplate-main.css"/>
            <link rel="stylesheet" href="/assets/css/owl.css"/>
            <link rel="stylesheet" href="/assets/css/flex-slider.css"/>
      
          
        
          
            
            
            <div id="pre-header">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <span>Welcome game publisher</span>
                  </div>
                </div>
              </div>
            </div>
        
          
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
              <div className="container">
                <a className="navbar-brand" href="#"><img src="assets/images/header-logo.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" >Home</a>
                      <Link to='/home'></Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="products.html">Products
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">About Us</a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="contact.html">Contact Us</a>
                      <span className="sr-only">(current)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        
             
             
            <div className="contact-page">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="section-heading">
                      <div className="line-dec"></div>
                      <h1>Contact Us</h1>
                    </div>
                  </div>
                  <div className="col-md-6">
                   <FileUploadContainer></FileUploadContainer>
                    <div >
                            
        
                      
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right-content">
                      <div className="container">
                        <form id="contact" method="post" onSubmit={this.onSubmit.bind(this)} noValidate>
                          <div className="row">
                            <div className="col-md-6">
                              <fieldset>
                                <input name="name" type="text" ref="name" className="form-control" id="name" placeholder="Your name..." required=""/>
                              </fieldset>
                            </div>
                            <div className="col-md-6">
                              <fieldset>
                                <input name="CompanyName" type="text" ref="company" className="form-control" id="email" placeholder="Your company name..." required=""/>
                              </fieldset>
                            </div>
                           
                                <div className="col-md-12">
                                <fieldset>
                                 <textarea name="Description" rows="6" ref="descr" className="form-control" id="message" placeholder="Short description of your company..." required=""></textarea>
                                </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <button type="submit" id="form-submit" className="button">Become a Publisher!</button>
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            
        
        
            
            
            <div className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="logo">
                      <img src="assets/images/header-logo.png" alt=""/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="footer-menu">
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">How It Works ?</a></li>
                        <li><a href="#">Contact Us</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="social-icons">
                      <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-rss"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        
        
            <div className="sub-footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="copyright-text">
                      <p>Copyright &copy; Nguyen Quoc Nam Sang
                        
                        - Design: <a rel="nofollow" href="https://www.facebook.com/">SangNguyen</a></p>
                    </div>
                  </div>
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
  }
}
