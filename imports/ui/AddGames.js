import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor'
import shortid from 'shortid';
import GameFileUploadContainer from '../ui/GameFileUploadContainer'
import { FileUploadComponent } from './FileUpload'
import { Router, Route, browserHistory } from 'react-router';
import FileUploadContainer from '../routes/FileUploadContainer';
import PrivateHeader from './PrivateHeader';
export default class AddGames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            id: shortid.generate(),
            
        };
        console.log(this.props);

    }
    onSubmit(e) {
        e.preventDefault();
        let success=true;
        let gname = this.refs.gname.value.trim();
        let gtags = this.refs.gtags.value.trim();
        let gprice = this.refs.gprice.value.trim();
        let gsale =this.refs.sale.value;
        let gdescr= this.refs.gdescr.value.trim();
        Meteor.call('games.insert', this.state.id, gname, gtags, gprice, gsale,gdescr,this.props.isPub[0].company, (err, res) => {
            if (err) {
                
                alert(err);
            }
            else{
                browserHistory.push('/logged');
            }


        });

        


    }
    render() {
        return (
            <div>


                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />

                <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet" />

                <title>Add publisher</title>

                <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />


                <link rel="stylesheet" href="/assets/css/fontawesome.css" />
                <link rel="stylesheet" href="/assets/css/tooplate-main.css" />
                <link rel="stylesheet" href="/assets/css/owl.css" />
                <link rel="stylesheet" href="/assets/css/flex-slider.css" />

                <PrivateHeader >

                </PrivateHeader>
                <div id="pre-header">


                    <div className="col-md-12">
                        <span>Welcome game publisher</span>
                    </div>


                </div>




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
                                <FileUploadContainer id={this.state.id}>

                                </FileUploadContainer>
                                <br/>
                                <div>
                                <GameFileUploadContainer id={this.state.id}>

                                    </GameFileUploadContainer>
                                </div>
                                
                               
                            </div>
                            
                        
                            <div className="col-md-6">
                                <div className="right-content">
                                    <div className="container">
                                        <form id="contact" method="post" onSubmit={this.onSubmit.bind(this)} >
                                            <div className="row">
                                                
                                                <div className="col-md-6">
                                                    <fieldset>
                                                        <input name="CompanyName" type="text" ref="gname" className="form-control" id="email" placeholder="Game name" required />
                                                    </fieldset>
                                                </div>
                                                <div className="col-md-6">
                                                    <fieldset>
                                                        <input name="CompayName" type="text" ref="gtags" className="form-control" id="email" placeholder="Game tags" required />
                                                    </fieldset>
                                                </div>

                                                <div className="col-md-6">
                                                    <fieldset>
                                                        <textarea name="Description" rows="6" ref="gdescr" className="form-control" id="message" placeholder="Game description" required></textarea>
                                                    </fieldset>
                                                </div>
                                                <div className="col-md-6">
                                                    <fieldset>
                                                    <label htmlFor="sale">Sale percentage (between 0 and 100):</label>
                                                    <input type="number" id="sale" name="sale" ref="sale" min="0" max="100"/>
                                                    </fieldset>
                                                </div>
                                                <div className="col-md-6">
                                                <div className="input-group md-6">
                                                    
                                                    <input type="text" className="form-control" ref="gprice" placeholder="Your game price in $ here" aria-label="Amount (to the nearest dollar)" required/>
                                                    
                                                </div>
                                                </div>
                                                    <div className="col-md-6">
                                                        <fieldset>
                                                            <button type="submit" id="form-submit" className="main-button button">Become a Publisher!</button>
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
                                        <img src="/brand.png" alt="" />
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

