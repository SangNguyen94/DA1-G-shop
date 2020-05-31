import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor'
export default class PublishGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();


   




}
  render() {
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
                      <a className="nav-link" href="index.html">Home</a>
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
                    <div >
                            
        
                      
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right-content">
                      <div className="container">
                        <form id="contact" action="" method="post">
                          <div className="row">
                            <div className="col-md-6">
                              <fieldset>
                                <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required=""/>
                              </fieldset>
                            </div>
                            <div className="col-md-6">
                              <fieldset>
                                <input name="email" type="text" className="form-control" id="email" placeholder="Your email..." required=""/>
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required=""/>
                              </fieldset>
                            </div>
                                <div className="col-md-12">
                                <fieldset>
                                 <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <button type="submit" id="form-submit" className="button">Send Message</button>
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <div className="share">
                                <h6>You can also keep in touch on: <span><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-linkedin"></i></a><a href="#"><i className="fa fa-twitter"></i></a></span></h6>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="subscribe-form">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="section-heading">
                      <div className="line-dec"></div>
                      <h1>Subscribe on PIXIE now!</h1>
                    </div>
                  </div>
                  <div className="col-md-8 offset-md-2">
                    <div className="main-content">
                      <p>Godard four dollar toast prism, authentic heirloom raw denim messenger bag gochujang put a bird on it celiac readymade vice.</p>
                      <div className="container">
                        <form id="subscribe" action="" method="get">
                          <div className="row">
                            <div className="col-md-7">
                              <fieldset>
                                <input name="email" type="text" className="form-control" id="email" 
                                onfocus="if(this.value == 'Your Email...') { this.value = ''; }" 
                                onBlur="if(this.value == '') { this.value = 'Your Email...';}"
                                value="Your Email..." required=""/>
                              </fieldset>
                            </div>
                            <div className="col-md-5">
                              <fieldset>
                                <button type="submit" id="form-submit" className="button">Subscribe Now!</button>
                              </fieldset>
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
