import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor'
import shortid from 'shortid';
import { FileUploadComponent } from './FileUpload'
import { Router, Route, browserHistory } from 'react-router';
import FileUploadContainer from '../routes/FileUploadContainer';
import PrivateHeader from './PrivateHeader';
import AvatarUploadContainer from './AvatarUploadComponent';
import OrderReview from './OrderReview';
import OrderContainer from './HOC/OrderContainer';
export default class checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            total:0
        };
    }
    onSubmit(e) {
        e.preventDefault();



    }
    render() {
        return (
            <div>
                <PrivateHeader >
                </PrivateHeader>

                <div className="section w-100">

                    <div className="container w-100">

                        <div className="row w-100">
                            <form id="checkout-form" className="clearfix w-100">

                                <div className="payments-methods">
                                    <div className="section-title">
                                        <h4 className="title">Payments Methods</h4>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="radio" name="payments" id="payments-1" checked />
                                        <label htmlFor="payments-1">Direct Bank Transfer</label>
                                        <div className="caption">
                                            <p>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="radio" name="payments" id="payments-3" />
                                        <label htmlFor="payments-3">Paypal System</label>
                                        <div className="caption">
                                            <p>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-12">
                                  <OrderContainer>

                                  </OrderContainer>
                                </div>
                            </form>
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






            </div>

        );
    }
}
