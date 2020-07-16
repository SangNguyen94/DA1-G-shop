import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session'
import IndividualOrderContainer from './HOC/IndividualOrderContainer';
import {browserHistory} from 'react-router';
export default class OrderReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            total: 0

        };
    }
    orderPlace()
    {
        Meteor.call('order.insert',this.props.files.products,true,false);
        Meteor.call('cart.remove',Meteor.userId());
        this.props.files.products.map(product=>{
            Meteor.call('games.buy',product,1);
            Meteor.call('gamesList.insert',product,false);
        })
        browserHistory.push('/logged');
    }

    render() {
        if (this.props.docsReadyYet) {
            let fileCursors=this.props.files.products;
            let disp = fileCursors.map((aFile, key) => {
                // console.log('A file: ', aFile.link(), aFile.get('name'))
               // let link = GameFiles.findOne({ _id: aFile._id }).link();  //The "view/download" link

                // Send out components that show details of each file
                return  <IndividualOrderContainer id={aFile } key={'file'+key} />
              
            })
        
        return <div className="order-summary clearfix">
            <div className="section-title">
                <h3 className="title">Order Review</h3>
            </div>
            <table className="shopping-cart-table table">
                <thead>
                    <tr>
                        <th>Game</th>
                        <th></th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Sale</th>
                        <th className="text-center">Total</th>
                        <th className="text-right"></th>
                    </tr>
                </thead>
                {disp}

                {/* <tbody>
                    <tr>
                        
                    </tr>
                    <tr>
                        <td className="thumb"><img src="./img/thumb-product01.jpg" alt="" /></td>
                        <td className="details">
                            <a href="#">Product Name Goes Here</a>
                            <ul>
                                <li><span>Size: XL</span></li>
                                <li><span>Color: Camelot</span></li>
                            </ul>
                        </td>
                        <td className="price text-center"><strong>$32.50</strong></td>
                        <td className="qty text-center"><input className="input" type="number" value="1" /></td>
                        <td className="total text-center"><strong className="primary-color">$32.50</strong></td>
                        <td className="text-right"><button className="main-btn icon-btn"><i className="fa fa-close"></i></button></td>
                    </tr>
                    <tr>
                        <td className="thumb"><img src="./img/thumb-product01.jpg" alt="" /></td>
                        <td className="details">
                            <a href="#">Product Name Goes Here</a>
                            <ul>
                                <li><span>Size: XL</span></li>
                                <li><span>Color: Camelot</span></li>
                            </ul>
                        </td>
                        <td className="price text-center"><strong>$32.50</strong></td>
                        <td className="qty text-center"><input className="input" type="number" value="1" /></td>
                        <td className="total text-center"><strong className="primary-color">$32.50</strong></td>
                        <td className="text-right"><button className="main-btn icon-btn"><i className="fa fa-close"></i></button></td>
                    </tr>
                </tbody> */}
                <tfoot>
                    <tr>
                        <th className="empty" colSpan="3"></th>
                        <th>TOTAL</th>
                        <th colSpan="2" className="total">{this.props.total}</th>
                    </tr>
                </tfoot>
            </table>
            <div className="pull-right">
                <button className="primary-btn" onClick={this.orderPlace.bind(this)}>Place Order</button>
            </div>
        </div>
        }
        else
        {
            return <div>
                <p>
                    Loading order
                </p>
            </div>
        }
    }
}
