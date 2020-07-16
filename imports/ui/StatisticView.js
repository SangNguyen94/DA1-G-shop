import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session'
import IndividualOrderContainer from './HOC/IndividualOrderContainer';
import {browserHistory} from 'react-router';
import IndividualGameStatContainer from './HOC/IndividualGameStatContainer';
export default class StatisticReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            total: 0

        };
    }

    render() {
        if (this.props.gamesReady) {
            let fileCursors=this.props.files;
            let disp = fileCursors.map((aFile, key) => {
                // console.log('A file: ', aFile.link(), aFile.get('name'))
               // let link = GameFiles.findOne({ _id: aFile._id }).link();  //The "view/download" link

                // Send out components that show details of each file
                return  <IndividualGameStatContainer id={aFile._id } key={'file'+key} />
              
            })
        
        return <div className="order-summary clearfix">
            <div className="section-title">
                <h3 className="title">Statistic review</h3>
            </div>
            <table className="shopping-cart-table table">
                <thead>
                    <tr>
                        <th>Game</th>
                        <th></th>
                        <th className="text-center">Profit</th>
                        <th className="text-center">Amount Sold</th>
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
        </div>
        }
        else
        {
            return <div>
                <p>
                    No statistic
                </p>
            </div>
        }
    }
}
