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
          
        
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
            <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet"/>
        
            <title>Publish Games</title>
        
            <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        
        
           
            <link rel="stylesheet" href="../assets/css/fontawesome.css"/>
            <link rel="stylesheet" href="../assets/css/tooplate-main.css"/>
            <link rel="stylesheet" href="../assets/css/owl.css"/>
            <link rel="stylesheet" href="../assets/css/flex-slider.css"/>
      
          
        
          <body>
            
            
            <div id="pre-header">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <span>Welcome game publisher</span>
                  </div>
                </div>
              </div>
            </div>
        
          
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
              <div class="container">
                <a class="navbar-brand" href="#"><img src="assets/images/header-logo.png" alt=""/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="products.html">Products
                        <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="contact.html">Contact Us</a>
                      <span class="sr-only">(current)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        
             
             
            <div class="contact-page">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="section-heading">
                      <div class="line-dec"></div>
                      <h1>Contact Us</h1>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div >
                            
        
                      
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="right-content">
                      <div class="container">
                        <form id="contact" action="" method="post">
                          <div class="row">
                            <div class="col-md-6">
                              <fieldset>
                                <input name="name" type="text" class="form-control" id="name" placeholder="Your name..." required=""/>
                              </fieldset>
                            </div>
                            <div class="col-md-6">
                              <fieldset>
                                <input name="email" type="text" class="form-control" id="email" placeholder="Your email..." required=""/>
                              </fieldset>
                            </div>
                            <div class="col-md-12">
                              <fieldset>
                                <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject..." required=""/>
                              </fieldset>
                            </div>
                                <div class="col-md-12">
                                <fieldset>
                                 <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                </fieldset>
                            </div>
                            <div class="col-md-12">
                              <fieldset>
                                <button type="submit" id="form-submit" class="button">Send Message</button>
                              </fieldset>
                            </div>
                            <div class="col-md-12">
                              <div class="share">
                                <h6>You can also keep in touch on: <span><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-twitter"></i></a></span></h6>
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
           
            <div class="subscribe-form">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="section-heading">
                      <div class="line-dec"></div>
                      <h1>Subscribe on PIXIE now!</h1>
                    </div>
                  </div>
                  <div class="col-md-8 offset-md-2">
                    <div class="main-content">
                      <p>Godard four dollar toast prism, authentic heirloom raw denim messenger bag gochujang put a bird on it celiac readymade vice.</p>
                      <div class="container">
                        <form id="subscribe" action="" method="get">
                          <div class="row">
                            <div class="col-md-7">
                              <fieldset>
                                <input name="email" type="text" class="form-control" id="email" 
                                onfocus="if(this.value == 'Your Email...') { this.value = ''; }" 
                                onBlur="if(this.value == '') { this.value = 'Your Email...';}"
                                value="Your Email..." required=""/>
                              </fieldset>
                            </div>
                            <div class="col-md-5">
                              <fieldset>
                                <button type="submit" id="form-submit" class="button">Subscribe Now!</button>
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
            
        
        
            
            
            <div class="footer">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="logo">
                      <img src="assets/images/header-logo.png" alt=""/>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="footer-menu">
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">How It Works ?</a></li>
                        <li><a href="#">Contact Us</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="social-icons">
                      <ul>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-rss"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        
        
            <div class="sub-footer">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="copyright-text">
                      <p>Copyright &copy; Nguyen Quoc Nam Sang
                        
                        - Design: <a rel="nofollow" href="https://www.facebook.com/">SangNguyen</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        
        
      
            <script src="../vendor/jquery/jquery.min.js"></script>
            <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        
 
            <script src="../assets/js/custom.js"></script>
            <script src="../assets/js/owl.js"></script>
            <script src="../assets/js/isotope.js"></script>
            <script src="../assets/js/flex-slider.js"></script>
        
        
            
        
        
          </body>
        
          </div>
        
    );
  }
}
